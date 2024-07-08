<template>
  <!-- <Teleport to="body">
    <Transition name="nt-dialog" appear>
      <Shadow
        v-if="show"
        :shadow-class="'nt-dialog nt-dialog-' + type"
        :transparent="!mask"
        @shadow-click="shadowClick"
      >
        <div class="nt-dialog-container">
          <div class="nt-dialog-header">
            <slot name="header"></slot>
          </div>
        </div>
      </Shadow>
    </Transition>
  </Teleport> -->
</template>
<script lang="ts">
import { defineComponent, watch, h, Teleport, Transition } from 'vue';
import type { PropType } from 'vue';
import Shadow from './Shadow.vue';

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
    type: {
      type: String as PropType<'normal'>,
      default: 'normal',
    },
    /** 是否显示对话框 */
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
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
        emit('update:modelValue', false);
      }
    }

    return () => {
      return h(
        Teleport,
        { to: 'body' },
        props.modelValue
          ? h(
              Transition,
              {
                appear: true,
                mode: 'out-in',
              },
              {
                default: () =>
                  props.modelValue
                    ? h(
                        Shadow,
                        {
                          shadowClass: 'nt-dialog nt-dialog-' + props.type,
                          transparent: !props.mask,
                          onShadowClick: shadowClick,
                        },
                        {
                          default: () =>
                            h('div', { class: 'nt-dialog-container' }, [
                              h('div', { class: 'nt-dialog-header' }),
                            ]),
                        },
                      )
                    : null,
              },
            )
          : h('div', ''),
      );
    };
  },
});
</script>
