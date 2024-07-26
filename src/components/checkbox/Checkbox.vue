<template>
  <label
    :class="[
      'nt-checkbox',
      indeterminate ? 'nt-checkbox--indeterminate' : '',
      disabled ? 'nt-checkbox--disabled' : '',
      type === 'button' ? 'nt-checkbox--button' : '',
    ]"
  >
    <input
      type="checkbox"
      class="nt-checkbox__input"
      :name="name"
      :checked="isChecked"
      @change="handleChange"
      :disabled="disabled"
      :value="value"
    />
    <span v-if="type !== 'button'" class="nt-checkbox__inner"></span>
    <span class="nt-checkbox__label">{{ label }}</span>
  </label>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue';

const checkedModel = defineModel();

const props = withDefaults(
  defineProps<{
    /** 设置不确定状态，仅负责样式控制 */
    indeterminate?: boolean;
    /** 原生 name 属性 */
    name?: string;
    /** 显示的 label 文本 */
    label?: string;
    disabled?: boolean;
    value?: string | number | boolean;
    type?: 'button';
  }>(),
  {
    indeterminate: false,
    disabled: false,
    value: undefined,
  },
);

const emits = defineEmits(['change']);

const { checkList, updateCheck } = inject<{
  checkList: null | (string | number)[];
  updateCheck: null | ((value: any) => void);
}>('nt-checkbox-group-check', {
  checkList: null,
  updateCheck: null,
});

function initIsChecked(): boolean {
  if (checkList != null) {
    return checkList.includes(props.value as string);
  }
  if (props.value != null) {
    return checkedModel.value === props.value;
  }
  return checkedModel.value as boolean;
}
const isChecked = ref<boolean>(initIsChecked());

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const checked = target.checked;
  if (updateCheck != null) {
    updateCheck(props.value);
  }
  const value = props.value == null ? checked : props.value;
  checkedModel.value = value;
  emits('change', value);
}
</script>
