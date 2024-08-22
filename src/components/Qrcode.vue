<template>
  <canvas ref="$canvas" width="100" height="100"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { QRCodeRender, renderToCanvas } from 'qrcode-generator-es';

const $canvas = ref<HTMLCanvasElement>();
let qrcodeRender: QRCodeRender;

const props = withDefaults(
  defineProps<{
    /** 二维码内容 */
    text?: string;
    /** 二维码尺寸 */
    size?: number;
    /** 二维码颜色 */
    fill?: string;
    /** 二维码纠错等级, L、M、Q、H */
    level?: string;
    iconSrc?: string;
  }>(),
  {
    size: 100,
    fill: '#000000',
    level: 'M',
    iconSrc: undefined,
  },
);

onMounted(() => {
  qrcodeRender = new QRCodeRender({
    size: props.size,
    fill: props.fill,
    level: props.level as 'L',
    renderFn: renderToCanvas,
    text: props.text,
    el: $canvas.value,
    icon: props.iconSrc
      ? {
          src: props.iconSrc,
        }
      : undefined,
  });
  if (props.text != null) {
    qrcodeRender.render();
  }
});

watch(
  () => props.text,
  (newText) => {
    if (newText != null) {
      qrcodeRender.resetData(newText);
    }
  },
);
</script>
