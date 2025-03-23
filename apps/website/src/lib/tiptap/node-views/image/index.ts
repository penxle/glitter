import { createNodeView } from '../../lib';
import Component from './Component.svelte';

declare module '@tiptap/core' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Commands<ReturnType> {
    image: {
      setImage: () => ReturnType;
    };
  }
}

export const Image = createNodeView(Component, {
  name: 'image',
  group: 'block',
  draggable: true,

  addAttributes() {
    return {
      id: {},
      url: {},
      ratio: {},
      placeholder: {},
      proportion: { default: 1 },
    };
  },

  addCommands() {
    return {
      setImage:
        () =>
        ({ commands }) => {
          return commands.insertContent({ type: 'image' });
        },
    };
  },
});
