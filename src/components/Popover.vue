<script lang="ts">
import {
  defineComponent,
  h,
  VNode,
  Teleport,
  ref,
  Transition,
  nextTick,
  onMounted,
} from 'vue';
import type { PropType } from 'vue';

function getFirstTriggerVNode(slots: any): VNode | null {
  if (slots.trigger != null) {
    return slots.trigger()[0];
  }
  return null;
}

/** 获取某个节点距离容器顶部和左边的距离 */
function getDistanceToContainer(el: HTMLElement) {
  let left = 0;
  let top = 0;
  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;
    el = el.offsetParent as HTMLElement;
  }
  return { left, top };
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
    placement: {
      type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
      default: 'top',
    },
  },
  setup(props, { slots, attrs }) {
    const show = ref(false);

    const $popover = ref<HTMLDivElement>();

    const posStyle = ref();

    function handleMouseEnter(e: Event) {
      const $target = e.target as HTMLElement;
      show.value = true;
      console.log('enter');
      nextTick(() => {
        const { left, top } = getDistanceToContainer($target);
        let offsetTop = 0;
        let offsetLeft = 0;
        if ($popover.value != null) {
          const popoverRect = $popover.value.getBoundingClientRect();
          offsetTop = popoverRect.height + 10;
          const targetRect = $target.getBoundingClientRect();
          offsetLeft = popoverRect.width / 2 - targetRect.width / 2;
        }
        posStyle.value = {
          top: `${top - offsetTop}px`,
          left: `${left - offsetLeft}px`,
        };
      });
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
                        style: [attrs.style, posStyle.value],
                        ref: $popover,
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
