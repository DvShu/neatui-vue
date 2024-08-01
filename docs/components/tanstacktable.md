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

给表格设置 `max-height` 样式，然后设置 `fixed-head` 属性为 `true` 即可实现固定表头。

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
    <TanstackTable :data="data" :columns="columns" fixed-head style="max-height:150px;"></TanstackTable>
  </template>
  </CodePreview>
</ClientOnly>

## API

### TanstackTable Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | x | x | x |
