# Checkbox 复选框

在一组备选项中进行多选。适用提醒用户勾选场景，突出多选框选项，可以有效增加用户识别度。

## 演示

<script setup>
  import { ref, watch } from 'vue'
  import { Checkbox } from '../../src'
  const checked1 = ref(true)

  watch(checked1, (newVal) => {
    console.log(newVal)
  })
</script>

<Checkbox v-model="checked1" label="Option1" />

### 基础用法

单独使用可以表示两种状态之间的切换

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-checkbox label="Option1"></nt-checkbox>
  </textarea>
  </CodePreview>
</ClientOnly>

### 禁用状态

多选框不可用状态, 设置 `disabled` 属性即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-checkbox label="Option1" disabled></nt-checkbox>
  </textarea>
  </CodePreview>
</ClientOnly>

### 中间状态

设置 `indeterminate` 属性，表示不确定状态，一般用于实现全选的效果，实现部分选中的状态。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <Checkbox v-model="checked1" label="Option1" indeterminate />
  </template>
  </CodePreview>
</ClientOnly>

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
