import { eq } from 'drizzle-orm';
import { db, Embeds, first, firstOrThrow, TableCode } from '@/db';
import * as iframely from '@/external/iframely';
import { builder } from '../builder';
import { Embed, isTypeOf } from '../objects';

/**
 * * Types
 */

Embed.implement({
  isTypeOf: isTypeOf(TableCode.EMBEDS),
  fields: (t) => ({
    id: t.exposeID('id'),
    url: t.exposeString('url'),
    title: t.exposeString('title', { nullable: true }),
    description: t.exposeString('description', { nullable: true }),
    thumbnailUrl: t.exposeString('thumbnailUrl', { nullable: true }),
    html: t.exposeString('html', { nullable: true }),
  }),
});

/**
 * * Mutations
 */

builder.mutationFields((t) => ({
  unfurlEmbed: t.withAuth({ session: true }).fieldWithInput({
    type: Embed,
    input: { url: t.input.string({ validate: { url: true } }) },
    resolve: async (_, { input }, ctx) => {
      const embed = await db.select().from(Embeds).where(eq(Embeds.url, input.url)).then(first);
      if (embed) {
        return embed;
      }

      const meta = await iframely.unfurl(input.url);

      return await db
        .insert(Embeds)
        .values({
          userId: ctx.session.userId,
          type: meta.type,
          url: input.url,
          title: meta.title,
          description: meta.description,
          thumbnailUrl: meta.thumbnailUrl,
          html: meta.html,
        })
        .returning()
        .then(firstOrThrow);
    },
  }),
}));
