# Image 图片

可预览的图片，在保留所有原生 `img` 的特性下，支持懒加载，自定义占位图片、加载失败等

## 演示

<script setup>
import { ref } from 'vue'
import { Image, Tooltip, ImagePreview } from '../../src'

const show = ref(false)

const imgs = [
  '/neatui-vue/img1.svg',
  '/neatui-vue/img2.svg',
  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
]
</script>

### 基础用法

<ClientOnly>
  <CodePreview class="mt-15">
    <textarea lang="vue-html">
    <nt-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" width="100px"></nt-image>
    </textarea>
  </CodePreview>
</ClientOnly>

### 适应容器

可以通过 `fit` 确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) `CSS` 属性；如果不填浏览器默认为 `fill`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="fill"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="contain"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="cover"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="none"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="scale-down"></nt-image>
  </textarea>
    <template #preview>
      <div class="grid grid-cols-5">
        <Tooltip content="被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="fill"></Image>
            <span class="mt-15">fill</span>
          </div>
        </Tooltip>
        <Tooltip content="被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。整个对象在填充盒子的同时保留其长宽比">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="contain"></Image>
            <span class="mt-15">contain</span>
          </div>
        </Tooltip>
        <Tooltip content="被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="cover"></Image>
            <span class="mt-15">cover</span>
          </div>
        </Tooltip>
        <Tooltip content="被替换的内容将保持其原有的尺寸">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="none"></Image>
            <span class="mt-15">none</span>
          </div>
        </Tooltip>
        <Tooltip content="内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="scale-down"></Image>
            <span class="mt-15">scale-down</span>
          </div>
        </Tooltip>
      </div>
    </template>
  </CodePreview>
</ClientOnly>

### 占位

使用 `placeholder` 定义图片加载时显示的图片；通常用于加载大图时用来实现渐进加载，将 `placeholder` 设置为一个原图模糊后的图片

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img2.svg" width="100px" height="100px" placeholder="/neatui-vue/img_loading.png"></nt-image>
  </textarea>
  <template #preview>
    <Image src="/neatui-vue/img2.svg" width="100px" height="100px" placeholder="/neatui-vue/img_loading.png"></Image>
  </template>
  </CodePreview>
</ClientOnly>

### 加载失败

通过配置 `fallback` 配置加载失败显示图像占位符; 也可以传递 `custom-fallback` 启用自定义加载失败占位符, 然后配置 `slot-fallback` 来自定义加载失败显示.

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img3.svg" width="100px" height="100px" fallback="/neatui-vue/loading_error.png"></nt-image>
  <nt-image
    src="/neatui-vue/img3.svg"
    width="100px"
    height="100px"
    custom-fallback
    class="ml-10"
  >
    <template #fallback>
      <div style="height: 100%;background-color: gray;display:flex;justify-content:center;align-items:center;color:#fff;">Error</div>
    </template>
  </nt-image>
  </textarea>
  <template #preview>
    <Image src="/neatui-vue/img3.svg" width="100px" height="100px" fallback="/neatui-vue/loading_error.png"></Image>
    <Image
      src="/neatui-vue/img3.svg"
      width="100px"
      height="100px"
      custom-fallback
      class="ml-10"
    >
      <template #fallback>
        <div style="height: 100%;background-color: gray;display:flex;justify-content:center;align-items:center;color:#fff;">Error</div>
      </template>
    </Image>
  </template>
  </CodePreview>
</ClientOnly>

### 禁用预览

使用 `preview-disabled` 来禁止预览

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img2.svg" width="100px" height="100px" preview-disable></nt-image>
  </textarea>
  <template #preview>
    <Image src="/neatui-vue/img2.svg" width="100px" height="100px" preview-disable></Image>
  </template>
  </CodePreview>
</ClientOnly>

### 多图预览

可通过 `previewSrcList` 开启预览多图的功能。 可以通过 `initial-index` 初始化第一张预览图片的位置。 默认初始位置为 `0`。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const imgs = [
      '/neatui-vue/img1.svg',
      '/neatui-vue/img2.svg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    ]
  </script>

  <template>
    <nt-image v-for="src,index in imgs" :key="index" :src="src" :preview-src-list="imgs" :initial-index="index" width="100px"></nt-image>
  </template>
  </textarea>
  <template #preview>
    <Image v-for="src,index in imgs" :key="index" :src="src" :preview-src-list="imgs" :initial-index="index" width="100px"></Image>
  </template>
  </CodePreview>
</ClientOnly>

### 懒加载

通过使用浏览器原生支持的 `loading` 属性来开启懒加载，只需要设置 `loading="lazy"`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img2.svg" width="100px" height="100px" loading="lazy"></nt-image>
  </textarea>
  <template #preview>
    <Image src="/neatui-vue/img2.svg" width="100px" height="100px" loading="lazy"></Image>
  </template>
  </CodePreview>
</ClientOnly>

> 从 `ios 15.4` 开始已经全面支持; 对于不支持 `loading="lazy"` 属性的浏览器，可以通过 [loading-attribute-polyfill](https://github.com/mfranzke/loading-attribute-polyfill) 来兼容

### 手动预览

如果不想通过 `Image` 组件来预览图片，也可以手动通过使用 `ImagePreview` 来预览图片

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const show = ref(false);
    const imgs = [
      '/neatui-vue/img1.svg',
      '/neatui-vue/img2.svg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    ]
  </script>
  <template>
    <img
      v-for="item, index in imgs"
      :key="index"
      :src="item"
      class="demo-img"
      @click="show = true"
    />
    <nt-image-preview
      v-model:show="show"
      :url-list="imgs"
      :initial-index="0"
    ></nt-image-preview>
  </template>
  <style>
    .demo-img {
      width: 100px;
      height: 100px;
      display: inline;
      cursor: pointer;
    }
  </style>
  </textarea>
  <template #preview>
    <img v-for="item, index in imgs" :key="index" :src="item" style="width:100px;height:100px;display:inline;cursor:pointer;" @click="show = true" />
    <ImagePreview v-model:show="show" :url-list="imgs" :initial-index="0"></ImagePreview>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Image Props

| 参数                | 说明                                                                                                     | 类型            | 默认值  |
| ------------------- | -------------------------------------------------------------------------------------------------------- | --------------- | ------- |
| `src`               | _必填_ , 图片源地址，同原生属性一致                                                                      | `string`        | —       |
| `width`             | 宽度                                                                                                     | `string`        | -       |
| `height`            | 高度                                                                                                     | `string`        | -       |
| `alt`               | 原生属性 `alt`                                                                                           | `string`        | -       |
| `loading`           | 原生属性, 浏览器加载图像的策略                                                                           | `eager`、`lazy` | `eager` |
| `fit`               | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | `string`        | -       |
| `fallback`          | 图片加载失败时显示的地址                                                                                 | `string`        | -       |
| `placeholder`       | 图片占位, 用于加载大图时的占位                                                                           | `string`        | -       |
| `preview-disable`   | 禁用图片预览                                                                                             | `boolean`       | `false` |
| `preview--src-list` | 预览图片地址列表, 多图预览时使用                                                                         | `string[]`      | -       |
| `initial-index`     | 初始预览图像索引                                                                                         | `number`        | 0       |
