# Popover 弹出气泡

点击/鼠标移入元素，弹出气泡式的卡片浮层。在内容周围弹出一些隐藏的信息。和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 演示

<script setup>
  import { Popover, Button } from '../../src'
  import { ref } from 'vue'

  const $popover = ref();

  function toggleShow() {
    if ($popover.value != null) {
      if ($popover.value.isShow()) {
        $popover.value.hide();
      } else {
        $popover.value.show('#popoverTo');
      }
    }
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
    <nt-popover content="提示内容" placement="top-start">
      <template #trigger>
        <nt-button>top-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top">
      <template #trigger>
        <nt-button>top</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top-end">
      <template #trigger>
        <nt-button>top-end</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="left-start">
      <template #trigger>
        <nt-button>left-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left">
      <template #trigger>
        <nt-button>left</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left-end">
      <template #trigger>
        <nt-button>left-end</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="right-start">
      <template #trigger>
        <nt-button>right-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right">
      <template #trigger>
        <nt-button>right</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right-end">
      <template #trigger>
        <nt-button>right-end</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="bottom-start">
      <template #trigger>
        <nt-button>bottom-start</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom">
      <template #trigger>
        <nt-button>bottom</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom-end">
      <template #trigger>
        <nt-button>bottom-end</nt-button>
      </template>
    </nt-popover>
  </div>
  </textarea>
  <template #preview>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="top-start">
        <template #trigger>
          <Button>top-start</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="top">
        <template #trigger>
          <Button>top</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="top-end">
        <template #trigger>
          <Button>top-end</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="left-start">
        <template #trigger>
          <Button>left-start</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="left">
        <template #trigger>
          <Button>left</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="left-end">
        <template #trigger>
          <Button>left-end</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="right-start">
        <template #trigger>
          <Button>right-start</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="right">
        <template #trigger>
          <Button>right</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="right-end">
        <template #trigger>
          <Button>right-end</Button>
        </template>
      </Popover>
    </div>
    <div class="popover-p-row">
      <Popover content="提示内容" placement="bottom-start">
        <template #trigger>
          <Button>bottom-start</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="bottom">
        <template #trigger>
          <Button>bottom</Button>
        </template>
      </Popover>
      <Popover content="提示内容" placement="bottom-end">
        <template #trigger>
          <Button>bottom-end</Button>
        </template>
      </Popover>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 非受控模式

不需要自动弹出，需要进行手动控制是否展示；通过传递 `visible` 属性设置是否展示，然后设置 `to` 属性指向弹层对标节点。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
  import { ref } from 'vue'
  const $popover = ref()
  function toggleShow() {
    $popover.value.toggle();
  }
  </script>
  <template>
    <span id="popoverTo">对标元素</span>
    <nt-button @click='toggleShow' class="ml-10">弹出/隐藏</nt-button>
    <nt-popover reference="#popoverTo" ref="$popover" content="提示内容" trigger="manual"></nt-popover>
  </template>
  </textarea>
  <template #preview>
    <span id="popoverTo">对标元素</span>
    <Button @click='toggleShow' class="ml-10">弹出/隐藏</Button>
    <Popover ref="$popover" content="提示内容" trigger="manual"></Popover>
  </template>
  </CodePreview>
</ClientOnly>

### 不显示箭头

通过传递 `show-arrow` 为 `false` 来取消箭头显示

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-popover content="悬浮提示" :show-arrow="false">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  </textarea>
  <template #preview>
    <Popover content="悬浮提示" :show-arrow="false">
      <template #trigger>
        <span>悬浮</span>
      </template>
    </Popover>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Popover Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `trigger` | 触发方式, `manual` 非受控模式, 手动调用 `show` 显示, `hide` 隐藏 | `hover`、`click`、`manual` | `hover` |
| `content` | 显示内容, 也可以通过 `default-slot` 显示 | `string` | - |
| `placement` | 弹出位置 | `top-start`、`top`、`top-end`、`left-start`、`left`、`left-end`、`right-start`、`right`、`right-end`、`bottom-start`、`bottom`、`bottom-end` | `top` |
| `reference` | 非受控模式, 手动指定目标元素 | `HTMLElement \| string \| Ref<HTMLElement>` | - |

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
| `hide` | 隐藏弹层 | `() => void` |
| `show` | 非受控模式, 显示弹层 | `(reference?: HTMLElement \| string \| Ref<HTMLElement>) => void` |
| `isShow` | 是否显示 | `() => boolean` |
| `toggle` | 非受控模式, 切换弹层显示或隐藏 | `(reference?: HTMLElement \| string \| Ref<HTMLElement>) => void` |
