import{a as l,f as r}from"./chunks/theme.JvRmGtQ2.js";import{P as m,c as x,f as e,w as d,ab as u,b as t,q as a,o as y,u as c,h as s}from"./chunks/framework.B2jEF4L8.js";const g=u('<h1 id="table-表格" tabindex="-1">Table 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;Table 表格&quot;">​</a></h1><p>用于展示大量结构化数据</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础表格" tabindex="-1">基础表格 <a class="header-anchor" href="#基础表格" aria-label="Permalink to &quot;基础表格&quot;">​</a></h3><p>通过 <code>data</code> 定义数据源, 通过 <code>columns</code> 定义列，最后一列为各种操作</p>',5),k=t("textarea",{lang:"vue"},`
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
  <\/script>
  <template>
    <nt-table :data="dataSource" :columns="columns"></nt-table>
  </template>
  `,-1),w=t("h3",{id:"斑马纹",tabindex:"-1"},[a("斑马纹 "),t("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1),T=t("p",null,[a("表格默认带斑马纹，可以通过设置 "),t("code",null,"stripe"),a(" 为 "),t("code",null,"false"),a(" 来取消斑马纹")],-1),P=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  `,-1),S=t("h3",{id:"边框",tabindex:"-1"},[a("边框 "),t("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1),v=t("p",null,[a("默认情况下，"),t("code",null,"Table"),a(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),t("code",null,"border"),a(" 属性，把该属性设置为 "),t("code",null,"true"),a(" 即可启用。")],-1),q=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  `,-1),C=t("h3",{id:"空表格",tabindex:"-1"},[a("空表格 "),t("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1),N=t("p",null,"数据列表没有数据时，显示空表格",-1),V=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  `,-1),A=t("h3",{id:"固定表头和列",tabindex:"-1"},[a("固定表头和列 "),t("a",{class:"header-anchor",href:"#固定表头和列","aria-label":'Permalink to "固定表头和列"'},"​")],-1),B=t("p",null,[a("给表格设置 "),t("code",null,"max-height"),a(" 样式，然后设置 "),t("code",null,"fixed-head"),a(" 属性为 "),t("code",null,"true"),a(" 即可实现固定表头。 给列设置宽度，然后给需要固定的列设置 "),t("code",null,"fixed"),a("；就能实现固定列。")],-1),I=t("textarea",{lang:"vue"},`
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
  <\/script>
  <template>
    <nt-table :data="dataSource2" :columns="columns" fixed-head style="max-height:200px;" class="nt-scrollbar"></nt-table>
  </template>
  `,-1),O=u('<blockquote><ol><li>设置 <code>max-height</code> 可以通过直接设置 <code>style</code>；也可以通过 <a href="https://www.tailwindcss.cn/docs/max-height#setting-the-maximum-height" target="_blank" rel="noreferrer">tailwindcss-max-height</a></li><li>如果想改变滚动条样式，参考 <a href="./../css-util#_2-滚动条样式">工具样式-滚动条</a>；引入样式表，然后给 <code>Table</code> 组件, 添加 <code>nt-scrollbar</code> 的类名: <code>&lt;nt-table ... fixed-head class=&quot;max-h-24 nt-scrollbar&quot;&gt;&lt;/nt-table&gt;</code></li></ol></blockquote><h3 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h3><p>给列的选项增加 <code>sorter</code> 为 <code>true</code>，同时配置 <code>key</code> 字段就能实现排序；可以通过 <code>defaultSort</code> 设置初始排序；也可以添加 <code>sorter</code> 回调函数来启用手动排序</p>',3),E=t("textarea",{lang:"vue"},`
  <script setup>
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
  <\/script>
  <template>
    <nt-table :data="dataSource1" :columns="columns3" :default-sort="defaultSort"></nt-table>
  </template>
  `,-1),D=u('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="table-props" tabindex="-1">Table Props <a class="header-anchor" href="#table-props" aria-label="Permalink to &quot;Table Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>data</code></td><td>数据源</td><td><code>array</code></td><td>-</td></tr><tr><td><code>columns</code></td><td>表格列配置</td><td><code>ColumnOption[]</code></td><td>-</td></tr><tr><td><code>default-sort</code></td><td>初始排序</td><td><code>SortOption</code></td><td>-</td></tr><tr><td><code>stripe</code></td><td>是否为斑马纹</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>border</code></td><td>是否显示四周边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>fixed-head</code></td><td>是否固定表头</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>sorter</code></td><td>使用手动排序</td><td><code>(data: any[]) =&gt; any[]</code></td><td>-</td></tr></tbody></table><p><code>ColumnOption</code> 选项:</p><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>列名</td><td><code>string</code></td><td>-</td></tr><tr><td><code>key</code></td><td>列标识, 自动排序时必传</td><td><code>string</code></td><td>-</td></tr><tr><td><code>width</code></td><td>列宽</td><td><code>string</code>、<code>number</code></td><td>-</td></tr><tr><td><code>fixed</code></td><td>列是否固定</td><td><code>left</code>、<code>right</code></td><td>-</td></tr><tr><td><code>sorter</code></td><td>是否排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>render</code></td><td>自定义渲染</td><td><code>(row: any, index: number) =&gt; VNode | VNode[]</code></td><td>-</td></tr></tbody></table><p><code>SortOption</code> 选项</p><table><thead><tr><th>字段</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>key</code></td><td>列标识, 自动排序时必传</td><td><code>string</code></td></tr><tr><td><code>order</code></td><td>排序方式</td><td><code>asc</code> - 升序、<code>desc</code> - 降序</td></tr></tbody></table><h3 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-label="Permalink to &quot;Table Events&quot;">​</a></h3>',8),F=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1715067177000}'),R={name:"components/table.md"},G=Object.assign(R,{setup($){const i=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],_=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],h=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(l,{type:"text"},{default:()=>"编辑"}),s(l,{type:"text"},{default:()=>"删除"})]}],p=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[s(l,{type:"text"},{default:()=>"编辑"}),s(l,{type:"text"},{default:()=>"删除"})]}],b=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(l,{type:"text"},{default:()=>"编辑"}),s(l,{type:"text"},{default:()=>"删除"})]}],f={key:"age",order:"desc"};return(j,J)=>{const n=m("CodePreview"),o=m("ClientOnly");return y(),x("div",null,[g,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:h})]),default:d(()=>[k]),_:1})]),_:1}),w,T,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:h,stripe:!1})]),default:d(()=>[P]),_:1})]),_:1}),S,v,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:h,border:""})]),default:d(()=>[q]),_:1})]),_:1}),C,N,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:[],columns:h})]),default:d(()=>[V]),_:1})]),_:1}),A,B,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:_,columns:p,"fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:d(()=>[I]),_:1})]),_:1}),O,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:b,"default-sort":f})]),default:d(()=>[E]),_:1})]),_:1}),D])}}});export{F as __pageData,G as default};
