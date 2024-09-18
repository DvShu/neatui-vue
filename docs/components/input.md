# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

<script setup lang="ts">
  import { Input } from '../../src'
  import { ref } from 'vue'

  const inputInt = ref('')

  function numericParse(value: string) {
    let val = parseInt(value, 10)
    if (Number.isNaN(val)) {
      val = ''
    } else {
      val = Math.abs(val)
    }
    return String(val);
  }
</script>

### 基本使用

文本输入的基础用法。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-input placeholder="请输入内容"></nt-input>
</textarea>
</CodePreview></ClientOnly>

### 输入解析

通过传递 `parser` 在接受到输入值的时候进行解析，例如：只允许输入正整数

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { Input } from '../../src';
    import { ref } from 'vue';
    //-
    const inputInt = ref('')
    //-
    function numericParse(value: string) {
      let val = parseInt(value, 10)
      if (Number.isNaN(val)) {
        val = ''
      } else {
        val = Math.abs(val)
      }
      return String(val);
    }
  </script>
  <template>
    <nt-input v-model="inputInt" placeholder="请输入正整数" :parser="numericParse"></nt-input>
  </template>
  </textarea>
  <template #preview>
    <Input v-model="inputInt" placeholder="请输入正整数" :parser="numericParse" />
  </template>
  </CodePreview>
</ClientOnly>

### 禁用状态

通过 `disabled` 属性设置输入框为禁用状态。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-input placeholder="请输入内容" disabled></nt-input>
  </textarea>
  </CodePreview>
</ClientOnly>

## API

### Input Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `html-type` | 原始的 [type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#input_%E7%B1%BB%E5%9E%8B) | `string` | `text` |
| `model-value` / `v-model` | 绑定值  | `string` | — |
| `placeholder` | 占位文本 | `string` | — |
| `parser` | 输入时解析值 | `(value: string) => string` | — |

### Input Exposes

<!-- prettier-ignore -->
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `focus` | 使输入框获取焦点 | `() => void` |
