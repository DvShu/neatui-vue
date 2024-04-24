# Image 图片

可预览的图片，在保留所有原生 `img` 的特性下，支持懒加载，自定义占位图片、加载失败等

## 演示

<script setup>
import { ref } from 'vue'
import { Image, Tooltip, Shadow } from '../../src'
</script>

### 基础用法

<ClientOnly>
  <CodePreview class="mt-15">
    <textarea lang="vue-html">
    <nt-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" width="100"></nt-image>
    </textarea>
  </CodePreview>
</ClientOnly>

### 适应容器

可以通过 `fit` 确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) `CSS` 属性；如果不填浏览器默认为 `fill`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="fill"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="contain"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="cover"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="none"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100" height="100" fit="scale-down"></nt-image>
  </textarea>
    <template #preview>
      <div class="grid grid-cols-5">
        <Tooltip placement="topStart" title="被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100" height="100" fit="fill"></Image>
            <span class="mt-15">fill</span>
          </div>
        </Tooltip>
        <Tooltip placement="topStart" title="被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。整个对象在填充盒子的同时保留其长宽比">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100" height="100" fit="contain"></Image>
            <span class="mt-15">contain</span>
          </div>
        </Tooltip>
        <Tooltip placement="top" title="被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100" height="100" fit="cover"></Image>
            <span class="mt-15">cover</span>
          </div>
        </Tooltip>
        <Tooltip placement="topEnd" title="被替换的内容将保持其原有的尺寸">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100" height="100" fit="none"></Image>
            <span class="mt-15">none</span>
          </div>
        </Tooltip>
        <Tooltip placement="topEnd" title="内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些">
          <div class="demo-img-item">
            <Image src="/neatui-vue/img1.svg" width="100" height="100" fit="scale-down"></Image>
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
  <nt-image src="/neatui-vue/img2.svg" width="100" height="100" placeholder="/neatui-vue/img_loading.png"></nt-image>
  </textarea>
  <template #preview>
    <Image src="/neatui-vue/img2.svg" width="100" height="100" placeholder="/neatui-vue/img_loading.png"></Image>
  </template>
  </CodePreview>
</ClientOnly>

### 加载失败

加载失败显示图像占位符

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-image src="/neatui-vue/img3.svg" width="100" height="100" placeholder="/neatui-vue/loading_error.png"></nt-image>
  </textarea>
  <template #preview>
    <Image src="/neatui-vue/img3.svg" width="100" height="100" placeholder="/neatui-vue/loading_error.png"></Image>
  </template>
  </CodePreview>
</ClientOnly>

<Shadow>
  <div style="width: 100px;height:100px;background-color:red;"></div>
</Shadow>
