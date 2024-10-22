<template>
  <div
    :class="[
      'nt-form-item',
      'nt-form-item-label-' + lpRef,
      isRequired ? 'is-required' : undefined,
      errorMsg != null ? 'is-error' : undefined,
    ]"
  >
    <label class="nt-form-item__label" :style="styleObj" v-if="label != null">
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
import { Ref, computed, inject, provide, toValue } from 'vue';
import { formContext, formItemDisabledContext } from '../../utils/constant';
import type { MaybeRefOrGetter } from 'vue';

const props = withDefaults(
  defineProps<{
    /** 标签文本 */
    label?: string;
    /** 标签的宽度, 默认: 80px */
    labelWidth?: string;
    labelPosition?: 'left' | 'right' | 'top';
    /** 字段是否必须 */
    required?: boolean;
    /** model 的键名; 在使用了 validate、resetFields 的方法时，该属性是必填的 */
    name?: string;
    /** 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。 */
    error?: string;
    disabled?: boolean;
  }>(),
  {
    required: undefined,
    error: undefined,
    label: undefined,
    disabled: undefined,
  },
);

const defaultFormCtx: {
  errors?: Ref<Record<string, any>>;
  requiredKeys?: Ref<string[]>;
  labelWidth: MaybeRefOrGetter<string | undefined>;
  labelPosition: MaybeRefOrGetter<'left' | 'right' | 'top' | undefined>;
} = {
  errors: undefined,
  requiredKeys: undefined,
  labelWidth: () => undefined,
  labelPosition: () => undefined,
};
let { errors, requiredKeys, labelWidth, labelPosition } = inject(
  formContext,
  defaultFormCtx,
);

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

const styleObj = computed(() => {
  const styl: Record<string, string> = {};
  // label-width
  if (toValue(labelWidth) != null) {
    styl['--nt-form-label-width'] = toValue(labelWidth) as string;
  }
  if (props.labelWidth != null) {
    styl['--nt-form-label-width'] = props.labelWidth;
  }
  return styl;
});

const lpRef = computed(() => {
  let lp = 'right';
  if (props.labelPosition != null) {
    lp = props.labelPosition;
  } else if (toValue(labelPosition) != null) {
    lp = toValue(labelPosition) as string;
  }
  return lp;
});

provide(formItemDisabledContext, () => props.disabled);
</script>
