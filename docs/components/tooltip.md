# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

可用来代替系统默认的 `title` 提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明

该提示使用纯 `CSS` 实现，所以气泡框位置通常需要手动设置

### 基础用法

使用 `title` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示位置: `topStart`、`top[默认]`、`topEnd`、`bottomStart`、`bottom`、`bottomEnd`

<ClientOnly><CodePreview>
<textarea lang="vue-html">

  <div class="flex-between">
    <nt-tooltip placement="topStart" title="prompt text">
      <nt-button>topStart</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="top" title="prompt text">
      <nt-button>top</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="topEnd" title="prompt text">
      <nt-button>topEnd</nt-button>
    </nt-tooltip>
  </div>
  <div class="flex-between mt-15">
    <nt-tooltip placement="bottomStart" title="prompt text">
      <nt-button>bottomStart</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="bottom" title="prompt text">
      <nt-button>bottom</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="bottomEnd" title="prompt text">
      <nt-button>bottomEnd</nt-button>
    </nt-tooltip>
  </div>
  </textarea>
</CodePreview></ClientOnly>

### 自定义提示

通过使用 `title` 插槽来渲染自定义的提示; 如果同时传递 `title` 和 插槽，则 `title` 属性为准

<script setup>
import { Tooltip, Button } from '../../src'
</script>

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-tooltip>
    <nt-button>自定义提示</nt-button>
    <template v-slot:title>
      <span style="color:red;">custome propmt text</span>
    </template>
  </nt-tooltip>
  </textarea>
  <template #preview>
    <Tooltip>
      <Button>自定义提示</Button>
      <template #title>
        <span style="color:red;">custome propmt text</span>
      </template>
    </Tooltip>
  </template>
  </CodePreview>
</ClientOnly>

### 受控模式

通过 `visible` 属性来控制提示框的显示与隐藏

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
    <nt-tooltip :visible="true" title="Content">
        <span>受控模式</span>
    </nt-tooltip>
  </textarea>
  <template #preview>
    <Tooltip :visible="true" title="Content">
      <span>受控模式</span>
    </Tooltip>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义风格

通过 `styleName` 属性来设置提示框的风格名称，然后自定义 `.nt-tooltip--xx` 来定义风格样式，`xx` 就是传递的 `styleName` 的值；例如从 [css-generators](https://css-generators.com/tooltip-speech-bubble/) 复制一段样式，改名称为 `nt-tooltip--demo`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-tooltip title="Content" style-name="demo" placement="bottom">
      <span>自定义风格</span>
    </nt-tooltip>
  </template>
  <style>
    .nt-tooltip--demo {
      color: #fff;
      font-size: 18px;
      max-width: 28ch;
      text-align: center;
    }
    .nt-tooltip--demo {
      /* triangle dimension */
      --b: 2em; /* base */
      --h: 1em; /* height */
      --p: 50%; /* triangle position (0%:left 100%:right) */
      --r: 1.2em; /* the radius */
      --c: #6a4a3c;
      padding: 1em;
      border-radius: min(var(--r), var(--p) - var(--b) / 2)
        min(var(--r), 100% - var(--p) - var(--b) / 2) var(--r) var(--r) / var(--r);
      clip-path: polygon(
        0 0,
        0 100%,
        100% 100%,
        100% 0,
        min(100%, var(--p) + var(--b) / 2) 0,
        var(--p) calc(-1 * var(--h)),
        max(0%, var(--p) - var(--b) / 2) 0
      );
      background: var(--c);
      border-image: conic-gradient(var(--c) 0 0) fill 0/ 0 calc(
          100% - var(--p) - var(--b) / 2
        ) var(--r) calc(var(--p) - var(--b) / 2) / var(--h) 0 0 0;
    }
    .nt-tooltip-bottom.nt-tooltip--demo {
      top: calc(100% + 20px);
    }
  </style>
  </textarea>
  <template #preview>
    <Tooltip title="Content" style-name="demo" placement="bottom">
      <span>自定义风格</span>
    </Tooltip>
  </template>
  </CodePreview>
</ClientOnly>

> 可以通过配合 `nt-tooltip-top`、`nt-tooltip-start` 等调整箭头或者提示框的位置

### 触发方式

默认是悬浮触发，可以通过修改 `trigger` 属性来改变触发方式

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <Tooltip title="prompt text">
      <Button>悬浮</Button>
    </Tooltip>
    <Tooltip title="prompt text" trigger="click" class="ml-10">
      <Button>点击</Button>
    </Tooltip>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Tooltip Props

| 参数           | 说明                     | 类型      | 可选值                                                            | 默认值    |
| -------------- | ------------------------ | --------- | ----------------------------------------------------------------- | --------- |
| `title`        | 提示文字                 | `string`  | -                                                                 | -         |
| `placement`    | 提示框出现位置           | `string`  | `topStart`、`top`、`topEnd`、`bottomStart`、`bottom`、`bottomEnd` | `top`     |
| `styleName`    | 风格, 可以自定义风格     | `string`  | -                                                                 | `default` |
| `visible`      | 是否显示提示框[受控模式] | `boolean` | -                                                                 | `false`   |
| `contentClass` | Tooltip Content 样式     | `string`  | -                                                                 | -         |

### Tooltip Slots

| 参数    | 说明                   | 参数 |
| ------- | ---------------------- | ---- |
| `title` | 自定义提示内容以及样式 | `()` |
