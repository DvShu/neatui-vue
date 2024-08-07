# TanstackTable

[table 表格](/components/table)只能用于处理简单的列表展示。如果牵涉到复杂的功能比如：展开、选择等等，优先使用 `TanstackTable`。`TanstackTable` 是使用 [TanStack-Table](https://tanstack.com/table/latest) 实现。

## 安装

使用之前需要先安装 `TanStack-Table`

```bash
npm install @tanstack/vue-table
```

## 演示

<script setup lang="ts">
  import { TanstackTable, Tag, Button } from "../../src"
  import { h } from 'vue'

  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  };

  const data: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'loading',
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'success',
    },
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'loading',
    },
  ];

  const data1 =  [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]

  const data2 = [
    {
      "firstName": "Justina",
      "lastName": "Auer",
      "age": 1,
      "children": [
        {
          "firstName": "Luz",
          "lastName": "Hayes",
          "age": 13
        },
        {
          "firstName": "Susan",
          "lastName": "Rempel",
          "age": 14,
          "children": [
            {
              "firstName": "Madisyn",
              "lastName": "Lemke",
              "age": 26
            }
          ]
        }
      ]
    },
    {
      "firstName": "Ralph",
      "lastName": "Lindgren",
      "age": 33
    }
  ]

  const columns = [
    {
      header: '姓名',
      cell: (row) => {
        return `${row.firstName}.${row.lastName}`
      },
    },
    {
      key: 'age',
      title: '年龄'
    },
    {
      key: 'visits',
      title: '访问次数'
    },
    {
      header: '状态',
      key: 'status',
      cell: (row) => {
        let type = 'primary'
        if (row.status === 'success') {
          type = 'success'
        } else if (row.status === 'error') {
          type = 'error'
        }
        return h(Tag, { type: type }, { default: () => row.status })
      }
    },
    {
      header: '操作',
      id: 'operation',
      cell: () => {
        return [
          h(Button, { type: 'primary', text: true }, { default: () => '编辑' }),
          h(Button, { type: 'primary', text: true }, { default: () => '删除' })
        ]
      }
    }
  ]

  const columns1 = [
    {
      header: '姓名',
      cell: (row) => {
        return `${row.firstName}.${row.lastName}`
      },
      size:200,
      fixed: 'left'
    },
    {
      key: 'age',
      title: '年龄',
      size: 80
    },
    {
      key: 'visits',
      title: '访问次数',
      size: 160
    },
    {
      header: '状态',
      key: 'status',
      cell: (row) => {
        let type = 'primary'
        if (row.status === 'success') {
          type = 'success'
        } else if (row.status === 'error') {
          type = 'error'
        }
        return h(Tag, { type: type }, { default: () => row.status })
      },
      size: 180
    },
    {
      header: '操作',
      id: 'operation',
      cell: () => {
        return [
          h(Button, { type: 'primary', text: true }, { default: () => '编辑' }),
          h(Button, { type: 'primary', text: true }, { default: () => '删除' })
        ]
      },
      size: 200,
      fixed: 'right'
    }
  ]

  const columns2 = [{
    type: 'selection'
  }, ...columns]

  const columns3 = [
    {
      header: '姓名',
      cell: (row) => {
        return `${row.firstName}.${row.lastName}`
      },
    },
    {
      key: 'age',
      title: '年龄',
      sorter: true
    },
    {
      key: 'visits',
      title: '访问次数'
    },
    {
      header: '状态',
      key: 'status',
      cell: (row) => {
        let type = 'primary'
        if (row.status === 'success') {
          type = 'success'
        } else if (row.status === 'error') {
          type = 'error'
        }
        return h(Tag, { type: type }, { default: () => row.status })
      }
    },
    {
      header: '操作',
      id: 'operation',
      cell: () => {
        return [
          h(Button, { type: 'primary', text: true }, { default: () => '编辑' }),
          h(Button, { type: 'primary', text: true }, { default: () => '删除' })
        ]
      }
    }
  ]

  const columns4 = [
    {
      header: 'hello',
      id: 'hello',
      columns: [
        { accessorKey: 'firstName' },
        { accessorKey: 'lastName', header: 'Last Name' }
      ]
    },
    {
      header: 'Info',
      columns: [
        { accessorKey: 'age', header: 'Age' },
        {
          header: 'More Info',
          id: 'MoreInfo',
          columns: [
            { accessorKey: 'visits', header: 'Visits' },
            { accessorKey: 'status', header: 'Status' },
            { accessorKey: 'progress', header: 'Profile Progress' }
          ]
        }
      ]
    }
  ]

  const columns5 = [
    { type: 'selection' },
    { key: 'firstName' },
    { key: 'lastName' },
    { key: 'age' }
  ]
</script>

### 基础用法

展示一个简单的表格

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    import { h } from 'vue'
    //-
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      visits: number;
      status: string;
      progress: number;
    };
    //-
    const data: Person[] = [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'loading',
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'success',
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'error',
      },
    ];
    //-
    const columns = [
      {
        header: '姓名',
        cell: (row) => {
          return `${row.firstName}.${row.lastName}`
        },
      },
      {
        key: 'age',
        title: '年龄'
      },
      {
        key: 'visits',
        title: '访问次数'
      },
      {
        header: '状态',
        key: 'status',
        cell: (row) => {
          let type = 'primary'
          if (row.status === 'success') {
            type = 'success'
          } else if (row.status === 'error') {
            type = 'error'
          }
          return h(NtTag, { type: type }, { default: () => row.status })
        }
      },
      {
        header: '操作',
        id: 'operation',
        cell: () => {
          return [
            h(NtButton, { type: 'primary', text: true }, { default: () => '编辑' }),
            h(NtButton, { type: 'primary', text: true }, { default: () => '删除' })
          ]
        }
      }
    ]
  </script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns" border></nt-tanstack-table>
  </template>
  </textarea>
  <template #preview>
    <TanstackTable :data="data" :columns="columns" border></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

