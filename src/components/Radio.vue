<template>
  <label
    class="nt-radio"
    :class="{
      'nt-radio': true,
      'nt-radio--disabled': disabled,
      'nt-radio--button': type === 'button',
    }"
  >
    <input
      type="radio"
      :name="name"
      class="nt-radio__input"
      :value="value"
      :disabled="disabled"
      :checked="isChecked"
      @change="handleChange"
    />
    <span v-if="type !== 'button'" class="nt-radio__inner"></span>
    <slot name="label">
      <span class="nt-radio__label">{{ label }}</span>
    </slot>
  </label>
</template>
<script setup lang="ts">
import { watch, inject, Ref, ref } from 'vue';

const checkedModel = defineModel();

const props = withDefaults(
  defineProps<{
    name?: string;
    value?: number | string | boolean;
    label?: string;
    type?: 'button';
    disabled?: boolean;
    /** 是否选中 */
    checked?: boolean;
  }>(),
  {
    disabled: false,
    checked: undefined,
    value: undefined,
  },
);

const { checkedValue, updateCheck } = inject<{
  checkedValue: Ref<any> | null;
  updateCheck: null | ((value: any) => void);
}>('nt-radio-group-check', {
  checkedValue: null,
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
  if (checkedValue != null) {
    return checkedValue.value === props.value;
  }
  if (props.value != null) {
    return checkedModel.value === props.value;
  }
<<<<<<< HEAD
  return checkedModel.value;
=======
  return checkedModel.value as boolean;
>>>>>>> main
}

const isChecked = ref(initIsChecked());

watch(
  () => props.checked,
  (val) => {
<<<<<<< HEAD
    isChecked.value = val;
=======
    isChecked.value = val as boolean;
>>>>>>> main
  },
);

const emits = defineEmits(['change']);

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
