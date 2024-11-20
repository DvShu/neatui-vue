## 1. `Vue3 Transition` 渐变

### 1.1 引入样式

```ts
import 'litos-ui-vue/style/util/transition.css';
```

<script setup>
import SourceCode from '../src/app_components/SourceCode.vue';
import CodePreview from '../src/app_components/CodePreview.vue';
import { Button, LoadingIcon } from '../src'
import { ref } from 'vue';

const show = ref(true)
const show1 = ref(true)
const show2 = ref(true)
</script>

### 1.2 使用

所有的渐变都支持传递 `--nt-transition-times` 控制时长, 默认为 `0.3s`；只需要简单的添加相应的 `Transition-name` 属性即可。

#### 1.2.1 `nt-opacity`

普通渐变进入/退出

<ClientOnly><CodePreview class="mb-15">
<textarea lang="vue-html">
<lt-button @click="show = !show">Toggle</lt-button>
<Transition name="nt-opacity">

<p v-if="show">Hello world</p>
</Transition>
</textarea>
<template #preview>
<Button @click="show = !show">Toggle</Button>
<Transition name="nt-opacity">
<span v-if="show" class="ml-10">Hello World</span>
</Transition>
</template>
</CodePreview></ClientOnly>

#### 1.2.2 `nt-fadein`

从顶部往下移动渐变的进入/退出; 支持通过 `--nt-fadein-offset` 控制距离, 默认为 `-20px`

<ClientOnly><CodePreview class="mb-15">
<textarea lang="vue-html">
<lt-button @click="show = !show">Toggle</lt-button>
<Transition name="nt-fadein">

<p v-if="show">Hello world</p>
</Transition>
<Transition name="nt-fadein">
<p v-if="show" style="--nt-fadein-offset:-50px;">Hello world</p>
</Transition>
</textarea>
<template #preview>
<Button @click="show1 = !show1" >Toggle</Button>
<Transition name="nt-fadein">
<div v-if="show1" class="inline ml-10">Hello World</div>
</Transition>
<Transition name="nt-fadein">
<div v-if="show1" class="inline ml-10" style="--nt-fadein-offset:-50px;">Hello World</div>
</Transition>
</template>
</CodePreview></ClientOnly>

#### 1.2.3 `nt-scale`

缩放进入/退出

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lt-button @click="show = !show">Toggle</lt-button>
    <Transition name="nt-opacity">
  <p v-if="show">Hello world</p>
  </Transition>
  </textarea>
  <template #preview>
    <Button @click="show2 = !show2">Toggle</Button>
    <Transition name="nt-scale" appear>
      <div class="inline ml-10" v-if="show2">Hello world</div>
    </Transition>
  </template>
  </CodePreview>
</ClientOnly>

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                    | 描述                                | 默认值  |
| ----------------------- | ----------------------------------- | ------- |
| `--nt-transition-times` | 渐变时长, 所有渐变都支持            | `0.3s`  |
| `--nt-fadein-offset`    | 渐变距离, 支持的渐变有: `nt-fadein` | `-20px` |

## 2. `CSS Animation` 动画

### 引入样式

```ts
import 'litos-ui-vue/style/util/animation.css';
```

### 使用

可以直接通过动画名称，添加 `css class`、也可以通过 `css animation` 使用动画名称；例如：

#### 添加 `css class`

所有的动画的 `class` 规则为: `nt-` + 动画名称 + `-anim`；例如旋转动画为: `nt-rotate-anim`

```html
<lt-loading-icon class="nt-rotate-anim" />
```

#### 通过 `css animation` 使用动画名称

所有的动画的 `animation` 名称规则为：`nt-` + 动画名称 + `-frame`；例如旋转动画为: `nt-rotate-frame`

```vue
<template>
  <lt-loading-icon class="custome-rotate" />
</template>

<style>
.custome-rotate {
  animation: nt-rotate-frame 1.5s infinite linear;
}
</style>
```

### 内置动画

<div class="icon-list mt-15">
  <div class="icon-item center">
    <LoadingIcon class="nt-rotate-anim" />
    <span class="icon-name">rotate</span>
  </div>
</div>

## 3. 滚动条样式

如果觉得默认滚动条不好看，想修改滚动条样式

### 引入滚动条样式表

```ts
import 'litos-ui-vue/style/util/scrollbar.css';
```

### 使用

只需要在滚动容器添加 `nt-scrollbar` 类即可

<ClientOnly><CodePreview class="mb-15">
<textarea lang="html">

  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  </textarea>
</CodePreview></ClientOnly>

#### 更改滚动条颜色以及大小

通过使用下面表格中的 `CSS` 变量，可以更改滚动条的颜色以及大小

<ClientOnly><CodePreview>
<textarea lang="html">

  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  </textarea>
</CodePreview></ClientOnly>

### 主题定制 - 样式变量

| 名称                   | 描述                                       | 默认值    |
| ---------------------- | ------------------------------------------ | --------- |
| `--nt-scrollbar-bg`    | 滑块背景色                                 | `#d9d9d9` |
| `--nt-scrollbar-hover` | 鼠标悬浮时滑块颜色                         | `#bfbfbf` |
| `--nt-scrollbar-size`  | 滑块尺寸, 水平滚动条时为高度，垂直时为宽度 | `10px`    |
