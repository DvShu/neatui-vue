# Tag 标签

通常用来展示一些属性

## 演示

<script setup>
  import { Tag } from "../../src"
</script>

### 基础用法

由 `type` 属性来选择 `tag` 的类型。也可以通过 `color` 属性来自定义背景色。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-tag>标签</nt-tag>
  <nt-tag class="ml-10" color="#409eff">标签</nt-tag>
  </textarea>
  </CodePreview>
</ClientOnly>

## API

### Tag Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 类型 | `primary` | `primary` |
| `color` | 颜色, 自定义颜色 | `string` | - |

### Css Variables

<!-- prettier-ignore -->
| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `--nt-tag-bg` | `var(--nt-primary-color-light5, #f6ffed)` | 标签背景色 |
| `--nt-tag-color` | `var(--nt-primary-color, #52c41a)` | 标签文本颜色 |
| `--nt-tag-border-color` | `var(--nt-primary-color-light3, #b7eb8f)` | 标签边框颜色 |
