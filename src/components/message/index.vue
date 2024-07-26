<template>
  <Transition
    name="nt-message-fade"
    appear
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :style="bindStyle"
      :class="['nt-message', `nt-message-${type}`, customClass]"
    >
      <div class="nt-message-container">
        <component :is="icon" class="nt-message-icon"></component>
        <span class="nt-message-content">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { CSSProperties } from 'vue';

import MaskCloseIcon from '../icon/MaskClose.vue';
import SuccessIcon from '../icon/Success.vue';
import WarnIcon from '../icon/Warn.vue';
import InfoIcon from '../icon/Info.vue';

const props = withDefaults(
  defineProps<{
    /** 关闭时的回调函数 */
    onClose: () => void;
    /** 消息显示持续时间, 单位为毫秒。设为 0 则不会自动关闭，默认为3000 */
    duration?: number;
    /** 消息类型, info, success, warn, error */
    type?: string;
    customClass?: string;
    zindex?: number;
    offset?: number;
    message: string;
    id: string;
    width?: string;
  }>(),
  {
    duration: 3000,
    type: 'info',
    customClass: '',
    zindex: 1000,
    offset: 20,
    width: '',
  },
);

defineEmits(['destroy']);

const visible = ref(false); // 是否显示消息

const bindStyle = computed<CSSProperties>(() => ({
  top: `${props.offset}px`,
  zIndex: props.zindex,
  width: props.width === '' ? undefined : props.width,
}));

const icon = computed(() => {
  if (props.type === 'success') {
    return SuccessIcon;
  } else if (props.type === 'warn') {
    return WarnIcon;
  } else if (props.type === 'error') {
    return MaskCloseIcon;
  }
  return InfoIcon;
});

function close() {
  visible.value = false;
}

defineExpose({
  close,
});

onMounted(() => {
  visible.value = true;
  if (props.duration > 0) {
    setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
});
</script>
