<template>
  <div
    :class="['nt-page-header', `nt-page-header-align-${titleAlign}`]"
    :style="styleObj"
  >
    <div v-if="showBack" @click="handleBack" class="nt-page-header-left">
      <Button text class="nt-page-header-backbtn">
        <BackIcon></BackIcon>
        <span>{{ backText }}</span>
      </Button>
    </div>
    <div class="nt-page-header-content">
      <slot>
        <div v-if="!isBlank(title)" class="nt-page-header-title">
          {{ title }}
        </div>
        <div v-if="!isBlank(subTitle)" class="nt-page-header-sub-title">
          {{ subTitle }}
        </div>
      </slot>
    </div>
    <div class="nt-page-header-right">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';
import BackIcon from './icon/ArrowLeft.vue';
import { isBlank } from 'ph-utils';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = withDefaults(
  defineProps<{
    /** 标题对齐方式 */
    titleAlign?: 'left' | 'center';
    /** 是否显示返回按钮 */
    showBack?: boolean;
    /** 返回文本 */
    backText?: string;
    /** 标题文本 */
    title?: string;
    /** 副标题 */
    subTitle?: string;
    height?: string;
  }>(),
  {
    titleAlign: 'left',
    showBack: true,
    operatorFill: true,
    backText: '返回',
    height: undefined,
  },
);

const styleObj = computed(() => {
  const obj: Record<string, string> = {};
  if (props.height != null) {
    obj['height'] = props.height;
  }
  return obj;
});

function handleBack() {
  router.back();
}
</script>
