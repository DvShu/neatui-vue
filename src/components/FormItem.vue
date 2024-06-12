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
      :style="{
        '--nt-form-label-width': labelWidth ? labelWidth : undefined,
      }"
    >
      {{ label }}
    </label>
    <div class="nt-form-item__content">
      <slot></slot>
      <div class="nt-form-item__error" v-if="isError">
        {{ errors[prop as string] }}
      </div>
    </div>
  </div>
  <Form :model="formData" </Form>
</template>
<script setup lang="ts">
import { computed, inject, reactive } from 'vue';
import Form from './Form.vue';

const formData = reactive({
  /** 用户名 */
  username: '',
  /** 密码 */
  password: '',
});

const props = withDefaults(
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
    required: false,
  },
);

let errors: any;
if (props.prop != null) {
  errors = inject('ntFormErrors');
}
const isError = computed(() => {
  return errors != null && props.prop != null && errors[props.prop] != null;
});
</script>
