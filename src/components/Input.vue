<template>
  <input :type="htmlType" class="nt-input" :placeholder="placeholder" />
</template>

<script setup lang="ts">
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
