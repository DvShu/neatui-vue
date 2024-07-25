# PageHeader 页头

通常用于页面的顶部，显示标题以及返回按钮。常用于二级、三级页面。

## 演示

<script setup>
  import { PageHeader } from "../../src"
</script>

### 基础用法

通过 `title-align` 属性设置标题的对齐方式。分为：`left`、`center`。默认为: `left`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <PageHeader title="标题" sub-title="副标题"></PageHeader>
    <hr />
    <PageHeader title="标题" title-align="center" height="44px"></PageHeader>
  </template>
  </CodePreview>
</ClientOnly>

## API

### PageHeader Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title-align` | 标题对齐方式 | `left`、`center` | `left` |
| `show-back` | 是否显示返回按钮 | `boolean` | `true` |
| `back-text` | 返回按钮文本 | `string` | `返回` |
| `title` | 标题 | `string` | - |
| `height` | 页眉高度 | `string` | - |
| `sub-title` | 副标题 | `string` | - |

### PageHeader Slots

<!-- prettier-ignore -->
| 名称 | 说明 |
| --- | --- |
| `default` | 页眉内容, 用于替换 `title` 和 `sub-title` 区域 |
