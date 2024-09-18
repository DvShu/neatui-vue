<template>
  <SelectOri :options="options" v-model="theme"></SelectOri>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import SelectOri from '../SelectOri.vue';
import { getTheme, applyTheme } from 'ph-utils/theme';

const options = [
  {
    label: '跟随系统',
    value: 'auto',
  },
  {
    label: '浅色模式',
    value: 'light',
  },
  {
    label: '深色模式',
    value: 'dark',
  },
];

const theme = ref(getTheme());

watch(theme, (val) => {
  applyTheme(val as 'auto').then();
});
</script>

<style></style>
