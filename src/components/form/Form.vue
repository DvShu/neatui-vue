<template>
  <form
    :class="{
      'nt-form': true,
      'nt-form-inline': inline,
    }"
    :style="{
      '--nt-form-label-width': labelWidth ? labelWidth : undefined,
    }"
    @submit="handleSubmit"
  >
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import Validator from 'ph-utils/validator';
import type { SchemaType } from 'ph-utils/validator';
import { formContext } from './constant';

const props = withDefaults(
  defineProps<{
    /** 表单数据对象 */
    model?: Record<string, any>;
    /** 标签宽度 */
    labelWidth?: string;
    /** 验证规则 */
    rules?: SchemaType[];
    /** 是否行内表单 */
    inline?: boolean;
  }>(),
  {
    inline: false,
  },
);

const emits = defineEmits(['submit']);

/** 错误信息 */
const errors = ref<{
  [key: string]: string | undefined;
}>({});
const requiredKeys = ref<string[]>([]);

let validator: Validator | null = null;

if (props.rules != null) {
  requiredKeys.value = props.rules.reduce((prev, curr) => {
    if (curr.required || curr.rules?.includes('required')) {
      prev.push(curr.key);
    }
    return prev;
  }, [] as string[]);
  validator = new Validator(props.rules);
}

let keys = [];
if (props.model != null && validator != null) {
  const watcher = [];
  for (const key in props.model) {
    keys.push(key);
    //@ts-ignore
    watcher.push(() => props.model[key]);
  }
  if (watcher.length > 0) {
    watch(watcher, (newValues, oldValues) => {
      if (validator != null) {
        for (let i = 0, len = newValues.length; i < len; i++) {
          const value = newValues[i];
          if (value !== oldValues[i]) {
            // 数据验证, 验证单一字段;
            validator
              .validateKey(keys[i], value, props.model)
              .then(() => {
                errors.value[keys[i]] = undefined;
              })
              .catch((err) => {
                errors.value[err.key] = err.message;
              });
          }
        }
      }
    });
  }
}

/** 供子组件使用 */
provide(formContext, {
  /** 错误信息 */
  errors,
  /** 必填字段列表 */
  requiredKeys,
});

function handleSubmit(e: Event) {
  e.preventDefault();
  if (validator != null) {
    validator
      .validate(props.model)
      .then(() => {
        errors.value = {};
        emits('submit');
      })
      .catch((err) => {
        errors.value = {
          [err.key]: err.message,
        };
      });
  }
}
</script>
