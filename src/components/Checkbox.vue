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
import { Ref, computed, inject } from 'vue';

const checkedModel = defineModel({ type: Boolean });

const props = withDefaults(
  defineProps<{
    /** 设置不确定状态，仅负责样式控制 */
    indeterminate?: boolean;
    /** 原生 name 属性 */
    name?: string;
    /** 显示的 label 文本 */
    label?: string;
    disabled?: boolean;
    value?: string;
    type?: 'button';
  }>(),
  {
    indeterminate: false,
    disabled: false,
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

const isChecked = computed(() => {
  if (checkList != null) {
    return checkList.value.includes(props.value);
  }
  return checkedModel.value;
});

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const checked = target.checked;
  if (updateCheck != null) {
    updateCheck(props.value);
  }
  checkedModel.value = checked;
  emits('change', checked);
}
</script>
