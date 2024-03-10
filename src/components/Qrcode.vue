<template>
  <canvas ref="$canvas" width="100" height="100"</canvas>
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
    /** 二维码边距 */
    margin?: number;
  }>(),
  {
    size: 100,
    fill: '#000',
    level: 'L',
    margin: 0,
  },
);

onMounted(() => {
  qrcodeRender = new QRCodeRender({
    size: props.size,
    fill: props.fill,
    level: props.level as any,
    margin: props.margin,
    renderFn: renderToCanvas,
    text: props.text,
    el: $canvas.value,
  });
  if (props.text != null) {
    console.log(qrcodeRender.render());
  }
});

watch(
  () => props.text,
  (newText) => {
    if (newText != null) {
      qrcodeRender.addData(newText);
    }
  },
);
</script>
