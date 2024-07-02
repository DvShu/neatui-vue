import{B as s,_ as i,j as N}from"./chunks/theme.D1Q3MtFZ.js";import{e as A,c as D,k as t,w as d,ab as _,b as e,y as a,S as g,o as B,z as u,t as I,h as n}from"./chunks/framework.DQF4kMpX.js";const O=_('<h1 id="table-表格" tabindex="-1">Table 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;Table 表格&quot;">​</a></h1><p>用于展示大量结构化数据</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础表格" tabindex="-1">基础表格 <a class="header-anchor" href="#基础表格" aria-label="Permalink to &quot;基础表格&quot;">​</a></h3><p>通过 <code>data</code> 定义数据源, 通过 <code>columns</code> 定义列，最后一列为各种操作</p>',5),E=e("textarea",{lang:"vue"},`
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
  `,-1),R=e("h3",{id:"斑马纹",tabindex:"-1"},[a("斑马纹 "),e("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1),U=e("p",null,[a("表格默认带斑马纹，可以通过设置 "),e("code",null,"stripe"),a(" 为 "),e("code",null,"false"),a(" 来取消斑马纹")],-1),$=e("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  `,-1),j=e("h3",{id:"边框",tabindex:"-1"},[a("边框 "),e("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1),J=e("p",null,[a("默认情况下，"),e("code",null,"Table"),a(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),e("code",null,"border"),a(" 属性，把该属性设置为 "),e("code",null,"true"),a(" 即可启用。")],-1),z=e("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  `,-1),K=e("h3",{id:"空表格",tabindex:"-1"},[a("空表格 "),e("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1),F=e("p",null,"数据列表没有数据时，显示空表格",-1),G=e("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  `,-1),H=_('<h3 id="固定表头和列" tabindex="-1">固定表头和列 <a class="header-anchor" href="#固定表头和列" aria-label="Permalink to &quot;固定表头和列&quot;">​</a></h3><p>给表格设置 <code>max-height</code> 样式，然后设置 <code>fixed-head</code> 属性为 <code>true</code> 即可实现固定表头。 将表格 将 <code>table-layout</code> 设置为 <code>fixed</code>，然后将需要固定的列设置 <code>fixed</code> 为 <code>left</code> 或 <code>right</code>，就能实现固定列。</p>',2),L=e("textarea",{lang:"vue"},`
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
    <nt-table :data="dataSource2" :columns="columns" table-layout="fixed" fixed-head style="max-height:200px;" class="nt-scrollbar"></nt-table>
  </template>
  `,-1),M=_('<blockquote><ol><li><em>切记</em>: 要固定列，需要使用 <code>fixed</code> 布局，不能将 <code>table-layout</code> 设置为 <code>auto</code></li><li>设置 <code>max-height</code> 可以通过直接设置 <code>style</code>；也可以通过 <a href="https://www.tailwindcss.cn/docs/max-height#setting-the-maximum-height" target="_blank" rel="noreferrer">tailwindcss-max-height</a></li><li>如果想改变滚动条样式，参考 <a href="./../css-util#_2-滚动条样式">工具样式-滚动条</a>；引入样式表，然后给 <code>Table</code> 组件, 添加 <code>nt-scrollbar</code> 的类名: <code>&lt;nt-table ... fixed-head class=&quot;max-h-24 nt-scrollbar&quot;&gt;&lt;/nt-table&gt;</code></li></ol></blockquote><h3 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h3><p>给列的选项增加 <code>sorter</code> 为 <code>true</code>，同时配置 <code>key</code> 字段就能实现排序；可以通过 <code>defaultSort</code> 设置初始排序；也可以添加 <code>sorter</code> 回调函数来启用手动排序</p>',3),Q=e("textarea",{lang:"vue"},`
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
  `,-1),W=e("h3",{id:"表尾合计行",tabindex:"-1"},[a("表尾合计行 "),e("a",{class:"header-anchor",href:"#表尾合计行","aria-label":'Permalink to "表尾合计行"'},"​")],-1),X=e("p",null,[a("设置 "),e("code",null,"renderSummary"),a(" 函数来渲染表尾合计行")],-1),Y=e("textarea",{lang:"vue"},`
  <script setup>
    function renderSummary() {
      return h('tr', [
        h('td', '合计'),
        h('td', { colspan: '3' },dataSource1.reduce((sum, item) => sum + item.age, 0)),
      ])
    }
  <\/script>
  <template>
    <nt-table :data="dataSource1" :columns="columns3" :render-summary="renderSummary"></nt-table>
  </template>
  `,-1),Z=e("h3",{id:"多级表头",tabindex:"-1"},[a("多级表头 "),e("a",{class:"header-anchor",href:"#多级表头","aria-label":'Permalink to "多级表头"'},"​")],-1),ee=e("p",null,[a("配置 "),e("code",null,"columns"),a(" 的时候，给某一列增加一个 "),e("code",null,"children"),a(" 就能实现表头分组")],-1),te=e("textarea",{lang:"vue"},`
  <script setup>
    const columns4 = [{
      title: '姓名',
      key: 'name'
    }, {
      title: '基本信息',
      children: [{
        title: '年龄',
        key: 'age',
        sorter: true,
      }, {
        title: '住址',
        key: 'address'
      }]
    }, {
      title: '操作',
      key: 'action',
      render: () => [
        h(NtButton, { type: 'text' }, { default: () => '编辑'}),
        h(NtButton, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  <\/script>
  <template>
    <nt-table :data="dataSource1" :columns="columns4" border></nt-table>
  </template>
  `,-1),de=_('<h3 id="合并单元格" tabindex="-1">合并单元格 <a class="header-anchor" href="#合并单元格" aria-label="Permalink to &quot;合并单元格&quot;">​</a></h3><p>通过配置 <code>columns</code> 中的 <code>colspan</code>、<code>rowspan</code> 来实现合并单元格；当 <code>colspan</code> 或者 <code>rowspan</code> 为 <code>0</code> 时，则不显示当前单元格</p>',2),ae=e("textarea",{lang:"vue-html"},`
  <template>
    <nt-table :data="dataSource3" :columns="columns5" border></nt-table>
  </template>
  `,-1),ne=e("h3",{id:"可编辑表格",tabindex:"-1"},[a("可编辑表格 "),e("a",{class:"header-anchor",href:"#可编辑表格","aria-label":'Permalink to "可编辑表格"'},"​")],-1),oe=e("p",null,"通过自定义渲染的形式能够快速实现单元格的编辑",-1),le=e("textarea",{lang:"vue"},`
  <script setup>
    const dataSource4 = ref([
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
    ])
    const columns6 = [{
      title: '姓名',
      key: 'name',
    }, {
      title: '年龄',
      key: 'age',
      render: (row, index) => {
        return h(Input, {
          modelValue: row.age,
          htmlType: 'number',
          'onUpdate:modelValue': (value) => {
            const newData = [...dataSource4.value]
            newData[index].age = value
            dataSource4.value = newData
          }
        })
      }
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
  <\/script>
  <template>
    <nt-table :data="dataSource4" :columns="columns6" border></nt-table>
  </template>
  `,-1),re=e("hr",null,null,-1),ce=e("h3",{id:"可选择-单选",tabindex:"-1"},[a("可选择(单选) "),e("a",{class:"header-anchor",href:"#可选择-单选","aria-label":'Permalink to "可选择(单选)"'},"​")],-1),se=e("textarea",{lang:"vue-html"},`
  <script setup>
  <\/script>
  <template>
    <hr />
  </template>
  `,-1),ie=e("h3",{id:"可选择-多选",tabindex:"-1"},[a("可选择(多选) "),e("a",{class:"header-anchor",href:"#可选择-多选","aria-label":'Permalink to "可选择(多选)"'},"​")],-1),ue=e("textarea",{lang:"vue-html"},`
  <script setup>
  <\/script>
  <template>
    <hr />
  </template>
  `,-1),he=_('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="table-props" tabindex="-1">Table Props <a class="header-anchor" href="#table-props" aria-label="Permalink to &quot;Table Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>data</code></td><td>数据源</td><td><code>array</code></td><td>-</td></tr><tr><td><code>columns</code></td><td>表格列配置</td><td><code>ColumnOption[]</code></td><td>-</td></tr><tr><td><code>default-sort</code></td><td>初始排序</td><td><code>SortOption</code></td><td>-</td></tr><tr><td><code>stripe</code></td><td>是否为斑马纹</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>border</code></td><td>是否显示四周边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>fixed-head</code></td><td>是否固定表头</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>sorter</code></td><td>使用手动排序</td><td><code>(data: any[]) =&gt; any[]</code></td><td>-</td></tr><tr><td><code>render-summary</code></td><td>渲染表尾合计行</td><td><code>() =&gt; VNode | VNode[]</code></td><td>-</td></tr><tr><td><code>table-layout</code></td><td>表格的 <code>table-layout</code> 样式属性</td><td><code>fixed</code>、<code>auto</code></td><td><code>auto</code></td></tr></tbody></table><p><code>ColumnOption</code> 选项:</p><table tabindex="0"><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>列名</td><td><code>string</code></td><td>-</td></tr><tr><td><code>key</code></td><td>列标识, 自动排序时必传</td><td><code>string</code></td><td>-</td></tr><tr><td><code>width</code></td><td>列宽</td><td><code>string</code>、<code>number</code></td><td>-</td></tr><tr><td><code>fixed</code></td><td>列是否固定</td><td><code>left</code>、<code>right</code></td><td>-</td></tr><tr><td><code>sorter</code></td><td>是否排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>render</code></td><td>自定义渲染</td><td><code>(row: any, index: number) =&gt; VNode | VNode[]</code></td><td>-</td></tr><tr><td><code>titleRowspan</code></td><td>表头的行所占的行数</td><td><code>number</code></td><td>-</td></tr><tr><td><code>titleColspan</code></td><td>表头的单元格所占的列数</td><td><code>number</code></td><td>-</td></tr><tr><td><code>rowspan</code></td><td>单元格的 <code>rowspan</code></td><td><code>number</code> | <code>(rowData: any, rowIndex: number) =&gt; number</code></td><td>-</td></tr><tr><td><code>colspan</code></td><td>单元格的 <code>colspan</code></td><td><code>number</code> | <code>(rowData: any, rowIndex: number) =&gt; number</code></td><td>-</td></tr></tbody></table><p><code>SortOption</code> 选项</p><table tabindex="0"><thead><tr><th>字段</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>key</code></td><td>列标识, 自动排序时必传</td><td><code>string</code></td></tr><tr><td><code>order</code></td><td>排序方式</td><td><code>asc</code> - 升序、<code>desc</code> - 降序</td></tr></tbody></table>',7),fe=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1717725198000}'),me={name:"components/table.md"},ye=Object.assign(me,{setup(_e){const h=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],x=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],k=[{name:"李四",age:19,address:"北京朝阳"},{name:"李四",age:19,address:"北京西城"},{name:"王五",age:18,address:"北京朝阳"},{name:"张三",age:20,address:"北京朝阳"}],m=A([{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}]),p=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],w=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],b=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],S=[{title:"姓名",key:"name"},{title:"基本信息",children:[{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],v=[{title:"姓名",key:"name",colspan:(l,r)=>r===2?2:1,rowspan:(l,r)=>r===0?2:r===1?0:1},{title:"基本信息",children:[{title:"年龄",key:"age",colspan:(l,r)=>r===2?0:1,rowspan:(l,r)=>r===0?2:r===1?0:1},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],T=[{title:"姓名",key:"name"},{title:"年龄",key:"age",render:(l,r)=>n(N,{modelValue:l.age,htmlType:"number","onUpdate:modelValue":c=>{const o=[...m.value];o[r].age=c,m.value=o}})},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],P=[{type:"radio",disabled:l=>l.name==="张三"},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"}],C=[{type:"checkbox"},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"}],V={key:"age",order:"desc"};function q(){return n("tr",[n("td","合计"),n("td",{colspan:"3"},h.reduce((l,r)=>l+r.age,0))])}function f(l){return l.name}function y(l){console.log(l)}return(l,r)=>{const c=g("CodePreview"),o=g("ClientOnly");return B(),D("div",null,[O,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:h,columns:p})]),default:d(()=>[E]),_:1})]),_:1}),R,U,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:h,columns:p,stripe:!1})]),default:d(()=>[$]),_:1})]),_:1}),j,J,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:h,columns:p,border:""})]),default:d(()=>[z]),_:1})]),_:1}),K,F,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:[],columns:p})]),default:d(()=>[G]),_:1})]),_:1}),H,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:x,columns:w,"table-layout":"fixed","fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:d(()=>[L]),_:1})]),_:1}),M,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:h,columns:b,"default-sort":V})]),default:d(()=>[Q]),_:1})]),_:1}),W,X,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:h,columns:b,"render-summary":q})]),default:d(()=>[Y]),_:1})]),_:1}),Z,ee,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:h,columns:S,border:""})]),default:d(()=>[te]),_:1})]),_:1}),de,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:k,columns:v,border:""})]),default:d(()=>[ae]),_:1})]),_:1}),ne,oe,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:m.value,columns:T,border:""},null,8,["data"]),re,e("div",null,I(JSON.stringify(m.value,null,2)),1)]),default:d(()=>[le]),_:1})]),_:1}),ce,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:m.value,columns:P,"row-key":f,onSelectChange:y},null,8,["data"])]),default:d(()=>[se]),_:1})]),_:1}),ie,t(o,null,{default:d(()=>[t(c,null,{preview:d(()=>[t(u(s),{data:m.value,columns:C,"row-key":f,onSelectChange:y},null,8,["data"])]),default:d(()=>[ue]),_:1})]),_:1}),he])}}});export{fe as __pageData,ye as default};
