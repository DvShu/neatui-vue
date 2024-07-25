<template>
  <div :class="['nt-page-header', `nt-page-header-align-${titleAlign}`]">
    <div v-if="showBack" class="nt-page-header-left">
      <Button text>
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
  </div>
</template>
<script setup lang="ts">
import Button from './Button.vue';
import BackIcon from './icon/ArrowLeft.vue';
import { isBlank } from 'ph-utils';

const props = withDefaults(
  defineProps<{
    /** 标题对齐方式 */
    titleAlign?: 'left' | 'center';
    /** 是否显示返回按钮 */
    showBack?: boolean;
    /** 左右两边的按钮操作区域是否高度填充 */
    operatorFill?: boolean;
    /** 返回文本 */
    backText?: string;
    /** 标题文本 */
    title?: string;
    /** 副标题 */
    subTitle?: string;
  }>(),
  {
    titleAlign: 'left',
    showBack: true,
    operatorFill: true,
    backText: '返回',
  },
);
</script>
