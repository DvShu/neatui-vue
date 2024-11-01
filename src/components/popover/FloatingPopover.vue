<script lang="ts">
import {
  defineComponent,
  h,
  onMounted,
  reactive,
  ref,
  Teleport,
  Transition,
} from 'vue';
import { popoverProps } from './constant';
import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom';

export default defineComponent({
  name: 'FloatingPopover',
  props: popoverProps,
  setup(props, { slots }) {
    /** 是否显示浮窗 */
    const show = ref(false);

    const $reference = ref<HTMLElement>();
    const $floating = ref<HTMLDivElement>();
    const $arrow = ref<HTMLSpanElement>();
    const popoverStyle = ref({});
    const arrowStyle = ref({});

    const triggerProps: any = {
      ref: $reference,
    };
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

    function handleTriggerClick() {}

    function handleTriggerLeave() {
      console.log('mouseLeave');
    }

    function handleTriggerEnter() {
      console.log('mouseEnter');
    }

    function handleTriggerFocus() {}

    function handleTriggerBlur() {}

    onMounted(() => {
      if ($reference.value && $floating.value) {
        computePosition($reference.value, $floating.value, {
          placement: props.placement,
          middleware: [
            offset(6),
            flip(),
            shift({ padding: 5 }),
            arrow({ element: $arrow.value as HTMLElement }),
          ],
        }).then(({ x, y, placement, middlewareData }) => {
          popoverStyle.value = {
            left: `${x}px`,
            top: `${y}px`,
          };

          const arrowData = middlewareData.arrow;
          let arrowX = null;
          let arrowY = null;
          if (arrowData != null) {
            arrowX = arrowData.x;
            arrowY = arrowData.y;
          }
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[placement.split('-')[0]];
          arrowStyle.value = {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            transform: 'rotate(45deg)',
            [staticSide as string]: '-4px',
          };
        });
      }
    });

    return () => {
      return [
        slots.trigger != null ? h(slots.trigger()[0], triggerProps) : null,
        h(
          Teleport,
          { to: 'body' },
          h(
            Transition,
            { name: 'nt-opacity' },
            {
              default: () =>
                h(
                  'div',
                  {
                    class: 'nt-popover',
                    ref: $floating,
                    style: popoverStyle.value,
                  },
                  [
                    slots.default != null ? slots.default() : undefined,
                    h('span', {
                      class: 'nt-popover-arrow',
                      ref: $arrow,
                      style: arrowStyle.value,
                    }),
                  ],
                ),
            },
          ),
        ),
      ];
    };
  },
});
</script>

<style>
#tooltip {
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
}
#arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
