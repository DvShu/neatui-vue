# Select 选择器

下拉选择器

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器
- 当选项过多时，使用下拉菜单展示并选择内容

> `nt-select` 的默认宽度更改为 `100%` 当使用内联形式时，宽度将显示异常。为了保持显示正常, 您需要手动配置 `nt-select` 的宽度

## 演示

<script setup>
  import { Select } from "../../src";
  import { ref } from 'vue';

  const fruits = ["苹果", "香蕉", "橙子", "葡萄", "柠檬", "草莓", "樱桃", "芒果", "猕猴桃", "杨梅", "菠萝", "西瓜", "哈密瓜", "桃子", "梨", "柿子", "榴莲", "椰子", "龙眼", "荔枝"];

  const options = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });

  const selectedValue = ref([]);
</script>

### 使用

基础用法

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <Select :options="options" v-model="selectedValue"></Select>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Select Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
