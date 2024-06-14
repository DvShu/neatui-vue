# Polygon 多边形

显示一些多边形，例如：三角形、菱形、六边形、梯形等；全部采用 [clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path) 实现

## 演示

<script setup>
  import { Polygon } from '../../src';
</script>

### 基础用法

默认提供了多种三角形，只需要配置 `shape` 属性即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <div class="grid grid-cols-4">
    <div class="center flex-col">
      <Polygon shape="triangle-top"></Polygon>
      <span>triangle-top</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom"></Polygon>
      <span>triangle-bottom</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-left"></Polygon>
      <span>triangle-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-right"></Polygon>
      <span>triangle-right</span>
    </div>
  </div>
  <div class="grid grid-cols-4 mt-15">
    <div class="center flex-col">
      <Polygon shape="triangle-top-right"></Polygon>
      <span>triangle-top-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-top-left"></Polygon>
      <span>triangle-top-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-right"></Polygon>
      <span>triangle-bottom-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-left"></Polygon>
      <span>triangle-bottom-left</span>
    </div>
  </div>
  </textarea>
  <template #preview>
    <div class="grid grid-cols-4">
      <div class="center flex-col">
        <Polygon shape="triangle-top"></Polygon>
        <span>triangle-top</span>
      </div>
      <div class="center flex-col">
        <Polygon shape="triangle-bottom"></Polygon>
        <span>triangle-bottom</span>
      </div>
      <div class="center flex-col">
        <Polygon shape="triangle-left"></Polygon>
        <span>triangle-left</span>
      </div>
      <div class="center flex-col">
        <Polygon shape="triangle-right"></Polygon>
        <span>triangle-right</span>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-15">
      <div class="center flex-col">
        <Polygon shape="triangle-top-right"></Polygon>
        <span>triangle-top-right</span>
      </div>
      <div class="center flex-col">
        <Polygon shape="triangle-top-left"></Polygon>
        <span>triangle-top-left</span>
      </div>
      <div class="center flex-col">
        <Polygon shape="triangle-bottom-right"></Polygon>
        <span>triangle-bottom-right</span>
      </div>
      <div class="center flex-col">
        <Polygon shape="triangle-bottom-left"></Polygon>
        <span>triangle-bottom-left</span>
      </div>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义菱形

传递 `shape` 为 `rhombus`。然后自己定义 `nt-polygon-rhombus` 样式即可。同时可以通过 `background` 设置图形颜色

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-polygon shape="rhombus" background="red"></nt-polygon>
  </template>
  <style>
    .nt-polygon-rhombus {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
  </style>
  </textarea>
  <template #preview>
    <Polygon shape="rhombus" background="red"></Polygon>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Shape Props

| 属性名       | 类型     | 说明   | 默认值 |
| ------------ | -------- | ------ | ------ |
| `shape`      | `string` | 形状   | -      |
| `background` | `string` | 背景色 | -      |

### 样式变量

| 变量名                    | 默认值                   | 说明         |
| ------------------------- | ------------------------ | ------------ |
| `--nt-polygen-size`       | `10px`                   | 多边形大小   |
| `--nt-polygen-width`      | `var(--nt-polygen-size)` | 多边形宽度   |
| `--nt-polygen-height`     | `var(--nt-polygen-size)` | 多边形高度   |
| `--nt-polygen-background` | `#666`                   | 多边形背景色 |
