<template>
  <Dialog
    :model-value="show"
    :title="title"
    :show-cancel="showCancel"
    :mask-closable="false"
    :before-close="handleClose"
    container-class="nt-message-dialog-container"
    :to="to"
  >
    <component
      v-if="IconComponentName != null"
      :is="IconComponentName"
      :class="['nt-confirm-icon', 'nt-confirm-icon--' + props.type]"
    ></component>
    {{ message }}</Dialog
  >
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from 'vue';
import Dialog from './Dialog.vue';

const AsyncInfoIcon = defineAsyncComponent(() => import('../icon/Info.vue'));
const AsyncErrorIcon = defineAsyncComponent(
  () => import('../icon/MaskClose.vue'),
);
const AsyncWarnIcon = defineAsyncComponent(() => import('../icon/Warn.vue'));
const AsyncSuccessIcon = defineAsyncComponent(
  () => import('../icon/Success.vue'),
);

const IconComponentName = computed(() => {
  if (props.type === 'success') {
    return AsyncSuccessIcon;
  } else if (props.type === 'warn') {
    return AsyncWarnIcon;
  } else if (props.type === 'error') {
    return AsyncErrorIcon;
  } else if (props.type === 'info') {
    return AsyncInfoIcon;
  }
  return null;
});

const props = withDefaults(
  defineProps<{
    show?: boolean;
    title?: string;
    message: string;
    showCancel?: boolean;
    type?: 'success' | 'error' | 'warn' | 'info';
    to: HTMLElement;
  }>(),
  {
    title: '提示',
    showCancel: true,
    type: undefined,
    show: false,
  },
);

const emits = defineEmits(['close']);

const handleClose = (action: 'cancel' | 'ok' | 'close') => {
  emits('close', action);
};
</script>

<style></style>
