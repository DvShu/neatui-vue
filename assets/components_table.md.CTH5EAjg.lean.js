import{a as l,f as r}from"./chunks/theme.JvRmGtQ2.js";import{P as m,c as x,f as e,w as d,ab as u,b as t,q as a,o as y,u as c,h as s}from"./chunks/framework.B2jEF4L8.js";const g=u("",5),k=t("textarea",{lang:"vue"},`
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
  `,-1),O=u("",3),E=t("textarea",{lang:"vue"},`
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
  `,-1),D=u("",8),F=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1715067177000}'),R={name:"components/table.md"},G=Object.assign(R,{setup($){const i=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],_=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],h=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(l,{type:"text"},{default:()=>"编辑"}),s(l,{type:"text"},{default:()=>"删除"})]}],p=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[s(l,{type:"text"},{default:()=>"编辑"}),s(l,{type:"text"},{default:()=>"删除"})]}],b=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(l,{type:"text"},{default:()=>"编辑"}),s(l,{type:"text"},{default:()=>"删除"})]}],f={key:"age",order:"desc"};return(j,J)=>{const n=m("CodePreview"),o=m("ClientOnly");return y(),x("div",null,[g,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:h})]),default:d(()=>[k]),_:1})]),_:1}),w,T,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:h,stripe:!1})]),default:d(()=>[P]),_:1})]),_:1}),S,v,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:h,border:""})]),default:d(()=>[q]),_:1})]),_:1}),C,N,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:[],columns:h})]),default:d(()=>[V]),_:1})]),_:1}),A,B,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:_,columns:p,"fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:d(()=>[I]),_:1})]),_:1}),O,e(o,null,{default:d(()=>[e(n,null,{preview:d(()=>[e(c(r),{data:i,columns:b,"default-sort":f})]),default:d(()=>[E]),_:1})]),_:1}),D])}}});export{F as __pageData,G as default};
