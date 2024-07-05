<script lang="ts">
import { defineComponent, h, ref, withDirectives } from 'vue';
import type { PropType } from 'vue';
import Clickoutsize from '../directives/clickoutside';

export default defineComponent({
  props: {
    /** 提示文本 */
    title: String,
    /** 提示框的边框位置, 默认为 'top' */
    placement: {
      type: String as PropType<
        'topStart' | 'top' | 'topEnd' | 'bottomStart' | 'bottom' | 'bottomEnd'
      >,
      required: false,
      default: 'top',
    },
    /** 组件可见性, 受控模式 */
    visible: {
      type: Boolean,
      default: false,
    },
    /** Tooltip Content 样式 */
    contentClass: String,
    styleName: {
      type: String,
      default: 'default',
    },
    /** 触发方式 */
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    const open = ref(false);

    function handleClick(e: Event) {
      if (props.trigger === 'click') {
        if (!open.value) {
          open.value = true;
        } else {
          let $target = e.target as HTMLElement;
          let isContent = false;
          while (true) {
            const classList = $target.classList;
            if (classList.contains('nt-tooltip-content')) {
              isContent = true;
              break;
            } else if (classList.contains('nt-tooltip')) {
              break;
            }
            $target = $target.parentElement as HTMLElement;
          }
          // 点击的不是提示内容, 则隐藏提示
          if (!isContent) {
            open.value = false;
          }
        }
      }
    }

    function handleOutsideClick() {
      if (props.trigger === 'click') {
        open.value = false;
      }
    }
    return () => {
      const prop: any = {
        class: {
          'nt-tooltip': true,
          'nt-tooltip-hover': props.trigger === 'hover',
          'nt-tooltip-visible': props.visible || open.value,
        },
      };
      if (props.trigger === 'click') {
        prop.onClick = handleClick;
      }
      const children = [
        slots.default != null ? slots.default() : null,
        h(
          'div',
          {
            class: [
              'nt-tooltip-content',
              `nt-tooltip--${props.styleName}`,
              props.placement.startsWith('top') ? 'nt-tooltip-top' : '',
              props.placement.startsWith('bottom') ? 'nt-tooltip-bottom' : '',
              props.placement.endsWith('Start') ? 'nt-tooltip-start' : '',
              props.placement.endsWith('End') ? 'nt-tooltip-end' : '',
              props.contentClass,
            ],
          },
          slots.title != null ? slots.title() : props.title,
        ),
      ];
      if (props.trigger === 'hover') {
        return h('div', prop, children);
      } else {
        return withDirectives(h('div', prop, children), [
          [Clickoutsize, handleOutsideClick],
        ]);
      }
    };
  },
});
</script>
