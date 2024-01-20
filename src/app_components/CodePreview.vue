<template>
  <div class="preview-wrapper">
    <div class="preview-header center">{{ title }}</div>
    <div class="preview-container"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
