import{R as o,_ as r,l as v}from"./chunks/theme.W1bS7NXL.js";import{e as q,c as C,j as e,w as a,af as k,b as t,N as s,$ as y,o as T,s as h,t as A,l as n}from"./chunks/framework.Dl8nlkpL.js";const D=k("",6),B=t("textarea",{lang:"vue"},`
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
  `,-1),P=t("h3",{id:"斑马纹",tabindex:"-1"},[s("斑马纹 "),t("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1),V=t("p",null,[s("表格默认带斑马纹，可以通过设置 "),t("code",null,"stripe"),s(" 为 "),t("code",null,"false"),s(" 来取消斑马纹")],-1),N=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  `,-1),I=t("h3",{id:"边框",tabindex:"-1"},[s("边框 "),t("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1),O=t("p",null,[s("默认情况下，"),t("code",null,"Table"),s(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),t("code",null,"border"),s(" 属性，把该属性设置为 "),t("code",null,"true"),s(" 即可启用。")],-1),R=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  `,-1),$=t("h3",{id:"空表格",tabindex:"-1"},[s("空表格 "),t("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1),U=t("p",null,"数据列表没有数据时，显示空表格",-1),j=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  `,-1),J=k("",2),z=t("textarea",{lang:"vue"},`
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
  `,-1),G=k("",3),H=t("textarea",{lang:"vue"},`
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
  `,-1),K=t("h3",{id:"表尾合计行",tabindex:"-1"},[s("表尾合计行 "),t("a",{class:"header-anchor",href:"#表尾合计行","aria-label":'Permalink to "表尾合计行"'},"​")],-1),L=t("p",null,[s("设置 "),t("code",null,"renderSummary"),s(" 函数来渲染表尾合计行")],-1),M=t("textarea",{lang:"vue"},`
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
  `,-1),Q=t("h3",{id:"多级表头",tabindex:"-1"},[s("多级表头 "),t("a",{class:"header-anchor",href:"#多级表头","aria-label":'Permalink to "多级表头"'},"​")],-1),W=t("p",null,[s("配置 "),t("code",null,"columns"),s(" 的时候，给某一列增加一个 "),t("code",null,"children"),s(" 就能实现表头分组")],-1),X=t("textarea",{lang:"vue"},`
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
  `,-1),Y=k("",2),Z=t("textarea",{lang:"vue-html"},`
  <template>
    <nt-table :data="dataSource3" :columns="columns5" border></nt-table>
  </template>
  `,-1),tt=t("h3",{id:"可编辑表格",tabindex:"-1"},[s("可编辑表格 "),t("a",{class:"header-anchor",href:"#可编辑表格","aria-label":'Permalink to "可编辑表格"'},"​")],-1),et=t("p",null,"通过自定义渲染的形式能够快速实现单元格的编辑",-1),at=t("textarea",{lang:"vue"},`
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
  `,-1),st=t("hr",null,null,-1),nt=k("",12),ot=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1723522365000}'),dt={name:"components/table.md"},ht=Object.assign(dt,{setup(it){const p=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],g=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],b=[{name:"李四",age:19,address:"北京朝阳"},{name:"李四",age:19,address:"北京西城"},{name:"王五",age:18,address:"北京朝阳"},{name:"张三",age:20,address:"北京朝阳"}],u=q([{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}]),E=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(r,{type:"primary",text:!0},{default:()=>"编辑"}),n(r,{type:"primary",text:!0},{default:()=>"删除"})]}],_=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[n(r,{type:"primary",text:!0},{default:()=>"编辑"}),n(r,{type:"primary",text:!0},{default:()=>"删除"})]}],m=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(r,{type:"primary",text:!0},{default:()=>"编辑"}),n(r,{type:"primary",text:!0},{default:()=>"删除"})]}],f=[{title:"姓名",key:"name"},{title:"基本信息",children:[{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[n(r,{type:"primary",text:!0},{default:()=>"编辑"}),n(r,{type:"primary",text:!0},{default:()=>"删除"})]}],x=[{title:"姓名",key:"name",colspan:(c,d)=>d===2?2:1,rowspan:(c,d)=>d===0?2:d===1?0:1},{title:"基本信息",children:[{title:"年龄",key:"age",colspan:(c,d)=>d===2?0:1,rowspan:(c,d)=>d===0?2:d===1?0:1},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[n(r,{type:"primary",text:!0},{default:()=>"编辑"}),n(r,{type:"primary",text:!0},{default:()=>"删除"})]}],F=[{title:"姓名",key:"name"},{title:"年龄",key:"age",render:(c,d)=>n(v,{modelValue:c.age,htmlType:"number","onUpdate:modelValue":l=>{const i=[...u.value];i[d].age=l,u.value=i}})},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[n(r,{type:"primary",text:!0},{default:()=>"编辑"}),n(r,{type:"primary",text:!0},{default:()=>"删除"})]}],w={key:"age",order:"desc"};function S(){return n("tr",[n("td","合计"),n("td",{colspan:"3"},p.reduce((c,d)=>c+d.age,0))])}return(c,d)=>{const l=y("CodePreview"),i=y("ClientOnly");return T(),C("div",null,[D,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:p,columns:E})]),default:a(()=>[B]),_:1})]),_:1}),P,V,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:p,columns:E,stripe:!1})]),default:a(()=>[N]),_:1})]),_:1}),I,O,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:p,columns:E,border:""})]),default:a(()=>[R]),_:1})]),_:1}),$,U,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:[],columns:E})]),default:a(()=>[j]),_:1})]),_:1}),J,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:g,columns:_,"fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:a(()=>[z]),_:1})]),_:1}),G,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:p,columns:m,"default-sort":w})]),default:a(()=>[H]),_:1})]),_:1}),K,L,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:p,columns:m,"render-summary":S})]),default:a(()=>[M]),_:1})]),_:1}),Q,W,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:p,columns:f,border:""})]),default:a(()=>[X]),_:1})]),_:1}),Y,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:b,columns:x,border:""})]),default:a(()=>[Z]),_:1})]),_:1}),tt,et,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(h(o),{data:u.value,columns:F,border:""},null,8,["data"]),st,t("div",null,A(JSON.stringify(u.value,null,2)),1)]),default:a(()=>[at]),_:1})]),_:1}),nt])}}});export{ot as __pageData,ht as default};
