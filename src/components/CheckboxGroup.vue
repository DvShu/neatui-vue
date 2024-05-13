<template>
  <div class="nt-check-group"><slot></slot></div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

const checkList = defineModel({ default: [] as any[] });

provide('nt-check-group-list', checkList);
</script>
