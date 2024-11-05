import type { Prop, PropType, Ref } from 'vue';

export const popoverProps = {
  /** 触发方式: hover - 渲染, click - 点击, manual - 非受控模式, 手动展开 */
  trigger: {
    type: String as PropType<'hover' | 'click' | 'focus' | 'manual'>,
    default: 'hover',
  },
  /** 显示的内容，也可以通过写入默认 slot 修改显示内容 */
  content: String,
  /** 弹出位置 */
  placement: {
    type: String as PropType<
      | 'top-start'
      | 'top'
      | 'top-end'
      | 'bottom-start'
      | 'bottom'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end'
    >,
    default: 'top',
  },
  /** 受控模式时对应的节点 */
  reference: [Object, String] as PropType<
    HTMLElement | string | Ref<HTMLElement>
  >,
  /** 是否显示箭头 */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /** 是否不能激活弹出信息 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 宽度, 'trigger' 表示 popover 的宽度会和它的触发元素一致 */
  width: {
    type: [String, Number] as PropType<number | 'trigger'>,
    default: undefined,
  },
  /** 浮层偏移量 */
  offset: {
    type: Number,
    default: 10,
  },
};
