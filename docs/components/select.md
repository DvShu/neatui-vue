# Select 选择器

下拉选择器

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器
- 当选项过多时，使用下拉菜单展示并选择内容

> `nt-select` 的默认宽度更改为 `100%` 当使用内联形式时，宽度将显示异常。为了保持显示正常, 您需要手动配置 `nt-select` 的宽度

## 演示

<script setup>
  import { Select } from "../../src";

  function getRandomChineseCharacter() {
    const start = 0x4E00;
    const end = 0x9FA5;

    const randomCode = Math.floor(Math.random() * (end - start + 1)) + start;
    const randomChar = String.fromCharCode(randomCode);

    return randomChar;
  }

  function getRandomName(length) {
    let result = '';

    for (let i = 0; i < length; i++) {
      result += getRandomChineseCharacter();
    }

    return result;
  }

  const options = [];
  for (let i = 0; i < 15; i++) {
    options.push({
      label: getRandomName(i % 2 === 0 ? 2 : 3),
      value: i
    })
  }
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
    <Select :options="options"></Select>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Select Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
