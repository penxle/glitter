import { createNodeView } from '../../lib';
import Component from './Component.svelte';

declare module '@tiptap/core' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Commands<ReturnType> {
    file: {
      setFile: () => ReturnType;
    };
  }
}

export const File = createNodeView(Component, {
  name: 'file',
  group: 'block',

  addAttributes() {
    return {
      id: {},
      name: {},
      size: {},
      url: {},
    };
  },

  addCommands() {
    return {
      setFile:
        () =>
        ({ commands }) => {
          return commands.insertContent({ type: 'file' });
        },
    };
  },
});
