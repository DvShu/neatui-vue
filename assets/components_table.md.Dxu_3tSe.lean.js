import{a as i,f as l}from"./chunks/theme.DdF-0nox.js";import{P as b,c as k,f as e,w as d,ab as h,b as t,q as a,o as S,u as c,h as n}from"./chunks/framework.B2jEF4L8.js";const T=h("",5),w=t("textarea",{lang:"vue"},`
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
  `,-1),P=t("h3",{id:"斑马纹",tabindex:"-1"},[a("斑马纹 "),t("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1),v=t("p",null,[a("表格默认带斑马纹，可以通过设置 "),t("code",null,"stripe"),a(" 为 "),t("code",null,"false"),a(" 来取消斑马纹")],-1),q=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  `,-1),C=t("h3",{id:"边框",tabindex:"-1"},[a("边框 "),t("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1),V=t("p",null,[a("默认情况下，"),t("code",null,"Table"),a(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),t("code",null,"border"),a(" 属性，把该属性设置为 "),t("code",null,"true"),a(" 即可启用。")],-1),N=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  `,-1),A=t("h3",{id:"空表格",tabindex:"-1"},[a("空表格 "),t("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1),I=t("p",null,"数据列表没有数据时，显示空表格",-1),B=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  `,-1),O=h("",2),D=t("textarea",{lang:"vue"},`
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
  `,-1),E=h("",3),R=t("textarea",{lang:"vue"},`
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
  `,-1),$=t("h3",{id:"表尾合计行",tabindex:"-1"},[a("表尾合计行 "),t("a",{class:"header-anchor",href:"#表尾合计行","aria-label":'Permalink to "表尾合计行"'},"​")],-1),j=t("p",null,[a("设置 "),t("code",null,"renderSummary"),a(" 函数来渲染表尾合计行")],-1),J=t("textarea",{lang:"vue"},`
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
  `,-1),U=h("",7),K=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1715139459000}'),z={name:"components/table.md"},L=Object.assign(z,{setup(F){const s=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],f=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],u=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],y=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],m=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(i,{type:"text"},{default:()=>"编辑"}),n(i,{type:"text"},{default:()=>"删除"})]}],g={key:"age",order:"desc"};function x(){return n("tr",[n("td","合计"),n("td",{colspan:"3"},s.reduce((_,p)=>_+p.age,0))])}return(_,p)=>{const o=b("CodePreview"),r=b("ClientOnly");return S(),k("div",null,[T,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:s,columns:u})]),default:d(()=>[w]),_:1})]),_:1}),P,v,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:s,columns:u,stripe:!1})]),default:d(()=>[q]),_:1})]),_:1}),C,V,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:s,columns:u,border:""})]),default:d(()=>[N]),_:1})]),_:1}),A,I,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:[],columns:u})]),default:d(()=>[B]),_:1})]),_:1}),O,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:f,columns:y,"fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:d(()=>[D]),_:1})]),_:1}),E,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:s,columns:m,"default-sort":g})]),default:d(()=>[R]),_:1})]),_:1}),$,j,e(r,null,{default:d(()=>[e(o,null,{preview:d(()=>[e(c(l),{data:s,columns:m,"render-summary":x})]),default:d(()=>[J]),_:1})]),_:1}),U])}}});export{K as __pageData,L as default};
