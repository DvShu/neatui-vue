import type { PropType, Ref } from 'vue';

export const popoverProps = {
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
      | 'topStart'
      | 'top'
      | 'topEnd'
      | 'bottomStart'
      | 'bottom'
      | 'bottomEnd'
      | 'left'
      | 'leftStart'
      | 'leftEnd'
      | 'right'
      | 'rightStart'
      | 'rightEnd'
    >,
    default: 'top',
  },
  /** 受控模式显示/隐藏 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /** 受控模式时对应的节点 */
  to: [Object, String] as PropType<HTMLElement | string | Ref<HTMLElement>>,
  /** 是否显示箭头 */
  showArrow: {
    type: Boolean,
    default: true,
  },
};
