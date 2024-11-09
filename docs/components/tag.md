# Tag 标签

通常用来展示一些属性

## 演示

<script setup>
  import { Tag } from "../../src";

  function handleTagClose() {
    console.log("close")
  }
</script>

### 基础用法

由 `type` 属性来选择 `tag` 的类型。也可以通过 `color` 属性来自定义背景色。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-tag type="primary" class="ml-10">标签</nt-tag>
  <nt-tag type="info" class="ml-10">标签</nt-tag>
  <nt-tag type="success" class="ml-10">标签</nt-tag>
  <nt-tag type="error" class="ml-10">标签</nt-tag>
  <nt-tag class="ml-10" color="#409eff">标签</nt-tag>
  </textarea>
  </CodePreview>
</ClientOnly>

### 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。 当 `Tag` 被移除时会触发 `close` 事件。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
    function handleTagClose() {
      console.log("close");
    }
  </script>
  <template>
    <nt-tag closable @close="handleTagClose">标签</nt-tag>
  </template>
  </textarea>
  <template #preview>
    <Tag closable @close="handleTagClose">标签</Tag>
  </template>
  </CodePreview>
</ClientOnly>

### 动画

如果想给标签添加显示或移除时的动画，只需要 [添加渐变](/css-util#_1-vue3-transition-渐变) 即可。如果是一个标签列表就需要配合 [Vue3 TransitionGroup](https://cn.vuejs.org/guide/built-ins/transition-group) 组件。

> 注意：列表中的每个元素都必须有一个独一无二的 `key attribute`。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <Transition appear name="nt-scale">
      <nt-tag type="primary">标签</nt-tag>
    </Transition>
  </template>
  </textarea>
  <template #preview>
    <Transition appear name="nt-scale">
      <Tag type="primary">标签</Tag>
    </Transition>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Tag Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 类型 | `primary \| success \| error` | `primary` |
| `color` | 颜色, 自定义颜色 | `string` | - |
| `closable` | 是否可移除 | `boolean` | `false` |

### Css Variables

<!-- prettier-ignore -->
| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `--nt-tag-bg` | `var(--nt-primary-color-light5, #f6ffed)` | 标签背景色 |
| `--nt-tag-color` | `var(--nt-primary-color, #52c41a)` | 标签文本颜色 |
| `--nt-tag-border-color` | `var(--nt-primary-color, #52c41a)` | 标签边框颜色 |
