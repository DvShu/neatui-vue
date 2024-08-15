# MdInput

`Material Design` 风格的输入框; `Material Design` 是由 `Google` 设计的视觉语言。

> 组件使用名称为: `nt-md-input`

## 演示

<script setup>
  import { MdInput } from "../../src"
  import { ref, watch } from 'vue'

  const value = ref('')
</script>

### 使用

传递 `v-model` 接收输入。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref, watch } from 'vue'
    //-
    const value = ref('')
  </script>
  <template>
    <nt-md-input v-model="value" label="姓名"></nt-md-input>
  </template>
  </textarea>
  <template #preview>
    <MdInput v-model="value" label="姓名"></MdInput>
  </template>
  </CodePreview>
</ClientOnly>

### 四周边框

只需要传递 `outline` 属性，就能让输入框带有边框。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-md-input v-model="value" label="姓名" outline></nt-md-input>
  </textarea>
  <template #preview>
    <MdInput v-model="value" label="姓名" outline></MdInput>
  </template>
  </CodePreview>
</ClientOnly>

## API

### MdInput Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `outline` | 是否显示四周边框 | `boolean` | `false` |
| `id` | 输入框的 id | `string` | - |
| `label` | 输入框的标签 | `string` | - |
| `placeholder` | 输入框的占位提示 | `string` | - |
| `name` | 输入框的 name | `string` | - |
| `html-type` | 对应输入框的原生属性 `type` | `string` | `text` |
| `v-model` | 双向绑定的值 | `string \| number` | - |

### MdInput Expose

<!-- prettier-ignore -->
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦输入框 | - | - |
