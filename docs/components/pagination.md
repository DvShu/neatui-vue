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

### 简单分页

简单的分页，在空间有限的情况下，可以使用简单分页。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-pagination :page-count="100" simple></nt-pagination>
  </textarea>
  <template #preview>
    <Pagination :page-count="100" simple></Pagination>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Pagination Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `total` | 数据总数 | `number` | - |
| `page-count` | 页码总数, `total` 和 `page-count` 设置任意一个就可以达到显示页码的功能 | `number` | - |
| `page-size` | 每页的数据条数 | `number` | `10` |
| `default-current-page` | 当前页数的默认初始值，不设置时默认为 1 | `number` | `1` |
| `align` | 对齐方式 | `start \| center \| end` | `start` |
| `hide-on-single-page` | 只有一页时是否隐藏分页器 | `boolean` | `false` |
| `simple` | 简单分页 | `boolean` | `false` |
| `page \| v-model:page` | 当前页数[受控模式] | `number` | - |

### Pagination Emits

<!-- prettier-ignore -->
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 当前页改变时触发 | `currentPage: number` |
