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

最简单的用法，通过 `content` 传递浮层内容。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-popover content="悬浮提示">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  </textarea>
  <template #preview>
    <Popover content="悬浮提示">
      <template #trigger>
        <span>悬浮</span>
      </template>
    </Popover>
  </template>
  </CodePreview>
</ClientOnly>

### 触发方式

两种触发方式：鼠标移入[`hover`]、点击[`click`]；通过 `trigger` 属性设置触发方式。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-popover content="悬浮提示" trigger='hover'>
    <template #trigger>
      <nt-button>悬浮</nt-button>
    </template>
  </nt-popover>
  <nt-popover content="点击提示" trigger='click'>
    <template #trigger>
      <nt-button>点击</nt-button>
    </template>
  </nt-popover>
  </textarea>
  <template #preview>
    <Popover content="悬浮提示" trigger='hover'>
      <template #trigger>
        <Button>悬浮</Button>
      </template>
    </Popover>
    <Popover content="点击提示" trigger='click'>
      <template #trigger>
        <Button>点击</Button>
      </template>
    </Popover>
  </template>
  </CodePreview>
</ClientOnly>

### 位置

有 `12` 个弹出位置。通过 `placement` 属性设置弹出位置。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <div class="popover-p-row">
      <Button>topLeft</Button>
      <Popover content="提示内容" placement="top">
        <template #trigger>
          <Button>top</Button>
        </template>
      </Popover>
      <Button>topRight</Button>
    </div>
    <div class="popover-p-row">
      <Button>leftTop</Button>
      <Button>left</Button>
      <Button>leftBottom</Button>
    </div>
    <div class="popover-p-row">
      <Button>rightTop</Button>
      <Button>right</Button>
      <Button>rightBottom</Button>
    </div>
    <div class="popover-p-row">
      <Button>bottomLeft</Button>
      <Popover content="提示内容" placement="bottom">
        <template #trigger>
          <Button>bottom</Button>
        </template>
      </Popover>
      <Button>bottomRight</Button>
    </div>

  </template>
  </CodePreview>
</ClientOnly>

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
