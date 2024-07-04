# Progress

用于展示操作进度, 为用户显示该操作的当前进度和状态；通常在操作需要较长时间才能完成时使用。

## 演示

<script setup>
  import { Progress } from '../../src'
</script>

### 基础用法

标准的进度条

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
  <Progress></Progress>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
