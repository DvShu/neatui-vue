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
    ref="el"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const model = defineModel();

const el = ref<HTMLInputElement>();

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

function focus() {
  if (el.value != null) {
    el.value.focus();
  }
}

defineExpose({
  focus,
});
</script>
