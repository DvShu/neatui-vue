# Dialog

在保留当前页面状态的情况下，弹出一个对话框告知用户并承载相关操作，包含：标题区、内容区、操作区

## 演示

<script setup lang="ts">
  import { ref } from 'vue'
  import { Dialog, AlertDialog, Button } from "../../src"

  const show = ref(false)

  function handleBeforeClose(type: 'cancel' | 'close' | 'ok', done) {
    if (type === 'ok') {
      console.log('ok')
      // 模拟数据提交
      setTimeout(() => {
        done()
      }, 1000);
    } else {
      done()
    }
  }
</script>

### 基础用法

需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 `Dialog`。`title` 属性用于定义标题，它是可选的，默认值为空。`before-close` 关闭前的回调，会暂停 `Dialog` 的关闭. 返回 `true` 则关闭，返回 `false` 则不关闭。

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
    <Button type="primary" @click="show = true">显示 Dialog</Button>
    <!---->
    <Dialog v-model="show" title="Title" :before-close="handleBeforeClose">
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
