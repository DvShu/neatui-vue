# List

无限加载数据的列表。滚动至底部时，加载更多数据。

## 演示

<script setup>
  import { ref } from 'vue'
  import { List } from '../../src'

  const finish = ref(false)

  let max = ref(15)

  function handleLoadmore() {
    // 模拟数据加载
    setTimeout(() => {
      max.value = max.value + 15
      if (max.value >= 50) {
        finish.value = true
      }
    }, 1500);
  }
</script>

### 基础用法

滚动到底部触发 `load-more` 加载更多事件，通过 `finish` 属性决定是否加载完成。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
  <div style="height: 300px">
    <nt-list :finish="finish" @load-more="handleLoadmore">
      <div style="padding: 10px; border-bottom: 1px solid #dedede;" v-for="i in max" :key="i">{{ i }}</div>
    </nt-list>
  </div>
  </template>
  <script setup>
    import { ref } from 'vue'
    let max = ref(15)
    function handleLoadmore() {
      // 模拟数据加载
      setTimeout(() => {
        max.value = max.value + 15
        if (max.value >= 50) {
          finish.value = true
        }
      }, 1500);
    }
  </script>
  </textarea>
  <template #preview>
    <div class="list-wrapper">
      <List :finish="finish" @load-more="handleLoadmore">
        <div class="list-item" v-for="i in max" :key="i">{{ i }}</div>
      </List>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

> 内部是使用 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 实现

### 普通列表

通过传递 `infinite=false` 禁用滚动加载这样就成了一个单纯的可以滚动的列表。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <div class="list-wrapper">
    <List :infinite="false">
      <div class="list-item" v-for="i in 100" :key="i">{{ i }}</div>
    </List>
  </div>
  </textarea>
  <template #preview>
    <div class="list-wrapper">
      <List :infinite="false">
        <div class="list-item" v-for="i in 100" :key="i">{{ i }}</div>
      </List>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

> 可以选择搭配 [css-util](/css-util#_3-滚动条样式) 来美化滚动条样式

## API

### List Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `finish` | 是否加载完成 | `boolean` | `false` |
| `infinite` | 否显示无限加载模式 | `boolean` | `true` |

### List Events

<!-- prettier-ignore -->
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `load-more` | 继续加载的回调函数 | - |
