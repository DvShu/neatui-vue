<template>
  <ColorPicker v-model="color"></ColorPicker>
</template>

<script setup lang="ts">
import ColorPicker from '../ColorPicker.vue';
import { ref, watch } from 'vue';
import { getColorTheme, applyColorTheme } from 'ph-utils/theme';

const color = ref(getColorTheme());
const emits = defineEmits(['change'])

watch(color, async () => {
  await applyColorTheme(color.value as string);
  emits('change', color.value);
});
</script>
