# SelectOri

这个是原生的下拉选择，只是对于 `select` 标签进行了一定的优化，通常用于单选时使用。

## 演示

<script setup>
  import { SelectOri } from "../../src"

  const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3' }
  ]
</script>

### 基础用法

通过 `options` 属性设置选项或者通过 `slot-default` 来手动渲染选项

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const options = [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' },
      { label: '选项三', value: '3' }
    ]
  </script>
  <template>
    <nt-select-ori :options="options"></nt-select-ori>
  </template>
  </textarea>
  <template #preview>
    <SelectOri :options="options"></SelectOri>
  </template>
  </CodePreview>
</ClientOnly>

## API

### SelectOri Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 选中的值 | `string` | - |
| `name` | 原生的 `name` 属性 | `string` | - |
| `options` | 选项列表 | `{ label: string, value: string }[]` | - |

### SelectOri Slots

<!-- prettier-ignore -->
| 名称 | 说明 |
| --- | --- |
| `default` | 选项列表 |
