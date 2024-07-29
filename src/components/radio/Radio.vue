<template>
  <label
    class="nt-radio"
    :class="{
      'nt-radio': true,
      'nt-radio--disabled': disabled,
      'nt-radio--button': type === 'button',
      'is-checked': isChecked,
    }"
  >
    <input
      ref="radio"
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
import { inject, Ref, ref, computed } from 'vue';
import { random } from 'ph-utils';
import { timestamp } from 'ph-utils/date';

const radio = ref<HTMLInputElement>();

const checkedModel = defineModel();

const props = withDefaults(
  defineProps<{
    name?: string;
    value?: number | string | boolean;
    label?: string;
    type?: 'button';
    disabled?: boolean;
  }>(),
  {
    disabled: false,
    value: undefined,
    name: `r${timestamp()}${random(2)}`,
  },
);

const { checkedValue, updateCheck } = inject<{
  checkedValue: Ref<any> | null;
  updateCheck: null | ((value: any) => void);
}>('nt-radio-group-check', {
  checkedValue: null,
  updateCheck: null,
});

const isChecked = computed(() => {
  if (checkedValue != null) {
    return checkedValue.value === props.value;
  }
  if (props.value != null) {
    return checkedModel.value === props.value;
  }
  return checkedModel.value as boolean;
});

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
