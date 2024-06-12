<template>
  <form
    class="nt-form"
    :style="{
      '--nt-form-label-width': labelWidth ? labelWidth : undefined,
    }"
    @submit="handleSubmit"
  >
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { reactive, provide, watch } from 'vue';
import Validator from 'ph-utils/validator';
import type { SchemaType } from 'ph-utils/validator';

const props = defineProps<{
  /** 表单数据对象 */
  model?: Record<string, any>;
  /** 标签宽度 */
  labelWidth?: string;
  /** 验证规则 */
  rules?: SchemaType[];
}>();

let keys = [];
if (props.model != null) {
  const watcher = [];
  for (const key in props.model) {
    keys.push(key);
    //@ts-ignore
    watcher.push(() => props.model[key]);
  }
  if (watcher.length > 0) {
    watch(watcher, (newValues, oldValues) => {
      console.log(newValues);
      console.log(oldValues);
      for (let i = 0, len = newValues.length; i < len; i++) {
        const value = newValues[i];
        if (value !== oldValues[i]) {
          // 数据验证, 验证单一字段 valid(keys[i], value)
        }
      }
    });
  }
}

/** 错误信息 */
const errors = reactive<{
  [key: string]: string;
}>({});

let validator: Validator;

if (props.rules != null) {
  validator = new Validator(props.rules);
}

/** 供子组件使用 */
provide('ntFormErrors', errors);
function handleSubmit(e: Event) {
  e.preventDefault();
}
</script>
