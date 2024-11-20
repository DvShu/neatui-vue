# Tooltip 文字提示

常用于展示鼠标悬浮、点击时的提示信息。

可用来代替系统默认的 `title` 提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明

该提示基于 [popover](/components/popover) 实现，只是对样式进行了简单修改。

## 演示

<script setup>
import { Tooltip } from '../../src'
</script>

### 基础用法

传递 `content` 属性为提示内容

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lt-tooltip content="提示内容">
      <span>显示提示</span>
  </lt-tooltip>
  </textarea>
  <template #preview>
    <Tooltip content="提示内容">
      <span>显示提示</span>
    </Tooltip>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Tooltip Props

参数与 [popover-props](/components/popover#popover-props) 一致

### Tooltip Slots

| 参数      | 说明           |
| --------- | -------------- |
| `default` | 触发提示的元素 |
| `content` | 自定义提示内容 |
