<template>
  <input
    :value="modelValue"
    :type="htmlType"
    :class="{
      'nt-input': true,
      'is-autosize': autosize,
    }"
    :placeholder="placeholder"
    @input="handleInput"
    ref="el"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const el = ref<HTMLInputElement>();

const props = withDefaults(
  defineProps<{
    htmlType?: string;
    placeholder?: string;
    autosize?: boolean;
    parser?: (value: string) => string;
    modelValue?: string | number;
  }>(),
  {
    htmlType: 'text',
    placeholder: '',
    autosize: false,
  },
);

const emits = defineEmits(['update:modelValue', 'input']);

function focus() {
  if (el.value != null) {
    el.value.focus();
  }
}

function handleInput(e: Event) {
  const $target = e.target as HTMLInputElement;
  let value = $target.value;
  emits('input', e);
  if (props.parser != null) {
    value = props.parser(value) as string;
    $target.value = String(value);
  }
  if (typeof props.modelValue === 'number') {
    value = Number(value) as any;
  }
  emits('update:modelValue', value);
}

defineExpose({
  focus,
});
</script>
