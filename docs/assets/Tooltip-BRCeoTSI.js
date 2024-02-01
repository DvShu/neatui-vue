import{_ as c}from"./DocMain.vue_vue_type_style_index_0_lang-9_iec6-l.js";import{_ as d}from"./CodeExample.vue_vue_type_style_index_0_lang-zB453lkM.js";import{_ as p,a as _}from"./PcCodePreview.vue_vue_type_style_index_0_lang-ZVI9sERX.js";import{_ as u}from"./Button.vue_vue_type_script_setup_true_lang-WZuXnU9A.js";import{_ as b}from"./PropTable.vue_vue_type_script_setup_true_lang-b1oTUr2n.js";import{_ as f}from"./Table.vue_vue_type_script_lang-wCIBw4WQ.js";import{d as s,o as a,c as i,t as h,l as S,b as o,F as x,e as y,w as t,k as E,a as e}from"./index-TCyWjmXV.js";import"./SourceCode.vue_vue_type_style_index_0_lang-j4us699J.js";const $={key:0},k=s({__name:"SlotTable",props:{title:{default:"Props"},data:{}},setup(m){const l=[{key:"name",title:"名称"},{key:"param",title:"参数"},{key:"description",title:"说明"}];return(n,r)=>(a(),i(x,null,[n.title!=null&&n.title!==""?(a(),i("h3",$,h(n.title),1)):S("",!0),o(f,{columns:l,data:n.data},null,8,["data"])],64))}}),v=e("h1",null,"Tooltip 文字提示",-1),g=e("p",null,"常用于展示鼠标 hover 时的提示信息。",-1),T=e("p",null," 可用来代替系统默认的 title 提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明 ",-1),w=e("p",null,"该提示使用纯 CSS 实现，所以气泡框位置通常需要手动设置",-1),B=e("p",null," 使用 title 属性来决定 hover 时的提示信息。 由 placement 属性决定展示位置: topStart、top[默认]、topEnd、bottomStart、bottom、bottomEnd ",-1),C=e("p",null," 通过使用 title 插槽来渲染自定义的提示; 如果同时传递 title 和 插槽，则 title 属性为准 ",-1),N=e("span",{style:{color:"red"}},"custome propmt text",-1),V=e("h2",null,"API",-1),D=`
<div class="demo-row">
  <nt-tooltip placement="topStart" title="prompt text"><nt-button>topStart</nt-button></nt-tooltip>
  <nt-tooltip placement="top" title="prompt text"><nt-button>top</nt-button></nt-tooltip>
  <nt-tooltip placement="topEnd" title="prompt text"><nt-button>topEnd</nt-button></nt-tooltip>
</div>
<div class="demo-row mt-10">
  <nt-tooltip placement="bottomStart" title="prompt text"><nt-button>bottomStart</nt-button></nt-tooltip>
  <nt-tooltip placement="bottom" title="prompt text"><nt-button>bottom</nt-button></nt-tooltip>
  <nt-tooltip placement="bottomEnd" title="prompt text"><nt-button>bottomEnd</nt-button></nt-tooltip>
</div>
`,P=`
<nt-tooltip>
  <nt-button>自定义提示</nt-button>
  <template v-slot:title>
    <span style="color: red;">custome propmt text</span>
  </template>
</nt-tooltip>
`,K=s({__name:"Tooltip",setup(m){const l=[{name:"title",description:"提示信息",type:"string",default:""},{name:"placement",description:"气泡位置, top、bottom、topStart、topEnd、bottomStart、bottomEnd",type:"string",default:"top"}],n=[{name:"title",param:"()",description:"自定义提示内容"}];return(r,F)=>(a(),y(c,null,{default:t(()=>[v,g,T,w,o(d,null,{default:t(()=>[o(p,{lang:"html",code:D,title:"基础用法",class:"tooltip-demo"},{description:t(()=>[B]),_:1}),o(p,{lang:"html",code:P,title:"自定义提示",class:"tooltip-demo"},{description:t(()=>[C]),preview:t(()=>[o(_,{placement:"topStart"},{title:t(()=>[N]),default:t(()=>[o(u,null,{default:t(()=>[E("自定义提示")]),_:1})]),_:1})]),_:1})]),_:1}),V,o(b,{data:l,title:"Tooltip Props"}),o(k,{data:n,title:"Tooltip Slots"})]),_:1}))}});export{K as default};
