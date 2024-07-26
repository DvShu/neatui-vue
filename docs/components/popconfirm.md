# Popconfirm

点击元素，弹出简单的气泡式的确认框

## 演示

<script setup>
  import { Popconfirm, Button } from "../../src"
</script>

### 基础用法

传递 `title` 属性或者 `slot-default` 为确认内容。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-popconfirm title="确认要删除吗？">
    <template #trigger>
      <nt-button>删除</nt-button>
    </template>
  </nt-popconfirm>
  </textarea>
  <template #preview>
    <Popconfirm title="确认要删除吗？">
      <template #trigger>
        <Button>删除</Button>
      </template>
    </Popconfirm>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Popconfirm Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 弹出提示标题 | `string` | - |

### Popconfirm Slots

<!-- prettier-ignore -->
| 名称 | 说明 |
| --- | --- |
| `trigger` | 触发 `Popconfirm` 的元素 |
| `default` | 提示内容 |
| `icon` | 提示图标 |

### Popconfirm Events

<!-- prettier-ignore -->
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| `confirm` | 点击确认按钮时触发 | `() => void` |
| `cancel` | 点击取消按钮时触发 | `() => void` |
