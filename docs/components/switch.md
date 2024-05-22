# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 演示

<script setup>
  import { ref } from 'vue'
  import { Switch } from '../../src'

  const open = ref(true);
</script>

### 基础用法

绑定 `v-model` 到一个 `boolean` 类型的变量。可以使用 `true` 和 `false` 分别表示开和关。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const open = ref(true);
  </script>
  <template>
    <nt-switch v-model="open"></nt-switch>
  </template>
  </textarea>
  <template #preview>
    <Switch v-model="open"></Switch>
  </template>
  </CodePreview>
</ClientOnly>

### 文字描述

使用 `checked-text` 和 `unchecked-text` 属性来设置开关的文字描述。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-switch v-model="open" checked-text="Y" unchecked-text="N"></nt-switch>
  </template>
  </textarea>
  <template #preview>
    <Switch v-model="open" checked-text="Y" unchecked-text="N"></Switch>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Switch Props

| 参数             | 说明               | 类型      | 默认值  |
| ---------------- | ------------------ | --------- | ------- |
| `v-model`        | 开关状态(是否打开) | `boolean` | `false` |
| `checked-text`   | 开启时的文字描述   | `string`  | -       |
| `unchecked-text` | 关闭时的文字描述   | `string`  | -       |

### Switch Events

| 事件名   | 说明               | 回调参数             |
| -------- | ------------------ | -------------------- |
| `change` | 开关状态改变时触发 | `(checked: boolean)` |

### Switch CSS Variables

| 变量名               | 默认值                        | 描述         |
| -------------------- | ----------------------------- | ------------ |
| `--nt-switch-height` | `20px`                        | 开关按钮高度 |
| `--nt-switch-width`  | `var(--nt-switch-height) * 2` | 开关按钮宽度 |
