# ColorPicker 颜色选择器

通常用于进行颜色选择。

## 演示

<script setup>
  import { ColorPicker } from "../../src";
  import { ref, watch } from 'vue';

  const color = ref('#722ed1');
</script>

### 基础使用

只需传递 `v-model` 即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const color = ref('#722ed1');
  </script>
  <template>
    <nt-color-picker v-model="color"></nt-color-picker>
  </template>
  </textarea>
  <template #preview>
    <ColorPicker v-model="color"></ColorPicker>
  </template>
  </CodePreview>
</ClientOnly>

## API

### ColorPicker Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 16进制的颜色 | `string` | - |
