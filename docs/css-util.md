## 1. `Vue3 Transition` 渐变

### 1.1 引入样式

```ts
import '@asteres/neatui-vue/style/util/transition.css';
```

<script setup>
import SourceCode from '../src/app_components/SourceCode.vue';
import CodePreview from '../src/app_components/CodePreview.vue';
import { Button } from '../src'
import { ref } from 'vue';

const show = ref(true)
const show1 = ref(true)
</script>

### 1.2 使用

所有的渐变都支持传递 `--nt-transition-times` 控制时长, 默认为 `0.3s`；只需要简单的添加相应的 `Transition-name` 属性即可。

#### 1.2.1 `nt-opacity`

普通渐变进入/退出

<CodePreview class="mb-15">
  <textarea lang="vue-html">
  <nt-button @click="show = !show">Toggle</nt-button>
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
</CodePreview>

#### 1.2.2 `nt-fadein`

从顶部往下移动渐变的进入/退出; 支持通过 `--nt-fadein-offset` 控制距离, 默认为 `-20px`

<CodePreview class="mb-15">
  <textarea lang="vue-html">
  <nt-button @click="show = !show">Toggle</nt-button>
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
</CodePreview>

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                    | 描述                                | 默认值  |
| ----------------------- | ----------------------------------- | ------- |
| `--nt-transition-times` | 渐变时长, 所有渐变都支持            | `0.3s`  |
| `--nt-fadein-offset`    | 渐变距离, 支持的渐变有: `nt-fadein` | `-20px` |

## 2. 滚动条样式

如果觉得默认滚动条不好看，想修改滚动条样式

### 引入滚动条样式表

```ts
import '@asteres/neatui-vue/style/util/scrollbar.css';
```

### 使用

只需要在滚动容器添加 `nt-scrollbar` 类即可

<CodePreview class="mb-15">
  <textarea lang="html">
  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  </textarea>
</CodePreview>

#### 更改滚动条颜色以及大小

通过使用下面表格中的 `CSS` 变量，可以更改滚动条的颜色以及大小

<CodePreview>
  <textarea lang="html">
  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  </textarea>
</CodePreview>

### 主题定制 - 样式变量

| 名称                   | 描述                                       | 默认值    |
| ---------------------- | ------------------------------------------ | --------- |
| `--nt-scrollbar-bg`    | 滑块背景色                                 | `#d9d9d9` |
| `--nt-scrollbar-hover` | 鼠标悬浮时滑块颜色                         | `#bfbfbf` |
| `--nt-scrollbar-size`  | 滑块尺寸, 水平滚动条时为高度，垂直时为宽度 | `10px`    |
