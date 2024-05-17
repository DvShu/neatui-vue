<template>
  <input
    :value="model"
    :type="htmlType"
    class="nt-input"
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
  }>(),
  {
    htmlType: 'text',
    placeholder: '',
  },
);
</script>
