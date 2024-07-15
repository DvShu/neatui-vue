# Dialog

在保留当前页面状态的情况下，弹出一个对话框告知用户并承载相关操作，包含：标题区、内容区、操作区

## 演示

<script setup>
  import { ref } from 'vue'
  import { Dialog, AlertDialog } from "../../src"

  const show = ref(false)
</script>

<AlertDialog></AlertDialog>

### 基础用法

基础用法

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
    <Dialog v-model="show" title="Title">
      这是内容
    </Dialog>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Dialog Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| x | x | x | x |
