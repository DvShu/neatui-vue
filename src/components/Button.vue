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
    type?: 'primary' | 'text' | 'normal' | string;
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
  },
);

const colorStyle = computed(() => {
  if (props.color != null) {
    const lighten = adjust(props.color, 1, true);
    const darken = adjust(props.color, 3, false);
    return {
      '--nt-btn-border-color': props.color,
      '--nt-btn-color': props.ghost ? props.color : '#ffffff',
      '--nt-btn-hover-color': props.ghost ? lighten : '#ffffff',
      '--nt-btn-bg-color': props.ghost ? 'transparent' : props.color,
      '--nt-btn-active-color': props.ghost ? darken : '#ffffff',
      '--nt-btn-hover-border-color': lighten,
      '--nt-btn-hover-bg-color': props.ghost ? 'transparent' : lighten,
      '--nt-btn-active-bg-color': props.ghost ? 'transparent' : darken,
      '--nt-btn-active-border-color': darken,
    };
  }
  return {};
});
</script>
