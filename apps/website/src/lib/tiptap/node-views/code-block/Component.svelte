<script lang="ts">
  import { css } from '$styled-system/css';
  import { NodeView, NodeViewContentEditable } from '../../lib';
  import type { NodeViewProps } from '../../lib';

  type Props = NodeViewProps;

  // eslint-disable-next-line no-empty-pattern
  let {}: Props = $props();
</script>

<NodeView>
  <NodeViewContentEditable
    style={css.raw({
      paddingY: '18px',
      paddingX: '16px',
      fontSize: '14px',
      fontFamily: 'mono',
      backgroundColor: 'gray.100',
      borderRadius: '4px',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      '&:not(:has(.ProseMirror-trailingBreak))': {
        _after: {
          content: '""',
          display: 'inline-block',
        },
      },
    })}
    as="pre"
  />
</NodeView>
