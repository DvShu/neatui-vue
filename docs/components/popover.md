# Popover 弹出气泡

点击/鼠标移入元素，弹出气泡式的卡片浮层。在内容周围弹出一些隐藏的信息。和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 演示

<script setup>
  import { Popover, Button } from '../../src'
  import { ref } from 'vue'

  const show = ref(false)

  function toggleShow() {
    show.value = !show.value
  }

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
    <nt-popover content="提示内容" placement="topStart">
      <template #trigger>
        <nt-button>topStart</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top">
      <template #trigger>
        <nt-button>top</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="topEnd">
      <template #trigger>
        <nt-button>topEnd</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="leftStart">
      <template #trigger>
        <nt-button>leftStart</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left">
      <template #trigger>
        <nt-button>left</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="leftEnd">
      <template #trigger>
        <nt-button>leftEnd</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="rightStart">
      <template #trigger>
        <nt-button>rightStart</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right">
      <template #trigger>
        <nt-button>right</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="rightEnd">
      <template #trigger>
        <nt-button>rightEnd</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="bottomStart">
      <template #trigger>
        <nt-button>bottomStart</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom">
      <template #trigger>
        <nt-button>bottom</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottomEnd">
      <template #trigger>
        <nt-button>bottomEnd</nt-button>
      </template>
    </nt-popover>
  </div>
  </textarea>
  <template #preview>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="topStart">
        <template #trigger>
          <Button>topStart</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="top">
        <template #trigger>
          <Button>top</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="topEnd">
        <template #trigger>
          <Button>topEnd</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="leftStart">
        <template #trigger>
          <Button>leftStart</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="left">
        <template #trigger>
          <Button>left</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="leftEnd">
        <template #trigger>
          <Button>leftEnd</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="rightStart">
        <template #trigger>
          <Button>rightStart</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="right">
        <template #trigger>
          <Button>right</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="rightEnd">
        <template #trigger>
          <Button>rightEnd</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="bottomStart">
        <template #trigger>
          <Button>bottomStart</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="bottom">
        <template #trigger>
          <Button>bottom</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="bottomEnd">
        <template #trigger>
          <Button>bottomEnd</Button>
        </template>
      </Popover>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 受控模式

不需要自动弹出，需要进行手动控制是否展示；通过传递 `visible` 属性设置是否展示，然后设置 `to` 属性指向弹层对标节点。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
  import { ref } from 'vue'
  const show = ref(false)
  function toggleShow() {
    show.value = !show.value
  }
  </script>
  <template>
    <span id="popoverTo">对标元素</span>
    <nt-button @click='toggleShow' class="ml-10">弹出/隐藏</nt-button>
    <nt-popover to="#popoverTo" content="提示内容" :visible="show"></nt-popover>
  </template>
  </textarea>
  <template #preview>
    <span id="popoverTo">对标元素</span>
    <Button @click='toggleShow' class="ml-10">弹出/隐藏</Button>
    <Popover to="#popoverTo" content="提示内容" :visible="show"></Popover>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Popover Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `trigger` | 触发方式 | `hover`、`click` | `hover` |
| `content` | 显示内容, 也可以通过 `default-slot` 显示 | `string` | - |
| `placement` | 弹出位置 | `topStart`、`top`、`topEnd`、`leftStart`、`left`、`leftEnd`、`rightStart`、`right`、`rightEnd`、`bottomStart`、`bottom`、`bottomEnd` | `top` |
| `visible` | 受控模式显示与隐藏 | `boolean` | - |
| `to` | 受控模式下起泡对标元素 | `HTMLElement`、`string`、`Ref<HTMLElement>` | - |

### Popover Slots

<!-- prettier-ignore -->
| 名称 | 说明 |
| --- | --- |
| `default` | 自定义内容 |
| `trigger` | 自定义触发元素 |

### Popover Exposes

<!-- prettier-ignore -->
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `close` | 关闭弹层 | `() => void` |
