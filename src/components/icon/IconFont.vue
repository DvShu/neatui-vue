<template>
  <BaseIcon use-link><use :xlink:href="`#${name}`"></use></BaseIcon>
</template>
<script setup lang="ts">
import BaseIcon from './Base.vue';

defineProps<{
  name: string;
}>();
</script>
