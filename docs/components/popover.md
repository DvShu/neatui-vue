# Popover 弹出起泡

点击/鼠标移入元素，弹出气泡式的卡片浮层。在内容周围弹出一些隐藏的信息。和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 演示

<script setup>
  import { Popover, Button } from '../../src'

  function click1() {
    console.log('click1')
  }
</script>

### 基础用法

基

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <Popover content="Content" placement="bottom">
      <template #trigger>
        <Button @click="click1">悬浮</Button>
      </template>
    </Popover>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
