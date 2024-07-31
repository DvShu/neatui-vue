# TanstackTable

[table 表格](/components/table)只能用于处理简单的列表展示。如果牵涉到复杂的功能比如：展开、选择等等，优先使用 `TanstackTable`。`TanstackTable` 是使用 [TanStack-Table](https://tanstack.com/table/latest) 实现。

## 安装

使用之前需要先安装 `TanStack-Table`

```bash
npm install @tanstack/vue-table
```

## 演示

<script setup>
  import { TanstackTable } from "../../src"
</script>

### 基础用法

展示一个简单的表格

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <TanstackTable>1234</TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

## API

### TanstackTable Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
