<template>
  <svg
    :viewBox="!useLink ? viewBox : undefined"
    aria-hidden="true"
    class="nt-icon"
  >
    <slot></slot>
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    useLink?: boolean;
    viewBox?: string;
  }>(),
  {
    useLink: false,
    viewBox: '0 0 1024 1024',
  },
);
</script>
