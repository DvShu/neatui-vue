# Image 图片

可预览的图片，在保留所有原生 `img` 的特性下，支持懒加载，自定义占位图片、加载失败等

## 演示

### 基础用法

<ClientOnly>
  <CodePreview class="mt-15">
    <textarea lang="vue-html">
    <nt-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" width="100"></nt-image>
    </textarea>
  </CodePreview>
</ClientOnly>

<script setup>
import { ref } from 'vue'
import { Image } from '../../src'
</script>

<Image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" placeholder="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"></Image>