### 固定表头和列

- 固定表头: 给表格设置 `max-height` 样式，然后设置 `fixed-head` 属性为 `true` 即可实现固定表头
- 固定列: 给列设置 `size` 列宽，然后给需要固定的列, 配置 `fixed` 取值为: `left`、`right`

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    const columns1 = [
      {
        header: '姓名',
        cell: (row) => {
          return `${row.firstName}.${row.lastName}`
        },
        size:200,
        fixed: 'left'
      },
      {
        key: 'age',
        title: '年龄',
        size: 80
      },
      {
        key: 'visits',
        title: '访问次数',
        size: 160
      },
      {
        header: '状态',
        key: 'status',
        cell: (row) => {
          let type = 'primary'
          if (row.status === 'success') {
            type = 'success'
          } else if (row.status === 'error') {
            type = 'error'
          }
          return h(NtTag, { type: type }, { default: () => row.status })
        },
        size: 180
      },
      {
        header: '操作',
        id: 'operation',
        cell: () => {
          return [
            h(NtButton, { type: 'primary', text: true }, { default: () => '编辑' }),
            h(NtButton, { type: 'primary', text: true }, { default: () => '删除' })
          ]
        },
        size: 200,
        fixed: 'right'
      }
    ]
  </script>
  <template>
    <nt-tanstack-table
      :data="data"
      :columns="columns1"
      fixed-head
      style="max-height:150px;"
    ></nt-tanstack-table>
  </template>
  </textarea>
  <template #preview>
    <TanstackTable :data="data" :columns="columns1" fixed-head style="max-height:150px;"></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

### 选中行(多选)

通过将第一列配置 `type=selection` 让行变为可选的

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    const columns2 = [{
      type: 'selection'
    }, ...columns]
  </script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns2"></nt-tanstack-table>
  </template>
  </textarea>
  <template #preview>
    <TanstackTable :data="data" :columns="columns2"></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

### 选中行(单选)

同多选一样配置一列 `type: 'selection'`，然后设置表格属性 `multi-selection=false` 单选

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
    <nt-tanstack-table :data="data" :columns="columns2" :multi-selection="false"></nt-tanstack-table>
  </textarea>
  <template #preview>
    <TanstackTable :data="data" :columns="columns2" :multi-selection="false"></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

### 排序

对某一列数据进行排序，通过指定列的 `sorter` 函数即可启动排序按钮。当 `sorter` 为 `true` 时使用默认排序规则；当 `sorter` 为函数 `(rowA, rowB) => number` 时使用自定义排序规则。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    const columns3 = [{
      key: 'age',
      title: '年龄',
      sorter: true
    }]
  </script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns3"></nt-tanstack-table>
  </template>
  </textarea>
  <template #preview>
    <TanstackTable :data="data" :columns="columns3"></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

### 表头分组

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

通过在配置表头的 `columns[n]` 内嵌 `columns` 属性，实现多级表头。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    const data1 =  [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
      },
    ]
    //-
    const columns4 = [
      {
        header: 'hello',
        id: 'hello',
        columns: [
          { accessorKey: 'firstName' },
          { accessorKey: 'lastName', header: 'Last Name' }
        ]
      },
      {
        header: 'Info',
        columns: [
          { accessorKey: 'age', header: 'Age' },
          {
            header: 'More Info',
            id: 'MoreInfo',
            columns: [
              { accessorKey: 'visits', header: 'Visits' },
              { accessorKey: 'status', header: 'Status' },
              { accessorKey: 'progress', header: 'Profile Progress' }
            ]
          }
        ]
      }
    ]
  </script>
  <template>
    <nt-tanstack-table :data="data1" :columns="columns4" border></nt-tanstack-table>
  </template>
  </textarea>
  <template #preview>
    <TanstackTable :data="data1" :columns="columns4" border></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

### 树形数据

表格支持树形数据的展示，当数据中有 `children` 字段时会自动展示为树形表格

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup lang="ts">
    const data2 = [
      {
        "firstName": "Justina",
        "lastName": "Auer",
        "age": 1,
        "children": [
          {
            "firstName": "Luz",
            "lastName": "Hayes",
            "age": 13
          },
          {
            "firstName": "Susan",
            "lastName": "Rempel",
            "age": 14,
            "children": [
              {
                "firstName": "Madisyn",
                "lastName": "Lemke",
                "age": 26
              }
            ]
          }
        ]
      },
      {
        "firstName": "Ralph",
        "lastName": "Lindgren",
        "age": 33
      }
    ]
    //-
    const columns5 = [
      { type: 'selection' },
      { key: 'firstName' },
      { key: 'lastName' },
      { key: 'age' }
    ]
  </script>
  <template>
    <nt-tanstack-table :data="data2" :columns="columns5"></nt-tanstack-table>
  </template>
  </textarea>
  <template #preview>
    <TanstackTable :data="data2" :columns="columns5"></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

> 当前树形展开选择时存在bug: [选中状态不正确](https://github.com/TanStack/table/issues/5620#issue-2365424488)

## API

### TanstackTable Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
