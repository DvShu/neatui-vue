<template>
  <div
    :class="{
      'nt-form-item': true,
      'is-required': isRequired,
      'is-error': errorMsg != null,
    }"
  >
    <label
      class="nt-form-item__label"
      :style="{
        '--nt-form-label-width': labelWidth ? labelWidth : undefined,
      }"
    >
      {{ label }}
    </label>
    <div class="nt-form-item__content">
      <slot></slot>
      <div class="nt-form-item__error" v-if="errorMsg != null">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Ref, computed, inject } from 'vue';
import { formContext } from './constant';

const props = withDefaults(
  defineProps<{
    /** 标签文本 */
    label?: string;
    /** 标签的宽度, 默认: 80px */
    labelWidth?: string;
    /** 字段是否必须 */
    required?: boolean;
    /** model 的键名; 在使用了 validate、resetFields 的方法时，该属性是必填的 */
    name?: string;
    /** 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。 */
    error?: string;
  }>(),
  {
    required: undefined,
    error: undefined,
  },
);

const defaultFormCtx: {
  errors?: Ref<Record<string, any>>;
  requiredKeys?: Ref<string[]>;
} = {
  errors: undefined,
  requiredKeys: undefined,
};
let { errors, requiredKeys } =
  props.name != null ? inject(formContext, defaultFormCtx) : defaultFormCtx;

// 是否有错误
const errorMsg = computed(() => {
  if (props.error != null) {
    return props.error;
  }
  if (errors != null && props.name != null) {
    return errors.value[props.name];
  }
  return null;
});

// 是否是必填字段
const isRequired = computed(() => {
  if (props.required != null) {
    return props.required;
  }
  if (requiredKeys != null && props.name != null) {
    return requiredKeys.value.includes(props.name);
  }
  return false;
});
</script>
