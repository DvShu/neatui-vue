# VirtualList 虚拟列表

当我们遇到数据量很大的情况时，传统的渲染方式会导致浏览器负载过大，页面渲染速度慢，滚动卡顿等一系列问题。

对于这种列表数据，我们可以采用虚拟滚动来进行性能优化。

## 演示

<script setup>
  import { VirtualList } from "../../src"

  const avatars = [
    'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    'https://avatars.githubusercontent.com/u/20943608?s=60&v=4',
    'https://avatars.githubusercontent.com/u/46394163?s=60&v=4',
    'https://avatars.githubusercontent.com/u/39197136?s=60&v=4',
    'https://avatars.githubusercontent.com/u/19239641?s=60&v=4'
  ]

  const items = Array.from({ length: 10000 }, (_, i) => ({
    key: `${i}`,
    value: i,
    avatar: avatars[i % avatars.length]
  }))
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
      <VirtualList :items="items" :item-size="42">
        <template  #default="{ item }">
          <img class="avatar" :src="item.avatar" alt="" style="display:inline-block;width:30px;border-radius:50%" />
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
| x | x | x | x |
