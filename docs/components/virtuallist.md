# VirtualList 虚拟列表

当我们遇到数据量很大的情况时，传统的渲染方式会导致浏览器负载过大，页面渲染速度慢，滚动卡顿等一系列问题。

对于这种列表数据，我们可以采用虚拟滚动来进行性能优化。

> 1. **现在暂时只支持固定高度的列表**
> 2. 以后可以考虑使用 `css3` 属性 [content-visibility](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content-visibility)

## 演示

<script setup>
  import { VirtualList } from "../../src"

  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: `${i}`,
    value: i,
  }))
</script>

### 基础用法

对于固定高度, 一次性渲染 `1w` 条数据。`item-size` 表示每一行的高度

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
    const items = Array.from({ length: 10000 }, (_, i) => ({
      id: `${i}`,
      value: i,
    }));
  </script>
  <template>
    <nt-virtual-list :items="items" :item-size="42" key-field="id">
      <template  #default="{ item }">
        <span>{{ item.value }}</span>
      </template>
    </nt-virtual-list>
  </template>
  </textarea>
  <template #preview>
    <div class="virtual-list-demo-container">
      <VirtualList :items="items" :item-size="42" key-field="id">
        <template  #default="{ item }">
          <span>{{ item.value }}</span>
        </template>
      </VirtualList>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

## API

### VirtualList Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | *必传*, 需要展示的数据 | `any[]` | - |
| `item-size` | *必传*, 表项的高度，用于计算滚动大小和位置 | `number` | - |
| `item-class` | 列表项的 `class` | `string` | - |
| `key-field` | 选项 `key` 的字段名, 用于 `v-for` 的 `key`, 不传则用 `index` | `string` | - |
| `buffer` | 冲区数量，列表会在上下多渲染额外的项 | `number` | `2` |

### VirtualList Slots

<!-- prettier-ignore -->
| 名称 | 说明 | 字段 |
| --- | --- | --- |
| `default` | 渲染列表项内容 | `item`: 列表项数据 |
| `render` | 渲染整个列表项, 需要手动遍历数据列表进行渲染 | `items`: 可现实列表数据 |
