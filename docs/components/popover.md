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
  <textarea lang="vue-html">
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="topLeft">
      <template #trigger>
        <nt-button>topLeft</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top">
      <template #trigger>
        <nt-button>top</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="topRight">
      <template #trigger>
        <nt-button>topRight</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="leftTop">
      <template #trigger>
        <nt-button>leftTop</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left">
      <template #trigger>
        <nt-button>left</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="leftBottom">
      <template #trigger>
        <nt-button>leftBottom</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="rightTop">
      <template #trigger>
        <nt-button>rightTop</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right">
      <template #trigger>
        <nt-button>right</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="rightBottom">
      <template #trigger>
        <nt-button>rightBottom</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="bottomLeft">
      <template #trigger>
        <nt-button>bottomLeft</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom">
      <template #trigger>
        <nt-button>bottom</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottomRight">
      <template #trigger>
        <nt-button>bottomRight</nt-button>
      </template>
    </nt-popover>
  </div>
  </textarea>
  <template #preview>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="topLeft">
        <template #trigger>
          <Button>topLeft</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="top">
        <template #trigger>
          <Button>top</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="topRight">
        <template #trigger>
          <Button>topRight</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="leftTop">
        <template #trigger>
          <Button>leftTop</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="left">
        <template #trigger>
          <Button>left</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="leftBottom">
        <template #trigger>
          <Button>leftBottom</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="rightTop">
        <template #trigger>
          <Button>rightTop</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="right">
        <template #trigger>
          <Button>right</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="rightBottom">
        <template #trigger>
          <Button>rightBottom</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="bottomLeft">
        <template #trigger>
          <Button>bottomLeft</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="bottom">
        <template #trigger>
          <Button>bottom</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="bottomRight">
        <template #trigger>
          <Button>bottomRight</Button>
        </template>
      </Popover>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 受控模式

不需要自动弹出，需要进行手动控制是否展示；通过传递 `open` 属性设置是否展示，然后设置 `to` 属性指向弹层对标节点。

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
    console.log()
  </template>
  </CodePreview>
</ClientOnly>

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
