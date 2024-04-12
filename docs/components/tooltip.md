# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

可用来代替系统默认的 `title` 提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明

该提示使用纯 `CSS` 实现，所以气泡框位置通常需要手动设置

### 基础用法

使用 `title` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示位置: `topStart`、`top[默认]`、`topEnd`、`bottomStart`、`bottom`、`bottomEnd`

<CodePreview>
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
</CodePreview>

### 自定义提示

通过使用 `title` 插槽来渲染自定义的提示; 如果同时传递 `title` 和 插槽，则 `title` 属性为准

<script setup>
import { Tooltip, Button } from '../../src'
</script>

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

## API

### Tooltip Props

| 参数        | 说明           | 类型     | 可选值                                                            | 默认值 |
| ----------- | -------------- | -------- | ----------------------------------------------------------------- | ------ |
| `title`     | 提示文字       | `string` | -                                                                 | -      |
| `placement` | 提示框出现位置 | `string` | `topStart`、`top`、`topEnd`、`bottomStart`、`bottom`、`bottomEnd` | `top`  |

### Tooltip Slots

| 参数    | 说明                   | 参数 |
| ------- | ---------------------- | ---- |
| `title` | 自定义提示内容以及样式 | `()` |
