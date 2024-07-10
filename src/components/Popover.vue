<script lang="ts">
import { defineComponent, h, VNode, Teleport, ref, Transition } from 'vue';
import type { PropType } from 'vue';

function getFirstTriggerVNode(slots: any): VNode | null {
  if (slots.trigger != null) {
    return slots.trigger()[0];
  }
  return null;
}

export default defineComponent({
  props: {
    /** 触发方式: hover - 渲染, click - 点击 */
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
    /** 显示的内容，也可以通过写入默认 slot 修改显示内容 */
    content: String,
  },
  setup(props, { slots, attrs }) {
    const show = ref(true);
    const posStyle = ref({
      left: '109px',
      top: '400px',
    });
    function getDistanceToScrollTop(element) {
      let distance = 0;
      while (element) {
        distance += element.offsetTop;
        element = element.offsetParent;
      }
      return distance;
    }

    function handleMouseEnter(e: Event) {
      const $target = e.target as HTMLElement;
      const rect = $target.getBoundingClientRect();
      console.log(getDistanceToScrollTop1($target));
      posStyle.value = {
        top: 560 + 'px',
        left: `${rect.left}px`,
      };
      show.value = true;
    }

    /** 鼠标离开事件 */
    function hanldeMouseLeave() {
      show.value = false;
    }

    function handleClick(e: Event) {
      console.log('click');
    }

    return () => {
      const firstVNode = getFirstTriggerVNode(slots);
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
      return [
        h(firstVNode, prop),
        h(
          Teleport,
          { to: 'body' },
          h(
            Transition,
            { name: 'nt-opacity' },
            {
              default: () =>
                show.value
                  ? h(
                      'div',
                      {
                        ...attrs,
                        class: ['nt-popover', attrs.class],
                        style: [posStyle.value],
                      },
                      [
                        slots.default != null
                          ? slots.default()
                          : props.content != null
                            ? h('span', props.content)
                            : null,
                        h('span', { class: 'nt-popover-arrow' }),
                      ],
                    )
                  : null,
            },
          ),
        ),
      ];
    };
  },
});
</script>
