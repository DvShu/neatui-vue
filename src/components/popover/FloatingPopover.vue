<script lang="ts">
import {
  defineComponent,
  h,
  nextTick,
  ref,
  Teleport,
  Transition,
  vShow,
  withDirectives,
} from 'vue';
import { popoverProps } from './constant';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import useDebounce from '../../hooks/useDebounce';
import Clickoutside from '../../directives/clickoutside';

export default defineComponent({
  name: 'FloatingPopover',
  props: popoverProps,
  setup(props, { slots, attrs }) {
    /** 是否显示浮窗 */
    const show = ref(false);
    const place = ref(props.placement);

    const $reference = ref<HTMLElement>();
    const $floating = ref<HTMLDivElement>();
    const popoverStyle = ref({});

    const { run: hideFn, cancel: cancelHide } = useDebounce(
      () => (show.value = false),
      100,
    );

    const triggerProps: any = {};
    if (props.trigger === 'hover') {
      // 鼠标悬浮
      triggerProps.onMouseleave = handleTriggerLeave;
      triggerProps.onMouseenter = handleTriggerEnter;
    } else if (props.trigger === 'click') {
      // 鼠标点击
      triggerProps.onClick = handleTriggerClick;
    } else if (props.trigger === 'focus') {
      // 聚焦
      triggerProps.onFocus = handleTriggerFocus;
      triggerProps.onBlur = handleTriggerBlur;
    }

    function handleTriggerClick(e: Event) {
      const $target = e.currentTarget as HTMLElement;
      // 点击的不是 popover 元素，才切换 popover
      if (!$target.classList.contains('nt-popover')) {
        if (!show.value) {
          showFn(e.target as HTMLElement);
        } else {
          show.value = false;
        }
      } else {
        cancelHide();
      }
    }

    function handleTriggerLeave() {
      hideFn();
    }

    function handleTriggerEnter(e: Event) {
      showFn(e.target as HTMLElement);
    }

    function handleTriggerFocus(e: Event) {
      showFn(e.target as HTMLElement);
    }

    function handleTriggerBlur() {
      hideFn();
    }

    function showFn($target: HTMLElement) {
      if (show.value) {
        cancelHide();
        return;
      }
      // 鼠标移动到悬浮内容上
      if ($target.classList.contains('nt-popover')) return;
      show.value = true;
      nextTick(() => {
        if ($reference.value && $floating.value) {
          computePosition($reference.value, $floating.value, {
            placement: props.placement,
            middleware: [
              offset(6 - (props.showArrow ? 0 : 4)),
              flip(),
              shift({ padding: 5 }),
            ],
          }).then(({ x, y, placement }) => {
            popoverStyle.value = {
              left: `${x}px`,
              top: `${y}px`,
            };

            place.value = placement;
          });
        }
      });
    }

    /**
     * 处理点击组件外部区域的事件。
     * 当点击组件外部时，调用 hideFn 函数隐藏弹出框。
     */
    function handleOutside() {
      hideFn();
    }

    return () => {
      return [
        slots.trigger != null
          ? props.trigger === 'click'
            ? withDirectives(
                h(slots.trigger()[0], { ...triggerProps, ref: $reference }),
                [[Clickoutside, handleOutside]],
              )
            : h(slots.trigger()[0], { ...triggerProps, ref: $reference })
          : null,
        h(
          Teleport,
          { to: 'body' },
          h(
            Transition,
            { name: 'nt-opacity' },
            {
              default: () =>
                withDirectives(
                  h(
                    'div',
                    {
                      class: [
                        'nt-popover',
                        `nt-popover-${place.value}`,
                        attrs.class,
                      ],
                      style: popoverStyle.value,
                      ...triggerProps,
                      ref: $floating,
                    },
                    [
                      slots.default != null ? slots.default() : undefined,
                      props.showArrow
                        ? h('span', { class: 'nt-popover-arrow' })
                        : null,
                    ],
                  ),
                  [[vShow, show.value]],
                ),
            },
          ),
        ),
      ];
    };
  },
});
</script>
