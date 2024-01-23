<template>
  <button
    :class="[
      'nt-btn',
      type ? 'nt-btn-' + type : '',
      block ? 'nt-btn-block' : '',
      round ? 'nt-btn-round' : '',
      circle ? 'nt-btn-circle' : '',
      loading ? 'nt-btn-loading' : '',
    ]"
    :disabled="disabled || loading"
    :type="htmlType"
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
import LoadingIcon from './LoadingIcon.vue';

withDefaults(
  defineProps<{
    /**
     * 设置按钮类型；primary, text, normal
     */
    type?: 'primary' | 'text' | 'normal';
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
  }>(),
  {
    type: 'normal',
    disabled: false,
    htmlType: 'button',
    block: false,
    circle: false,
    round: false,
    loadingText: '加载中……',
    loading: false,
  },
);
</script>
