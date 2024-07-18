# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

文本输入的基础用法。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-input placeholder="请输入内容"></nt-input>
</textarea>
</CodePreview></ClientOnly>

## API

### Input Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `html-type` | 原始的 [type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#input_%E7%B1%BB%E5%9E%8B) | `string` | `text` |
| `model-value` / `v-model` | 绑定值  | `string` | — |
| `placeholder` | 占位文本 | `string` | — |

### Input Exposes

<!-- prettier-ignore -->
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `focus` | 使输入框获取焦点 | `() => void` |
