import{K as r,_ as h,l as A}from"./chunks/theme.Ck1ydRZC.js";import{e as D,c as B,g as e,w as a,ae as u,b as t,M as n,Z as b,o as P,q as c,t as V,i as s}from"./chunks/framework.CqWuvRde.js";const N=u("",6),I=t("textarea",{lang:"vue"},`
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
  `,-1),O=t("h3",{id:"斑马纹",tabindex:"-1"},[n("斑马纹 "),t("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1),R=t("p",null,[n("表格默认带斑马纹，可以通过设置 "),t("code",null,"stripe"),n(" 为 "),t("code",null,"false"),n(" 来取消斑马纹")],-1),U=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" :stripe="false"></nt-table>
  </template>
  `,-1),$=t("h3",{id:"边框",tabindex:"-1"},[n("边框 "),t("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1),J=t("p",null,[n("默认情况下，"),t("code",null,"Table"),n(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),t("code",null,"border"),n(" 属性，把该属性设置为 "),t("code",null,"true"),n(" 即可启用。")],-1),K=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="dataSource" :columns="columns" border></nt-table>
  </template>
  `,-1),j=t("h3",{id:"空表格",tabindex:"-1"},[n("空表格 "),t("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1),M=t("p",null,"数据列表没有数据时，显示空表格",-1),Z=t("textarea",{lang:"vue"},`
  <template>
    <nt-table :data="[]" :columns="columns"></nt-table>
  </template>
  `,-1),z=u("",2),G=t("textarea",{lang:"vue"},`
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
  `,-1),H=u("",3),L=t("textarea",{lang:"vue"},`
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
  `,-1),Q=t("h3",{id:"表尾合计行",tabindex:"-1"},[n("表尾合计行 "),t("a",{class:"header-anchor",href:"#表尾合计行","aria-label":'Permalink to "表尾合计行"'},"​")],-1),W=t("p",null,[n("设置 "),t("code",null,"renderSummary"),n(" 函数来渲染表尾合计行")],-1),X=t("textarea",{lang:"vue"},`
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
  `,-1),Y=t("h3",{id:"多级表头",tabindex:"-1"},[n("多级表头 "),t("a",{class:"header-anchor",href:"#多级表头","aria-label":'Permalink to "多级表头"'},"​")],-1),tt=t("p",null,[n("配置 "),t("code",null,"columns"),n(" 的时候，给某一列增加一个 "),t("code",null,"children"),n(" 就能实现表头分组")],-1),et=t("textarea",{lang:"vue"},`
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
  `,-1),at=u("",2),nt=t("textarea",{lang:"vue-html"},`
  <template>
    <nt-table :data="dataSource3" :columns="columns5" border></nt-table>
  </template>
  `,-1),st=t("h3",{id:"可编辑表格",tabindex:"-1"},[n("可编辑表格 "),t("a",{class:"header-anchor",href:"#可编辑表格","aria-label":'Permalink to "可编辑表格"'},"​")],-1),dt=t("p",null,"通过自定义渲染的形式能够快速实现单元格的编辑",-1),it=t("textarea",{lang:"vue"},`
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
  `,-1),lt=t("hr",null,null,-1),ot=t("h3",{id:"可选择-单选",tabindex:"-1"},[n("可选择(单选) "),t("a",{class:"header-anchor",href:"#可选择-单选","aria-label":'Permalink to "可选择(单选)"'},"​")],-1),rt=t("textarea",{lang:"vue-html"},`
  <script setup>
  <\/script>
  <template>
    <hr />
  </template>
  `,-1),ht=t("h3",{id:"可选择-多选",tabindex:"-1"},[n("可选择(多选) "),t("a",{class:"header-anchor",href:"#可选择-多选","aria-label":'Permalink to "可选择(多选)"'},"​")],-1),ct=t("textarea",{lang:"vue-html"},`
  <script setup>
  <\/script>
  <template>
    <hr />
  </template>
  `,-1),pt=u("",12),gt=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1723109016000}'),kt={name:"components/table.md"},yt=Object.assign(kt,{setup(ut){const p=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],_=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],f=[{name:"李四",age:19,address:"北京朝阳"},{name:"李四",age:19,address:"北京西城"},{name:"王五",age:18,address:"北京朝阳"},{name:"张三",age:20,address:"北京朝阳"}],k=D([{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}]),E=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(h,{type:"text"},{default:()=>"编辑"}),s(h,{type:"text"},{default:()=>"删除"})]}],x=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[s(h,{type:"text"},{default:()=>"编辑"}),s(h,{type:"text"},{default:()=>"删除"})]}],m=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(h,{type:"text"},{default:()=>"编辑"}),s(h,{type:"text"},{default:()=>"删除"})]}],w=[{title:"姓名",key:"name"},{title:"基本信息",children:[{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[s(h,{type:"text"},{default:()=>"编辑"}),s(h,{type:"text"},{default:()=>"删除"})]}],F=[{title:"姓名",key:"name",colspan:(i,l)=>l===2?2:1,rowspan:(i,l)=>l===0?2:l===1?0:1},{title:"基本信息",children:[{title:"年龄",key:"age",colspan:(i,l)=>l===2?0:1,rowspan:(i,l)=>l===0?2:l===1?0:1},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[s(h,{type:"text"},{default:()=>"编辑"}),s(h,{type:"text"},{default:()=>"删除"})]}],v=[{title:"姓名",key:"name"},{title:"年龄",key:"age",render:(i,l)=>s(A,{modelValue:i.age,htmlType:"number","onUpdate:modelValue":o=>{const d=[...k.value];d[l].age=o,k.value=d}})},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[s(h,{type:"text"},{default:()=>"编辑"}),s(h,{type:"text"},{default:()=>"删除"})]}],S=[{type:"radio",disabled:i=>i.name==="张三"},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"}],C=[{type:"checkbox"},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"}],q={key:"age",order:"desc"};function T(){return s("tr",[s("td","合计"),s("td",{colspan:"3"},p.reduce((i,l)=>i+l.age,0))])}function g(i){return i.name}function y(i){console.log(i)}return(i,l)=>{const o=b("CodePreview"),d=b("ClientOnly");return P(),B("div",null,[N,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:p,columns:E})]),default:a(()=>[I]),_:1})]),_:1}),O,R,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:p,columns:E,stripe:!1})]),default:a(()=>[U]),_:1})]),_:1}),$,J,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:p,columns:E,border:""})]),default:a(()=>[K]),_:1})]),_:1}),j,M,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:[],columns:E})]),default:a(()=>[Z]),_:1})]),_:1}),z,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:_,columns:x,"table-layout":"fixed","fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:a(()=>[G]),_:1})]),_:1}),H,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:p,columns:m,"default-sort":q})]),default:a(()=>[L]),_:1})]),_:1}),Q,W,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:p,columns:m,"render-summary":T})]),default:a(()=>[X]),_:1})]),_:1}),Y,tt,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:p,columns:w,border:""})]),default:a(()=>[et]),_:1})]),_:1}),at,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:f,columns:F,border:""})]),default:a(()=>[nt]),_:1})]),_:1}),st,dt,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:k.value,columns:v,border:""},null,8,["data"]),lt,t("div",null,V(JSON.stringify(k.value,null,2)),1)]),default:a(()=>[it]),_:1})]),_:1}),ot,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:k.value,columns:S,"row-key":g,onSelectChange:y},null,8,["data"])]),default:a(()=>[rt]),_:1})]),_:1}),ht,e(d,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(c(r),{data:k.value,columns:C,"row-key":g,onSelectChange:y},null,8,["data"])]),default:a(()=>[ct]),_:1})]),_:1}),pt])}}});export{gt as __pageData,yt as default};
