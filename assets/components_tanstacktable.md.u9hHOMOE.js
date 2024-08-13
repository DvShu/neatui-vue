import{O as n,Q as b,_ as h}from"./chunks/theme.BNci8pmS.js";import{d as w,c as P,g as a,w as s,ae as m,b as e,M as d,Z as y,o as q,q as i,i as l}from"./chunks/framework.CqWuvRde.js";const C=m('<h1 id="tanstacktable" tabindex="-1">TanstackTable <a class="header-anchor" href="#tanstacktable" aria-label="Permalink to &quot;TanstackTable&quot;">​</a></h1><p><a href="/neatui-vue/components/table">table 表格</a>只能用于处理简单的列表展示。如果牵涉到复杂的功能比如：展开、选择等等，优先使用 <code>TanstackTable</code>。<code>TanstackTable</code> 是使用 <a href="https://tanstack.com/table/latest" target="_blank" rel="noreferrer">TanStack-Table</a> 实现。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>使用之前需要先安装 <code>TanStack-Table</code></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @tanstack/vue-table</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>展示一个简单的表格</p>',8),K=e("textarea",{lang:"vue"},`
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
          return \`\${row.firstName}.\${row.lastName}\`
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
  <\/script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns" border></nt-tanstack-table>
  </template>
  `,-1),z=m('<h3 id="固定表头和列" tabindex="-1">固定表头和列 <a class="header-anchor" href="#固定表头和列" aria-label="Permalink to &quot;固定表头和列&quot;">​</a></h3><ul><li>固定表头: 给表格设置 <code>max-height</code> 样式，然后设置 <code>fixed-head</code> 属性为 <code>true</code> 即可实现固定表头</li><li>固定列: 给列设置 <code>size</code> 列宽，然后给需要固定的列, 配置 <code>fixed</code> 取值为: <code>left</code>、<code>right</code></li></ul>',2),S=e("textarea",{lang:"vue"},`
  <script setup lang="ts">
    const columns1 = [
      {
        header: '姓名',
        cell: (row) => {
          return \`\${row.firstName}.\${row.lastName}\`
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
  <\/script>
  <template>
    <nt-tanstack-table
      :data="data"
      :columns="columns1"
      fixed-head
      style="max-height:150px;"
    ></nt-tanstack-table>
  </template>
  `,-1),$=e("h3",{id:"选中行-多选",tabindex:"-1"},[d("选中行(多选) "),e("a",{class:"header-anchor",href:"#选中行-多选","aria-label":'Permalink to "选中行(多选)"'},"​")],-1),B=e("p",null,[d("通过将第一列配置 "),e("code",null,"type=selection"),d(" 让行变为可选的")],-1),R=e("textarea",{lang:"vue"},`
  <script setup lang="ts">
    const columns2 = [{
      type: 'selection'
    }, ...columns]
  <\/script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns2"></nt-tanstack-table>
  </template>
  `,-1),V=e("h3",{id:"选中行-单选",tabindex:"-1"},[d("选中行(单选) "),e("a",{class:"header-anchor",href:"#选中行-单选","aria-label":'Permalink to "选中行(单选)"'},"​")],-1),I=e("p",null,[d("同多选一样配置一列 "),e("code",null,"type: 'selection'"),d("，然后设置表格属性 "),e("code",null,"multi-selection=false"),d(" 单选")],-1),E=e("textarea",{lang:"vue-html"},`
    <nt-tanstack-table :data="data" :columns="columns2" :multi-selection="false"></nt-tanstack-table>
  `,-1),O=m('<h3 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h3><p>对某一列数据进行排序，通过指定列的 <code>sorter</code> 函数即可启动排序按钮。当 <code>sorter</code> 为 <code>true</code> 时使用默认排序规则；当 <code>sorter</code> 为函数 <code>(rowA, rowB) =&gt; number</code> 时使用自定义排序规则。</p>',2),A=e("textarea",{lang:"vue"},`
  <script setup lang="ts">
    const columns3 = [{
      key: 'age',
      title: '年龄',
      sorter: true
    }]
  <\/script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns3"></nt-tanstack-table>
  </template>
  `,-1),F=e("h3",{id:"表头分组",tabindex:"-1"},[d("表头分组 "),e("a",{class:"header-anchor",href:"#表头分组","aria-label":'Permalink to "表头分组"'},"​")],-1),L=e("p",null,"数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。",-1),M=e("p",null,[d("通过在配置表头的 "),e("code",null,"columns[n]"),d(" 内嵌 "),e("code",null,"columns"),d(" 属性，实现多级表头。")],-1),D=e("textarea",{lang:"vue"},`
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
  <\/script>
  <template>
    <nt-tanstack-table :data="data1" :columns="columns4" border></nt-tanstack-table>
  </template>
  `,-1),J=e("h3",{id:"树形数据",tabindex:"-1"},[d("树形数据 "),e("a",{class:"header-anchor",href:"#树形数据","aria-label":'Permalink to "树形数据"'},"​")],-1),j=e("p",null,[d("表格支持树形数据的展示，当数据中有 "),e("code",null,"children"),d(" 字段时会自动展示为树形表格")],-1),H=e("textarea",{lang:"vue"},`
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
  <\/script>
  <template>
    <nt-tanstack-table :data="data2" :columns="columns5"></nt-tanstack-table>
  </template>
  `,-1),Q=e("blockquote",null,[e("p",null,[d("当前树形展开选择时存在bug: "),e("a",{href:"https://github.com/TanStack/table/issues/5620#issue-2365424488",target:"_blank",rel:"noreferrer"},"选中状态不正确")])],-1),U=e("h3",{id:"展开行",tabindex:"-1"},[d("展开行 "),e("a",{class:"header-anchor",href:"#展开行","aria-label":'Permalink to "展开行"'},"​")],-1),Z=e("p",null,[d("当表格内容较多不能一次性完全展示时。可以使用 "),e("code",null,"Table"),d(" 展开行功能。")],-1),G=e("p",null,[d("通过配置表格的 "),e("code",null,"expandable"),d(" 对象属性可以开启展开行功能。")],-1),W=e("textarea",{lang:"vue"},`
  <script setup lang="ts">
    const expandable = {
      rowExpandable: (record) => record.age < 40,
      expandedRowRender: (record) => h('div', JSON.stringify(record, null, 8))
    }
  <\/script>
  <template>
    <nt-tanstack-table :data="data" :columns="columns" :expandable="expandable"></nt-tanstack-table>
  </template>
  `,-1),X=m('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tanstacktable-props" tabindex="-1">TanstackTable Props <a class="header-anchor" href="#tanstacktable-props" aria-label="Permalink to &quot;TanstackTable Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>stripe</code></td><td>是否为斑马纹</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>border</code></td><td>是否显示四周边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>columns</code></td><td>表格列配置</td><td><a href="/neatui-vue/components/tanstacktable#tanstacktable-columndef">ColumnDef</a></td><td><code>[]</code></td></tr><tr><td><code>table-layout</code></td><td>表格布局</td><td><code>fixed | auto</code></td><td><code>auto</code></td></tr><tr><td><code>data</code></td><td>表格数据</td><td><code>any[]</code></td><td><code>[]</code></td></tr><tr><td><code>fixed-head</code></td><td>是否固定表头</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>multi-selection</code></td><td>当配置列为可选择时，是否允许多选</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>default-sorter</code></td><td>默认排序字段</td><td><code>{ id: string, desc: boolean }</code></td><td>-</td></tr><tr><td><code>expandable</code></td><td>配置展开属性</td><td><a href="/neatui-vue/components/tanstacktable#tanstacktable-expandableoption">ExpandableOption</a></td><td>-</td></tr></tbody></table><h3 id="tanstacktable-columndef" tabindex="-1">TanstackTable ColumnDef <a class="header-anchor" href="#tanstacktable-columndef" aria-label="Permalink to &quot;TanstackTable ColumnDef&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>列标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>header</code></td><td>表头, 如果为空，但是设置了 <code>title</code>，则会使用 <code>title</code> 作为表头</td><td><code>string | ((opts: { table: Table&lt;T&gt; }) =&gt; VNode | string)</code></td><td>-</td></tr><tr><td><code>accessorKey</code></td><td>对应数据对象的 <code>key</code>; 如果没有配置 <code>cell</code> 将会使用该 <code>key</code> 对象的数据值渲染单元格</td><td><code>string</code></td><td>-</td></tr><tr><td><code>key</code></td><td>对应数据对象的 <code>key</code>; 同 <code>accessorKey</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>id</code></td><td>列唯一标识, 如果未传, 但是传了 <code>key</code> 或者 <code>accessorKey</code> 将会以此作为 <code>id</code>；如果传了 <code>header</code> 是字符串，将会以 <code>header</code> 作为此 <code>id</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>size</code></td><td>列宽</td><td><code>number</code></td><td>-</td></tr><tr><td><code>fixed</code></td><td>是否固定列</td><td><code>left | right</code></td><td>-</td></tr><tr><td><code>type</code></td><td>列类型, 配置列可选择时使用</td><td><code>selection</code></td><td>-</td></tr><tr><td><code>sorter</code></td><td>排序</td><td><code>boolean | ((rowA: T, rowB: T) =&gt; number)</code></td><td>-</td></tr><tr><td><code>cell</code></td><td>单元格渲染函数; 如果不配, 将会使用配置的 <code>key</code> 对应的值渲染单元格</td><td><code>(row: T, index: number, info: CellContext&lt;T, unknown&gt;) =&gt; VNode | VNode[] | string</code></td><td>-</td></tr><tr><td><code>columns</code></td><td>子列, 通常用于配置表头分组</td><td><code>ColumnDef[]</code></td><td>-</td></tr></tbody></table><h3 id="tanstacktable-expandableoption" tabindex="-1">TanstackTable ExpandableOption <a class="header-anchor" href="#tanstacktable-expandableoption" aria-label="Permalink to &quot;TanstackTable ExpandableOption&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>rowExpandable</code></td><td>设置是否允许行展开</td><td><code>(row: T) =&gt; boolean</code></td><td>-</td></tr><tr><td><code>expandedRowRender</code></td><td>展开行渲染函数</td><td><code>(row: T) =&gt; VNode | VNode[]</code></td><td>-</td></tr></tbody></table>',7),se=JSON.parse('{"title":"TanstackTable","description":"","frontmatter":{},"headers":[],"relativePath":"components/tanstacktable.md","filePath":"components/tanstacktable.md","lastUpdated":1723109016000}'),Y={name:"components/tanstacktable.md"},de=w({...Y,setup(ee){const u=[{firstName:"tanner",lastName:"linsley",age:24,visits:100,status:"loading"},{firstName:"tandy",lastName:"miller",age:40,visits:40,status:"success"},{firstName:"tanner",lastName:"linsley",age:24,visits:100,status:"loading"}],g=[{firstName:"tanner",lastName:"linsley",age:24,visits:100,status:"In Relationship",progress:50},{firstName:"tandy",lastName:"miller",age:40,visits:40,status:"Single",progress:80},{firstName:"joe",lastName:"dirte",age:45,visits:20,status:"Complicated",progress:10}],k=[{firstName:"Justina",lastName:"Auer",age:1,children:[{firstName:"Luz",lastName:"Hayes",age:13},{firstName:"Susan",lastName:"Rempel",age:14,children:[{firstName:"Madisyn",lastName:"Lemke",age:26}]}]},{firstName:"Ralph",lastName:"Lindgren",age:33}],p=[{header:"姓名",cell:t=>`${t.firstName}.${t.lastName}`},{key:"age",title:"年龄"},{key:"visits",title:"访问次数"},{header:"状态",key:"status",cell:t=>{let o="primary";return t.status==="success"?o="success":t.status==="error"&&(o="error"),l(b,{type:o},{default:()=>t.status})}},{header:"操作",id:"operation",cell:()=>[l(h,{type:"primary",text:!0},{default:()=>"编辑"}),l(h,{type:"primary",text:!0},{default:()=>"删除"})]}],_=[{header:"姓名",cell:t=>`${t.firstName}.${t.lastName}`,size:200,fixed:"left"},{key:"age",title:"年龄",size:80},{key:"visits",title:"访问次数",size:160},{header:"状态",key:"status",cell:t=>{let o="primary";return t.status==="success"?o="success":t.status==="error"&&(o="error"),l(b,{type:o},{default:()=>t.status})},size:180},{header:"操作",id:"operation",cell:()=>[l(h,{type:"primary",text:!0},{default:()=>"编辑"}),l(h,{type:"primary",text:!0},{default:()=>"删除"})],size:200,fixed:"right"}],f=[{type:"selection"},...p],N=[{header:"姓名",cell:t=>`${t.firstName}.${t.lastName}`},{key:"age",title:"年龄",sorter:!0},{key:"visits",title:"访问次数"},{header:"状态",key:"status",cell:t=>{let o="primary";return t.status==="success"?o="success":t.status==="error"&&(o="error"),l(b,{type:o},{default:()=>t.status})}},{header:"操作",id:"operation",cell:()=>[l(h,{type:"primary",text:!0},{default:()=>"编辑"}),l(h,{type:"primary",text:!0},{default:()=>"删除"})]}],x=[{header:"hello",id:"hello",columns:[{accessorKey:"firstName"},{accessorKey:"lastName",header:"Last Name"}]},{header:"Info",columns:[{accessorKey:"age",header:"Age"},{header:"More Info",id:"MoreInfo",columns:[{accessorKey:"visits",header:"Visits"},{accessorKey:"status",header:"Status"},{accessorKey:"progress",header:"Profile Progress"}]}]}],v=[{type:"selection"},{key:"firstName"},{key:"lastName"},{key:"age"}],T={rowExpandable:t=>t.age<40,expandedRowRender:t=>l("div",JSON.stringify(t,null,8))};return(t,o)=>{const r=y("CodePreview"),c=y("ClientOnly");return q(),P("div",null,[C,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:u,columns:p,border:""})]),default:s(()=>[K]),_:1})]),_:1}),z,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:u,columns:_,"fixed-head":"",style:{"max-height":"150px"}})]),default:s(()=>[S]),_:1})]),_:1}),$,B,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:u,columns:f})]),default:s(()=>[R]),_:1})]),_:1}),V,I,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:u,columns:f,"multi-selection":!1})]),default:s(()=>[E]),_:1})]),_:1}),O,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:u,columns:N})]),default:s(()=>[A]),_:1})]),_:1}),F,L,M,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:g,columns:x,border:""})]),default:s(()=>[D]),_:1})]),_:1}),J,j,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:k,columns:v})]),default:s(()=>[H]),_:1})]),_:1}),Q,U,Z,G,a(c,null,{default:s(()=>[a(r,null,{preview:s(()=>[a(i(n),{data:u,columns:p,expandable:T})]),default:s(()=>[W]),_:1})]),_:1}),X])}}});export{se as __pageData,de as default};
