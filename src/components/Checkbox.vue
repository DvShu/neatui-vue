<template>
  <label
    :class="[
      'nt-checkbox',
      indeterminate ? 'nt-checkbox--indeterminate' : '',
      disabled ? 'nt-checkbox--disabled' : '',
    ]"
  >
    <input
      type="checkbox"
      class="nt-checkbox__input"
      :name="name"
      :checked="checkedModel"
      @change="handleChange"
      :disabled="disabled"
    />
    <span class="nt-checkbox__inner"></span>
    <span class="nt-checkbox__label">{{ label }}</span>
  </label>
</template>
<script setup lang="ts">
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
  }>(),
  {
    indeterminate: false,
    disabled: false,
  },
);

console.log(checkedModel.value);

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (props.indeterminate === false) {
    const checked = target.checked;
    checkedModel.value = checked;
  }
}
</script>
