<script lang="ts">
import {
  defineComponent,
  h,
  VNode,
  Teleport,
  ref,
  Transition,
  nextTick,
  withDirectives,
} from 'vue';
import type { PropType } from 'vue';
import Clickoutside from '../directives/clickoutside';

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
    /** 弹出位置 */
    placement: {
      type: String as PropType<
        'topStart' | 'top' | 'topEnd' | 'bottomStart' | 'bottom' | 'bottomEnd'
      >,
      default: 'top',
    },
  },
  setup(props, { slots, attrs }) {
    const show = ref(false);

    const $popover = ref<HTMLDivElement>();

    let closeT: number | undefined;

    const posStyle = ref({});

    function showFn($target: HTMLElement) {
      if (show.value) {
        clearHide();
        return;
      }
      show.value = true;
      nextTick(() => {
        const { left, top } = getDistanceToContainer($target);
        let offsetTop = 0;
        let offsetLeft = 0;
        if ($popover.value != null) {
          const popoverRect = $popover.value.getBoundingClientRect();
          const targetRect = $target.getBoundingClientRect();
          if (props.placement === 'top') {
            offsetTop = popoverRect.height + 10;
          } else if (props.placement === 'bottom') {
            offsetTop = -(targetRect.height + 10);
          }
          offsetLeft = popoverRect.width / 2 - targetRect.width / 2;
        }
        posStyle.value = {
          top: `${top - offsetTop}px`,
          left: `${left - offsetLeft}px`,
        };
      });
    }

    function hideFn() {
      closeT = setTimeout(() => {
        show.value = false;
      }, 50) as any;
    }

    function clearHide() {
      if (closeT != null) {
        clearTimeout(closeT);
        closeT = undefined;
      }
    }

    function handleMouseEnter(e: Event) {
      showFn(e.target as HTMLElement);
    }

    /** 鼠标离开事件 */
    function hanldeMouseLeave() {
      hideFn();
    }

    function handleClick(e: Event) {
      const $target = e.currentTarget as HTMLElement;
      // 点击的不是 popover 元素，才切换 popover
      if (!$target.classList.contains('nt-popover')) {
        if (!show.value) {
          showFn(e.target as HTMLElement);
        } else {
          show.value = false;
        }
      } else {
        if (closeT != null) {
          clearTimeout(closeT);
          closeT = undefined;
        }
      }
    }

    function handleOutside() {
      hideFn();
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
        withDirectives(h(firstVNode, prop), [[Clickoutside, handleOutside]]),
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
                        class: [
                          'nt-popover',
                          `nt-popover-${props.placement}`,
                          attrs.class,
                        ],
                        style: [attrs.style, posStyle.value],
                        ref: $popover,
                        ...prop,
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
