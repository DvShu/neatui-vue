import{j as s,a as c,k as P}from"./chunks/theme.57tV-u6e.js";import{e as V,c as q,g as t,w as d,ab as h,b as e,x as a,R as f,o as C,y as i,t as N,h as n}from"./chunks/framework.kESMpjgr.js";const A=h("",5),D=e("textarea",{lang:"vue"},`
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
  `,-1),B=e("h3",{id:"斑马纹",tabindex:"-1"},[a("斑马纹 "),e("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1),I=e("p",null,[a("表格默认带斑马纹，可以通过设置 "),e("code",null,"stripe"),a(" 为 "),e("code",null,"false"),a(" 来取消斑马纹")],-1),O=e("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  `,-1),R=e("h3",{id:"边框",tabindex:"-1"},[a("边框 "),e("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1),E=e("p",null,[a("默认情况下，"),e("code",null,"Table"),a(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),e("code",null,"border"),a(" 属性，把该属性设置为 "),e("code",null,"true"),a(" 即可启用。")],-1),U=e("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  `,-1),$=e("h3",{id:"空表格",tabindex:"-1"},[a("空表格 "),e("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1),j=e("p",null,"数据列表没有数据时，显示空表格",-1),J=e("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  `,-1),z=h("",2),F=e("textarea",{lang:"vue"},`
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
  `,-1),G=h("",3),H=e("textarea",{lang:"vue"},`
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
  `,-1),K=e("h3",{id:"表尾合计行",tabindex:"-1"},[a("表尾合计行 "),e("a",{class:"header-anchor",href:"#表尾合计行","aria-label":'Permalink to "表尾合计行"'},"​")],-1),L=e("p",null,[a("设置 "),e("code",null,"renderSummary"),a(" 函数来渲染表尾合计行")],-1),M=e("textarea",{lang:"vue"},`
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
  `,-1),Q=e("h3",{id:"多级表头",tabindex:"-1"},[a("多级表头 "),e("a",{class:"header-anchor",href:"#多级表头","aria-label":'Permalink to "多级表头"'},"​")],-1),W=e("p",null,[a("配置 "),e("code",null,"columns"),a(" 的时候，给某一列增加一个 "),e("code",null,"children"),a(" 就能实现表头分组")],-1),X=e("textarea",{lang:"vue"},`
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
  `,-1),Y=h("",2),Z=e("textarea",{lang:"vue-html"},`
  <template>
    <nt-table :data="dataSource3" :columns="columns5" border></nt-table>
  </template>
  `,-1),ee=e("h3",{id:"可编辑表格",tabindex:"-1"},[a("可编辑表格 "),e("a",{class:"header-anchor",href:"#可编辑表格","aria-label":'Permalink to "可编辑表格"'},"​")],-1),te=e("p",null,"通过自定义渲染的形式能够快速实现单元格的编辑",-1),de=e("textarea",{lang:"vue"},`
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
  `,-1),ae=e("hr",null,null,-1),ne=h("",7),se=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1715939480000}'),oe={name:"components/table.md"},ie=Object.assign(oe,{setup(le){const m=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],y=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],g=[{name:"李四",age:19,address:"北京朝阳"},{name:"李四",age:19,address:"北京西城"},{name:"王五",age:18,address:"北京朝阳"},{name:"张三",age:20,address:"北京朝阳"}],_=V([{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}]),p=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(c,{type:"text"},{default:()=>"编辑"}),n(c,{type:"text"},{default:()=>"删除"})]}],x=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[n(c,{type:"text"},{default:()=>"编辑"}),n(c,{type:"text"},{default:()=>"删除"})]}],b=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(c,{type:"text"},{default:()=>"编辑"}),n(c,{type:"text"},{default:()=>"删除"})]}],k=[{title:"姓名",key:"name"},{title:"基本信息",children:[{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[n(c,{type:"text"},{default:()=>"编辑"}),n(c,{type:"text"},{default:()=>"删除"})]}],w=[{title:"姓名",key:"name",colspan:(u,o)=>o===2?2:1,rowspan:(u,o)=>o===0?2:o===1?0:1},{title:"基本信息",children:[{title:"年龄",key:"age",colspan:(u,o)=>o===2?0:1,rowspan:(u,o)=>o===0?2:o===1?0:1},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[n(c,{type:"text"},{default:()=>"编辑"}),n(c,{type:"text"},{default:()=>"删除"})]}],S=[{title:"姓名",key:"name"},{title:"年龄",key:"age",render:(u,o)=>n(P,{modelValue:u.age,htmlType:"number","onUpdate:modelValue":r=>{const l=[..._.value];l[o].age=r,_.value=l}})},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(c,{type:"text"},{default:()=>"编辑"}),n(c,{type:"text"},{default:()=>"删除"})]}],T={key:"age",order:"desc"};function v(){return n("tr",[n("td","合计"),n("td",{colspan:"3"},m.reduce((u,o)=>u+o.age,0))])}return(u,o)=>{const r=f("CodePreview"),l=f("ClientOnly");return C(),q("div",null,[A,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:m,columns:p})]),default:d(()=>[D]),_:1})]),_:1}),B,I,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:m,columns:p,stripe:!1})]),default:d(()=>[O]),_:1})]),_:1}),R,E,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:m,columns:p,border:""})]),default:d(()=>[U]),_:1})]),_:1}),$,j,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:[],columns:p})]),default:d(()=>[J]),_:1})]),_:1}),z,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:y,columns:x,"table-layout":"fixed","fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:d(()=>[F]),_:1})]),_:1}),G,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:m,columns:b,"default-sort":T})]),default:d(()=>[H]),_:1})]),_:1}),K,L,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:m,columns:b,"render-summary":v})]),default:d(()=>[M]),_:1})]),_:1}),Q,W,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:m,columns:k,border:""})]),default:d(()=>[X]),_:1})]),_:1}),Y,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:g,columns:w,border:""})]),default:d(()=>[Z]),_:1})]),_:1}),ee,te,t(l,null,{default:d(()=>[t(r,null,{preview:d(()=>[t(i(s),{data:_.value,columns:S,border:""},null,8,["data"]),ae,e("div",null,N(JSON.stringify(_.value,null,2)),1)]),default:d(()=>[de]),_:1})]),_:1}),ne])}}});export{se as __pageData,ie as default};
