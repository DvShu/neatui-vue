# VirtualList 虚拟列表

当我们遇到数据量很大的情况时，传统的渲染方式会导致浏览器负载过大，页面渲染速度慢，滚动卡顿等一系列问题。

对于这种列表数据，我们可以采用虚拟滚动来进行性能优化。

## 演示

<script setup>
  import { VirtualList } from "../../src"
</script>

### 基础用法

对于固定高度, 一次性渲染 `10w` 条数据。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <div class="virtual-list-demo-container">
      <VirtualList></VirtualList>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

## API

### VirtualList Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
