<script lang="ts">
import { defineComponent, h, VNode } from 'vue';
import type { PropType } from 'vue';

function getFirstSlotVNode(vnodes?: VNode[]) {
  if (vnodes != null) {
    return vnodes[0];
  }
  return null;
}

export default defineComponent({
  props: {
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    function handleMouseEnter(e: Event) {
      console.log('mouseenter');
    }

    function hanldeMouseLeave(e: Event) {
      console.log('mouseleave');
    }

    function handleClick(e: Event) {
      console.log('click');
    }

    return () => {
      const firstVNode = getFirstSlotVNode(
        slots.default != null ? slots.default() : undefined,
      );
      if (firstVNode == null) {
        return null;
      }
      const prop: any = {};
      if (props.trigger === 'hover') {
        prop.onMouseenter = handleMouseEnter;
        prop.onMouseleave = hanldeMouseLeave;
      } else {
        prop.onClick = handleClick;
      }
      return h('div', h(firstVNode, prop));
    };
  },
});
</script>
