<template>
  <div class="nt-card">
    <div v-if="showHeader" class="nt-card__header">
      <span v-if="headerText">{{ headerText }}</span>
      <template v-else>
        <slot name="header"></slot>
      </template>
      <div><slot name="header-extra"></slot></div>
    </div>
    <div :class="['nt-card__body', bodyClass || '']">
      <slot></slot>
    </div>
    <div v-if="showFooter" class="nt-card__footer">
      <span v-if="footerText">{{ footerText }}</span>
      <template v-else><slot name="footer"></slot></template>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    headerText?: string;
    showHeader?: boolean;
    footerText?: string;
    showFooter?: boolean;
    bodyClass?: string;
  }>(),
  {
    showHeader: true,
    showFooter: false,
  },
);
</script>
