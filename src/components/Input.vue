<template>
  <input
    :value="model"
    :type="htmlType"
    :class="{
      'nt-input': true,
      'is-autosize': autosize,
    }"
    :placeholder="placeholder"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
const model = defineModel();

withDefaults(
  defineProps<{
    htmlType?: string;
    placeholder?: string;
    autosize?: boolean;
  }>(),
  {
    htmlType: 'text',
    placeholder: '',
    autosize: false,
  },
);
</script>
