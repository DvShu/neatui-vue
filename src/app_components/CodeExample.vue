<script lang="ts">
import { defineComponent, h } from 'vue';
import type { VNode } from 'vue';

export default defineComponent({
  setup(_props, { slots }) {
    const left: VNode[] = [];
    const right: VNode[] = [];
    if (slots.default != null) {
      for (let i = 0, len = slots.default().length; i < len; i++) {
        if (i % 2 === 0) {
          left.push(h(slots.default()[i]));
        } else {
          right.push(h(slots.default()[i]));
        }
      }
    }
    return () =>
      h('div', { class: 'code-example' }, [
        h(
          'div',
          {
            class: 'code-example-col',
          },
          left,
        ),
        h(
          'div',
          {
            class: 'code-example-col',
          },
          right,
        ),
      ]);
  },
});
</script>

<style lang="less">
.code-example {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 5px 0;
}

.code-example-col {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: min-content;
  gap: 20px;
}
</style>
