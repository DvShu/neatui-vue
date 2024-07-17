<script lang="ts">
import { defineComponent, watch, h, Teleport, Transition } from 'vue';
import type { PropType, VNode } from 'vue';
import Shadow from '../Shadow.vue';
import Button from '../Button.vue';
import CloseIcon from '../icon/Close.vue';

export default defineComponent({
  props: {
    /** 控制遮罩展现，是否显示遮罩 */
    mask: {
      type: Boolean,
      default: true,
    },
    /** 是否可以通过点击 mask 关闭对话框 */
    maskClosable: {
      type: Boolean,
      default: true,
    },
    /** 是否显示对话框 */
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
    },
    /** Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入
     * 如果都不传，则不显示标题
     */
    title: String,
    /** 是否显示右上角关闭按钮, 1 - 显示在框内， 2 - 显示在框角, 0 - 不显示 */
    showClose: {
      type: Number as PropType<1 | 2 | 0>,
      default: 1,
    },
    /** 是否显示底部取消按钮 */
    showCancel: {
      type: Boolean,
      default: true,
    },
    /** 是否显示底部确定按钮 */
    showOk: {
      type: Boolean,
      default: true,
    },
    /** 主体样式 */
    mainClass: {
      type: String,
      default: '',
    },
    /** 内容区域样式 */
    containerClass: {
      type: String,
      default: '',
    },
    /** 是否水平垂直对齐对话框 */
    alignCenter: {
      type: Boolean,
      default: false,
    },
    /** 关闭前的回调, 会暂停 Dialog 的关闭. */
    beforeClose: {
      type: Function as PropType<
        (type: 'cancel' | 'ok' | 'close', done: () => void) => void
      >,
      default: undefined,
    },
    /** 对话框宽度 */
    width: {
      type: String,
      default: undefined,
    },
    to: {
      type: [Object, String] as PropType<HTMLElement | 'string'>,
      default: 'body',
    },
    /** 主题, normal - 普通, mobile - 移动风格 */
    theme: {
      type: String as PropType<'normal' | 'mobile'>,
      default: 'normal',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    if (props.modelValue === true) {
      document.body.classList.add('nt-body-lock');
    }

    watch(
      () => props.modelValue,
      (val) => {
        if (val === true) {
          document.body.classList.add('nt-body-lock');
        } else {
          document.body.classList.remove('nt-body-lock');
        }
      },
    );

    function shadowClick() {
      if (props.mask && props.maskClosable) {
        close('close');
      }
    }

    function done() {
      emit('update:modelValue', false);
    }

    function close(type: 'cancel' | 'close' | 'ok') {
      if (props.beforeClose == null) {
        emit('update:modelValue', false);
      } else {
        props.beforeClose(type, done);
      }
    }

    return () => {
      console.log(props.to);
      return h(
        Teleport,
        { to: props.to },
        h(
          Transition,
          {
            appear: true,
            name: 'nt-dialog',
          },
          {
            default: () =>
              props.modelValue
                ? h(
                    Shadow,
                    {
                      shadowClass: [
                        'nt-dialog',
                        props.alignCenter ? 'nt-dialog-align-center' : '',
                      ]
                        .join(' ')
                        .trim(),
                      transparent: !props.mask,
                      onShadowClick: shadowClick,
                    },
                    {
                      default: () => {
                        const $contents: VNode[] = [
                          h(
                            'header',
                            {
                              class: 'nt-dialog-header',
                            },
                            slots.header != null ? slots.header() : props.title,
                          ),
                        ];

                        if (props.showClose !== 0) {
                          $contents.push(
                            h(
                              Button,
                              {
                                circle: true,
                                type: 'normal',
                                class: `nt-dialog-close${props.showClose}`,
                                onClick: () => close('close'),
                              },
                              {
                                default: () => h(CloseIcon),
                              },
                            ),
                          );
                        }
                        $contents.push(
                          h(
                            'div',
                            {
                              class: [
                                'nt-dialog-container',
                                props.containerClass,
                              ],
                            },
                            slots.default != null ? slots.default() : undefined,
                          ),
                        );
                        $contents.push(
                          h(
                            'footer',
                            { class: 'nt-dialog-footer' },
                            slots.footer
                              ? (slots.footer() as any)
                              : [
                                  props.showCancel
                                    ? h(
                                        Button,
                                        {
                                          type: 'normal',
                                          text: props.theme === 'mobile',
                                          onClick: () => close('close'),
                                        },
                                        { default: () => '取消' },
                                      )
                                    : undefined,
                                  props.showOk
                                    ? h(
                                        Button,
                                        {
                                          type: 'primary',
                                          text: props.theme === 'mobile',
                                          onClick: () => close('ok'),
                                        },
                                        { default: () => '确定' },
                                      )
                                    : undefined,
                                ],
                          ),
                        );
                        return h(
                          'div',
                          {
                            class: [
                              'nt-dialog-main',
                              'nt-dialog-' + props.theme,
                              props.mainClass,
                            ],
                            style: {
                              width: props.width ? props.width : undefined,
                            },
                          },
                          $contents,
                        );
                      },
                    },
                  )
                : null,
          },
        ),
      );
    };
  },
});
</script>
