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
      :checked="isChecked"
      @change="handleChange"
      :disabled="disabled"
      :value="value"
    />
    <span class="nt-checkbox__inner"></span>
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
  }>(),
  {
    indeterminate: false,
    disabled: false,
  },
);

const checkGroupList: Ref<any[]> | undefined = inject('nt-check-group-list');

const isChecked = computed(() => {
  if (checkGroupList != null) {
    return checkGroupList.value.includes(props.value);
  }
  return checkedModel.value;
});

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const checked = target.checked;
  if (checkGroupList != null) {
    let index = checkGroupList.value.indexOf(props.value);
    if (index === -1) {
      checkGroupList.value.push(props.value);
    } else {
      checkGroupList.value.splice(index, 1);
    }
  }
  if (props.indeterminate === false) {
    checkedModel.value = checked;
  }
}
</script>
