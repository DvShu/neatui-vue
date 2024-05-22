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
import { computed, inject, Ref } from 'vue';

const checkedModel = defineModel({ type: Boolean });

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
  return checkedModel.value;
});

const emits = defineEmits(['change']);

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
