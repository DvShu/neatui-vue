# Pagination 分页

当数据量过多时，使用分页分批次加载数据。

## 演示

<script setup>
  import { Pagination } from "../../src"
</script>

### 基础用法

只需要传递 `total` 或者 `page-count` 就能显示一个分页组件. 在 `change` 事件中进行分页处理.

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
    <Pagination :total="100"></Pagination>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Pagination Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
