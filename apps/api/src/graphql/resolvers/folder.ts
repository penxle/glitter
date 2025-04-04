import { and, desc, eq, isNull } from 'drizzle-orm';
import { generateJitteredKeyBetween } from 'fractional-indexing-jittered';
import { db, first, firstOrThrow, Folders } from '@/db';
import { builder } from '../builder';
import { Folder, FolderView, IFolder } from '../objects';

/**
 * * Types
 */

IFolder.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    order: t.expose('order', { type: 'Binary' }),
  }),
});

Folder.implement({
  interfaces: [IFolder],
});

FolderView.implement({
  interfaces: [IFolder],
});

/**
 * * Mutations
 */

builder.mutationFields((t) => ({
  createFolder: t.withAuth({ session: true }).fieldWithInput({
    type: Folder,
    input: {
      siteId: t.input.id(),
      parentId: t.input.id({ required: false }),
      name: t.input.string(),
    },
    resolve: async (_, { input }, ctx) => {
      const last = await db
        .select({ order: Folders.order })
        .from(Folders)
        .where(
          and(eq(Folders.userId, ctx.session.userId), input.parentId ? eq(Folders.parentId, input.parentId) : isNull(Folders.parentId)),
        )
        .orderBy(desc(Folders.order))
        .limit(1)
        .then(first);

      return await db
        .insert(Folders)
        .values({
          userId: ctx.session.userId,
          siteId: input.siteId,
          parentId: input.parentId,
          name: input.name,
          order: encoder.encode(generateJitteredKeyBetween(last ? decoder.decode(last.order) : null, null)),
        })
        .returning()
        .then(firstOrThrow);
    },
  }),
}));

/**
 * * Utils
 */

const encoder = new TextEncoder();
const decoder = new TextDecoder();
