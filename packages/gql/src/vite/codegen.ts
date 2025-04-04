import path from 'node:path';
import * as R from 'remeda';
import { writeArtifactAssets, writeMiscAssets, writePublicAssets, writeTypeAssets } from '../codegen/writer';
import { buildContext } from '../context';
import type { Plugin } from 'vite';
import type { ContextHolder } from '../types';

export const codegenPlugin = (contextHolder: ContextHolder): Plugin => {
  const buildAndWriteContext = async () => {
    try {
      const context = await buildContext();
      await writeArtifactAssets(context);
      await writePublicAssets(context);
      await writeMiscAssets(context);
      await writeTypeAssets(context);
      contextHolder.context = context;

      console.log('🌈 Assets has been built and written');
    } catch (err: unknown) {
      console.error('🌈', err);
    }
  };

  const debounced = R.debounce(buildAndWriteContext, { waitMs: 100 });

  return {
    name: '@typie/gql:codegen',
    enforce: 'pre',

    buildStart: async () => {
      await buildAndWriteContext();
    },

    configureServer: async () => {
      await buildAndWriteContext();
    },

    watchChange: (id) => {
      if (contextHolder.context && id.startsWith(path.join(contextHolder.context.projectDir, 'src'))) {
        debounced.call();
      }
    },
  };
};
