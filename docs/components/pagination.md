# Pagination 分页

当数据量过多时，使用分页分批次加载数据。

## 演示

<script setup>
  import { Pagination, Switch, FormItem } from "../../src"
  import { ref, watch } from 'vue'

  const singleHide = ref(false)
</script>

### 基础用法

只需要传递 `total` 或者 `page-count` 就能显示一个分页组件. 在 `change` 事件中进行分页处理.

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    function handlePageChange(currentPage: number) {
      console.log(currentPage)
    }
  </script>
  <template>
    <nt-pagination :total="100" @change="handlePageChange"></nt-pagination>
  </template>
  </textarea>
  <template #preview>
    <Pagination :total="100"></Pagination>
  </template>
  </CodePreview>
</ClientOnly>

### 对齐方式

通过 `align` 可以设置对齐方式，取值有: `start`**默认**、`center`、`end`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-pagination :total="100" align="start"></nt-pagination>
  <hr />
  <nt-pagination :total="100" align="center"></nt-pagination>
  <hr />
  <nt-pagination :total="100" align="end"></nt-pagination>
  </textarea>
  <template #preview>
    <Pagination :total="100" align="start"></Pagination>
    <hr />
    <Pagination :total="100" align="center"></Pagination>
    <hr />
    <Pagination :total="100" align="end"></Pagination>
  </template>
  </CodePreview>
</ClientOnly>

### 单页隐藏

当只有一页时，通过 `single-hide` 配置隐藏分页

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    const singleHide = ref(false)
  </script>
  <template>
    <nt-form-item label="单页隐藏">
      <nt-switch v-model="singleHide" />
    </nt-form-item>
    <hr />
    <nt-pagination :page-count="1" :hide-on-single-page="singleHide"></nt-pagination>
  </template>
  </textarea>
  <template #preview>
    <FormItem label="单页隐藏">
      <Switch v-model="singleHide" />
    </FormItem>
    <hr />
    <Pagination :page-count="1" :hide-on-single-page="singleHide"></Pagination>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Pagination Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
