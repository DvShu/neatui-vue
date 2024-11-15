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

  const options2 = ref(options);
  const selectedValue = ref('');

  const value1 = ref([]);

  const value2 = ref([]);

  function handleSearch(val) {
    console.log(val);
    setTimeout(() => {
      // options2.value = fruits.slice(11, 15).map((item, i) => { return { value: i, label: item } });
      options2.value = []
    }, 1500);
  }
</script>

### 使用

基础用法

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
    const fruits = ["苹果", "香蕉", "橙子", "葡萄", "柠檬", "草莓", "樱桃", "芒果", "猕猴桃", "杨梅", "菠萝", "西瓜", "哈密瓜", "桃子", "梨", "柿子", "榴莲", "椰子", "龙眼", "荔枝"];
    //-
    const options = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
    //-
    const value = ref('');
  </script>
  <template>
    <nt-select :options="options" v-model="value" style="width:180px;"></nt-select>
  </template>
  </textarea>
  <template #preview>
    <Select :options="options" v-model="selectedValue" style="width:180px;"></Select>
  </template>
  </CodePreview>
</ClientOnly>

### 多选

设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。默认情况下选中值会以 <a href="/neatui-vue/components/tag" target="_blank">Tag</a> 组件的形式展现， 你也可以设置 `collapse-tags` 属性将它们合并为一段文字。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <template>
    <nt-select :options="options" v-model="value1" multiple style="width:180px;"></nt-select>
    <nt-select
      :options="options"
      v-model="value2"
      multiple
      style="width:180px;"
      class="ml-10"
      collapse-tags
    ></nt-select>
  </template>
  </textarea>
  <template #preview>
    <Select :options="options" v-model="value1" multiple style="width:180px;"></Select>
    <Select
      :options="options"
      v-model="value2"
      multiple
      style="width:180px;"
      class="ml-10"
      collapse-tags
    ></Select>
  </template>
  </CodePreview>
</ClientOnly>

### 可清空

设置 `clearable` 属性，则可将选择器清空。使用清除图标来清除选择。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
  <nt-select
    :options="options"
    v-model="selectedValue"
    style="width:180px;"
    clearable
  ></nt-select>
  </template>
  </textarea>
  <template #preview>
    <Select
      :options="options"
      v-model="selectedValue"
      style="width:180px;"
      clearable
    ></Select>
    <Select
      :options="options"
      v-model="value2"
      multiple
      style="width:180px;"
      class="ml-10"
      collapse-tags
      clearable
    ></Select>
  </template>
  </CodePreview>
</ClientOnly>

### 过滤选项

可以利用过滤功能快速查找选项。

为 `nt-select` 添加 `filterable` 属性即可启用搜索功能。 默认情况下，`Select` 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter` 函数来实现。 `filter` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值以及当前选项，返回值为 `boolean` 表明当前选项是否符合过滤。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-select
      :options="options"
      v-model="selectedValue"
      style="width:180px;"
      filterable
    ></nt-select>
  </template>
  </textarea>
  <template #preview>
    <Select
      :options="options"
      v-model="selectedValue"
      style="width:180px;"
      filterable
    ></Select>
    <Select
      :options="options"
      v-model="value2"
      multiple
      style="width:180px;"
      class="ml-10"
      collapse-tags
      filterable
    ></Select>
  </template>
  </CodePreview>
</ClientOnly>

### 远程搜索

搜索框和远程数据结合，输入关键字以从远程服务器中查找数据。

为了启用远程搜索，需要将 `filterable` 和 `remote` 同时设置为 `true`，同时监听 `on-search` 事件，事件参数为输入的值, 可以在事件中搜索远程结果，并重新更新 `options` 选项 。

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
    <Select
      :options="options2"
      v-model="selectedValue"
      style="width:180px;"
      filterable
      remote
      @search="handleSearch"
    ></Select>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Select Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value / v-model` | 选中项绑定值 | `string、number、array` | - |
| `placeholder` | 占位符 | `string` | 请选择 |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `label-field` | 选项 `label` 的字段名 | `string` | `label` |
| `value-field` | 选项 `value` 的字段名 | `string` | `value` |
| `options` | 配置选项内容 | `SelectOption[]` | - |
| `multiple` | 是否多选 | `boolean` | `false` |
| `collapse-tags` | 多选时是否将选中值按文字的形式展示 | `boolean` | `false` |
| `clearable` | 是否可清空 | `boolean` | `false` |
| `filterable` | 是否启用过滤 | `boolean` | `false` |
| `filter` | 自定义的过滤函数 | `(match: string, option: SelectOption) => boolean` | - |

### SelectOption Property

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 选项标签 | `string` | - |
| `value` | 选项值 | `string、number` | - |
| `class` | 自定义一个选项的类名 | `string` | - |
| `render` | 渲染整个选项 | `(option: SelectOption, isSelect: boolean, selectedValues?: any \| any[]) => VNode[] \| VNode` | - |
