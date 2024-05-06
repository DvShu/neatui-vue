# Table 表格

用于展示大量结构化数据

## 演示

<script setup>
  import { h } from 'vue'
  import { Table, Button } from '../../src'

  const dataSource1 = [
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
  ]

  const dataSource2 = [
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
  ]

  const columns1 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'text' }, { default: () => '编辑'}),
      h(Button, { type: 'text' }, { default: () => '删除'})
    ]
  }]
  const columns2 = [{
    title: '姓名',
    key: 'name',
    fixed: 'left',
    width: 80,
  }, {
    title: '年龄',
    key: 'age',
    width: 200,
  }, {
    title: '住址',
    key: 'address',
    width: 200,
  }, {
    title: '操作',
    key: 'action',
    width: 200,
    fixed: 'right',
    render: () => [
      h(Button, { type: 'text' }, { default: () => '编辑'}),
      h(Button, { type: 'text' }, { default: () => '删除'})
    ]
  }]
  const columns3 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
    sorter: true
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'text' }, { default: () => '编辑'}),
      h(Button, { type: 'text' }, { default: () => '删除'})
    ]
  }]

  const defaultSort = { key: 'age', order: 'desc' }
</script>

### 基础表格

通过 `data` 定义数据源, 通过 `columns` 定义列，最后一列为各种操作

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { h } from 'vue';
    const dataSource = [
      {
        id: 1,
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        id: 2,
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        id: 3,
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ]
    const columns = [{
      title: '姓名',
      key: 'name'
      width: 80
    }, {
      title: '年龄',
      key: 'age',
      width: 80
    }, {
      title: '住址',
      key: 'address',
      width: 80
    }, {
      title: '操作',
      width: 80,
      render: () => [
        h(NtButton, { type: 'text' }, { default: () => '编辑'}),
        h(NtButton, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  </script>
  <template>
    <nt-table :data="dataSource" :columns="columns"></nt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 斑马纹

表格默认带斑马纹，可以通过设置 `stripe` 为 `false` 来取消斑马纹

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1" :stripe="false"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 边框

默认情况下，`Table` 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1" border></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 空表格

数据列表没有数据时，显示空表格

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="[]" :columns="columns1"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 固定表头和列

给表格设置 `max-height` 样式，然后设置 `fixed-head` 属性为 `true` 即可实现固定表头。 给列设置宽度，然后给需要固定的列设置 `fixed`；就能实现固定列。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { h } from 'vue';
    const dataSource = [
      {
        id: 1,
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        id: 2,
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        id: 3,
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ]
    const columns2 = [{
      title: '姓名',
      key: 'name',
      fixed: 'left',
      width: 80,
    }, {
      title: '年龄',
      key: 'age',
      width: 200,
    }, {
      title: '住址',
      key: 'address',
      width: 200,
    }, {
      title: '操作',
      key: 'action',
      width: 200,
      fixed: 'right',
      render: () => [
        h(Button, { type: 'text' }, { default: () => '编辑'}),
        h(Button, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  </script>
  <template>
    <nt-table :data="dataSource2" :columns="columns" fixed-head style="max-height:200px;" class="nt-scrollbar"></nt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource2" :columns="columns2" fixed-head style="max-height:200px;" class="nt-scrollbar"></Table>
  </template>
  </CodePreview>
</ClientOnly>

> 1. 设置 `max-height` 可以通过直接设置 `style`；也可以通过 [tailwindcss-max-height](https://www.tailwindcss.cn/docs/max-height#setting-the-maximum-height)
> 2. 如果想改变滚动条样式，参考 [工具样式-滚动条](../css-util#_2-滚动条样式)；引入样式表，然后给 `Table` 组件, 添加 `nt-scrollbar` 的类名: `<nt-table ... fixed-head class="max-h-24 nt-scrollbar"></nt-table>`

### 排序

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <hr />
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns3" :default-sort="defaultSort"></Table>
  </template>
  </CodePreview>
</ClientOnly>
