<template>
  <button
    :class="[
      'nt-btn',
      type ? 'nt-btn-' + type : '',
      block ? 'nt-btn-block' : '',
      round ? 'nt-btn-round' : '',
      circle ? 'nt-btn-circle' : '',
      loading ? 'nt-btn-loading' : '',
      ghost ? 'nt-btn-ghost' : '',
      text ? 'nt-btn-text' : '',
    ]"
    :disabled="disabled || loading"
    :type="htmlType"
    :style="colorStyle"
  >
    <template v-if="loading">
      <LoadingIcon class="nt-rotate-anim"></LoadingIcon>
      <span>{{ loadingText }}</span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import LoadingIcon from './icon/Loading.vue';
import { adjust } from 'ph-utils/color';

const props = withDefaults(
  defineProps<{
    /**
     * 设置按钮类型；primary, text, normal
     */
    type?: 'primary' | 'normal' | string;
    /** 是否禁用状态 */
    disabled?: boolean;
    /** 原生的 type 属性 */
    htmlType?: 'button' | 'submit' | 'reset';
    /** 按钮是否适合其父宽度(宽度100%) */
    block?: boolean;
    /** 是否是圆形按钮 */
    circle?: boolean;
    /** 是否是弧形按钮 */
    round?: boolean;
    /** 加载的时候显示的文本 */
    loadingText?: string;
    /** 是否处于加载状态 */
    loading?: boolean;
    /** 背景是否透明 */
    ghost?: boolean;
    /** 自定义按钮颜色 */
    color?: string;
    /** 文本按钮 */
    text?: boolean;
  }>(),
  {
    disabled: false,
    htmlType: 'button',
    block: false,
    circle: false,
    round: false,
    loadingText: '加载中……',
    loading: false,
    ghost: false,
    color: undefined,
    text: false,
    type: 'normal',
  },
);

const colorStyle = computed(() => {
  if (props.color != null) {
    const lighten = adjust(props.color, 1, true);
    const darken = adjust(props.color, 3, false);
    const cssVars = {
      '--nt-btn-border-color': props.text ? 'transparent' : props.color,
      '--nt-btn-text-color':
        props.ghost || props.text ? props.color : '#ffffff',
      '--nt-btn-hover-text-color':
        props.ghost || props.text ? lighten : '#ffffff',
      '--nt-btn-background':
        props.ghost || props.text ? 'transparent' : props.color,
      '--nt-btn-active-text-color':
        props.ghost || props.text ? darken : '#ffffff',
      '--nt-btn-hover-border-color': props.text ? 'transparent' : lighten,
      '--nt-btn-hover-background':
        props.ghost || props.text ? 'transparent' : lighten,
      '--nt-btn-active-background':
        props.ghost || props.text ? 'transparent' : darken,
      '--nt-btn-active-border-color': props.text ? 'transparent' : darken,
    };
    return cssVars;
  }
  return {};
});
</script>
