# Dialog

在保留当前页面状态的情况下，弹出一个对话框告知用户并承载相关操作，包含：标题区、内容区、操作区

## 演示

<script setup lang="ts">
  import { ref } from 'vue'
  import { Dialog, AlertDialog, Button, InfoIcon } from "../../src"

  const show = ref(false)
  const show1 = ref(false)
  const show3 = ref(false)
  const show4 = ref(false)

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
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
    //-
    /**
     * @param type 事件类型, cancel - 底部取消按钮触发, close - 关闭, ok - 底部确认按钮触发
     * @param done 只有调用 done 参数方法的时候才是真正关闭对话框的时候.
     */
    function handleBeforeClose(type: 'cancel' | 'close' | 'ok', done) {
      if (type === 'ok') {
        // 模拟数据提交
        setTimeout(() => {
          done();
        }, 1000);
      } else {
        done();
      }
    }
  </script>
  <template>
    <nt-button type="primary" @click="show = true">显示 Dialog</nt-button>
    <!---->
    <nt-dialog v-model="show" title="Title" :before-close="handleBeforeClose">
      这是内容
    </nt-dialog>
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

### 自定义头部

除了使用 `title` 属性定义头部内容外，也可以通过传递 `header-slot` 插槽自定义头部内容。通过传递 `width` 属性改变宽度；通常当需要在头部显示图标时有用, 比如：`confirm` 弹窗

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  </script>
  <template>
    <nt-button type="primary" @click="show1 = true">显示 Dialog</nt-button>
    <!---->
    <nt-dialog v-model="show1" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
    </nt-dialog>
  </template>
  </textarea>
  <template #preview>
    <Button type="primary" @click="show1 = true">显示 Dialog</Button>
    <!---->
    <Dialog v-model="show1" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
    </Dialog>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义内容

对话框的内容除了可以是简单的文本外，也可以是复杂的表单或者表格等。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <Button type="primary" @click="show3 = true">显示表单弹窗</Button>
    <Button type="primary" @click="show4 = true">显示表格弹窗</Button>
    <!---->
    <Dialog v-model="show3" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
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
