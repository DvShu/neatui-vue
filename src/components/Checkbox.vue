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
import { Ref, ref, inject, watch } from 'vue';

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
    /** 是否选中 */
    checked?: boolean;
  }>(),
  {
    indeterminate: false,
    disabled: false,
    checked: undefined,
    value: undefined,
  },
);

const emits = defineEmits(['change']);

const { checkList, updateCheck } = inject<{
  checkList: Ref<any[]> | null;
  updateCheck: null | ((value: any) => void);
}>('nt-checkbox-group-check', {
  checkList: null,
  updateCheck: null,
});

<<<<<<< HEAD
function initIsChecked() {
=======
function initIsChecked(): boolean {
>>>>>>> main
  if (props.checked != null) {
    return props.checked;
  }
  if (checkList != null) {
    return checkList.value.includes(props.value);
  }
  if (props.value != null) {
    return checkedModel.value === props.value;
  }
<<<<<<< HEAD
  return checkedModel.value;
}
const isChecked = ref(initIsChecked());
=======
  return checkedModel.value as boolean;
}
const isChecked = ref<boolean>(initIsChecked());
>>>>>>> main

watch(
  () => props.checked,
  (checked) => {
<<<<<<< HEAD
    isChecked.value = checked;
=======
    isChecked.value = checked as boolean;
>>>>>>> main
  },
);

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
