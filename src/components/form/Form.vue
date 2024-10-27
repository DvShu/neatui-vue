<template>
  <form
    :class="[
      'nt-form',
      inline ? 'nt-form-inline' : undefined,
      `nt-form--${labelPosition}`,
    ]"
    @submit="handleSubmit"
    :style="{
      '--nt-form-label-width': labelWidth ? labelWidth : undefined,
    }"
  >
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import Validator from 'ph-utils/validator';
import type { SchemaType } from 'ph-utils/validator';
import { formContext, formDisabledContext } from '../../utils/constant.js';

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
    disabled?: boolean;
    labelPosition?: 'left' | 'right' | 'top';
  }>(),
  {
    inline: false,
    disabled: false,
    labelPosition: 'right',
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
    //@ts-expect-error: Unreachable code error
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
  labelWidth: () => props.labelWidth,
  labelPosition: () => props.labelPosition,
});

provide(formDisabledContext, () => props.disabled);

function handleSubmit(e: Event) {
  e.preventDefault();
  if (validator != null) {
    validate();
  } else {
    emits('submit');
  }
}

/**
 * 校验全部表单数据
 */
function validate() {
  if (validator != null && props.model != null) {
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

/**
 * 校验部分表单数据
 * @param field
 */
function validateField(field: string | string[]) {
  if (validator != null && props.model != null) {
    const tacks: Promise<{
      key: string;
      value: any;
    }>[] = [];
    if (Array.isArray(field)) {
      for (let i = 0, len = field.length; i < len; i++) {
        tacks.push(
          validator.validateKey(field[i], props.model[field[i]], props.model),
        );
      }
    } else {
      tacks.push(validator.validateKey(field, props.model[field], props.model));
    }
    Promise.allSettled(tacks).then((results) => {
      for (let i = 0, len = results.length; i < len; i++) {
        const result = results[i];
        if (result.status === 'rejected') {
          errors.value[result.reason.key] = result.reason.message;
        } else {
          errors.value[result.value.key] = undefined;
        }
      }
    });
  }
}

function clearValidate() {
  errors.value = {};
}

defineExpose({
  validate,
  validateField,
  clearValidate,
});
</script>
