<template>
  <div
    :class="{
      'nt-form-item': true,
      'is-required': required,
      'is-error': isError,
    }"
  >
    <label
      class="nt-form-item__label"
      v-if="label != null"
      :style="{
        width: labelWidth,
      }"
    >
      {{ label }}
    </label>
    <div class="nt-form-item__content">
      <slot class="a"></slot>
      <div class="nt-form-item__error">错误提示</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
  defineProps<{
    /** 标签文本 */
    label?: string;
    /** 标签的宽度, 默认: 80px */
    labelWidth?: string;
    /** 字段是否必须 */
    required?: boolean;
    /** model 的键名; 在使用了 validate、resetFields 的方法时，该属性是必填的 */
    prop?: string;
  }>(),
  {
    labelWidth: '80px',
    required: false,
  },
);

const isError = ref(false);
</script>
