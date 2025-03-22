import { Extension } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import { match } from 'ts-pattern';
import { css } from '$styled-system/css';

export const Placeholder = Extension.create({
  name: 'placeholder',
  priority: 1000,

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          decorations: (state) => {
            if (!this.editor.isEditable) {
              return null;
            }

            const decorations: Decoration[] = [];
            const { doc, selection } = state;
            const { $anchor, empty } = selection;

            const body = doc.child(0);
            const currentBodyEmpty =
              body.childCount === 1 && body.firstChild?.type.name === 'paragraph' && body.firstChild?.childCount === 0;

            const currentParagraphEmpty =
              this.editor.isFocused &&
              empty &&
              $anchor.depth === 2 &&
              $anchor.parent.type.name === 'paragraph' &&
              $anchor.parent.childCount === 0;

            if (currentBodyEmpty || currentParagraphEmpty) {
              decorations.push(
                createDecoration(
                  $anchor.pos === 1 ? 1 : $anchor.before(),
                  $anchor.pos === 1 ? 3 : $anchor.after(),
                  '내용을 입력하거나 /를 입력해 블록 삽입하기...',
                ),
              );
            }

            doc.descendants((node, pos) => {
              if (!node.isTextblock || node.childCount > 0) {
                return;
              }

              const $pos = doc.resolve(pos + 1);
              const block = $pos.node(2);
              if (!block) {
                return;
              }

              const placeholder = match(block.type.name)
                .with('blockquote', () => '인용구')
                .with('bullet_list', 'ordered_list', () => '목록')
                .otherwise(() => null);

              if (!placeholder) {
                return;
              }

              decorations.push(createDecoration(pos, pos + node.nodeSize, placeholder));
            });

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});

const createDecoration = (from: number, to: number, placeholder: string) => {
  return Decoration.node(from, to, {
    class: css({
      _before: {
        content: 'attr(data-placeholder)',
        float: '[left]',
        height: '0',
        color: 'gray.300',
        pointerEvents: 'none',
      },
    }),
    'data-placeholder': placeholder,
  });
};
