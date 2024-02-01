import{d as g,p as r,o as i,e as w,w as o,b as t,k as c,T as d,c as _,l as p,a as e}from"./index-TCyWjmXV.js";import{_ as s}from"./SourceCode.vue_vue_type_style_index_0_lang-j4us699J.js";import{_ as u}from"./ThemeTable.vue_vue_type_script_setup_true_lang-KRExZVNO.js";import{_ as m}from"./PcCodePreview.vue_vue_type_style_index_0_lang-ZVI9sERX.js";import{_ as f}from"./Button.vue_vue_type_script_setup_true_lang-WZuXnU9A.js";import{_ as x}from"./DocMain.vue_vue_type_style_index_0_lang-9_iec6-l.js";import{_ as T}from"./CodeExample.vue_vue_type_style_index_0_lang-zB453lkM.js";import"./Table.vue_vue_type_script_lang-wCIBw4WQ.js";const y=e("h2",null,"1. Vue3 Transition 渐变",-1),k=e("h3",null,"引入渐变样式",-1),$=e("h3",null,"渐变使用",-1),C=e("p",null,"所有的渐变都支持传递 --nt-transition-times 控制时长, 默认为 0.3s",-1),V=e("span",null," 普通渐变进入/退出 ",-1),B={key:0,style:{"--nt-transition-times":"0.2s"}},N=e("span",null," 从顶部往下移动渐变的进入/退出; 支持通过 --nt-fadein-offset 控制距离, 默认为 20px ",-1),H={key:0,style:{"--nt-fadein-offset":"-30px"}},z=e("h2",null,"2. 滚动条样式",-1),E=e("p",null,"如果觉得默认滚动条不好看，想修改滚动条样式",-1),F=e("h3",null,"引入滚动条样式表",-1),O=e("h3",null,"滚动条使用",-1),j=e("p",null," 实际效果就跟文档的滚动条一样; 默认为垂直滚动条，如果想设置水平滚动条，只需要再加一个 nt-scrollbar-x ",-1),q=`
<Transition name="nt-opacity">
  <p v-if="show">hello</p>
</Transition>
`,A=`
<Transition name="nt-fadein">
  <p v-if="show">hello</p>
</Transition>
`,D=`
<div class="nt-scrollbar">
  <p v-if="show">hello</p>
</div>
`,G=`
<div class="nt-scrollbar nt-scrollbar-x">
  <p v-if="show">hello</p>
</div>
`,W=g({__name:"css_util",setup(I){const l=r(!0),a=r(!0),h=[{name:"--nt-transition-times",description:"渐变时长, 所有渐变都支持",default:"0.3s"},{name:"--nt-fadein-offset",description:"渐变距离, 支持的渐变有: fadein",default:"20px"}],v=[{name:"--nt-scrollbar-bg",description:"滑块背景色",default:"#ccc"},{name:"--nt-scrollbar-hover",description:"鼠标悬浮时滑块颜色",default:"var(--nt-scrollbar-bg)"},{name:" --nt-scrollbar-size",description:"滑块尺寸, 水平滚动条时为高度，垂直时为宽度",default:"10px"}];return(J,n)=>(i(),w(x,null,{default:o(()=>[y,k,t(s,{code:"import 'neatui-vue/style/util/transition.css'"}),$,C,t(T,null,{default:o(()=>[t(m,{lang:"html",code:q,title:"Opacity"},{description:o(()=>[V]),preview:o(()=>[t(f,{onClick:n[0]||(n[0]=b=>l.value=!l.value)},{default:o(()=>[c("Toggle")]),_:1}),t(d,{name:"nt-opacity",appear:""},{default:o(()=>[l.value?(i(),_("p",B," Hello world ")):p("",!0)]),_:1})]),_:1}),t(m,{lang:"html",code:A,title:"Fadein"},{description:o(()=>[N]),preview:o(()=>[t(f,{onClick:n[1]||(n[1]=b=>a.value=!a.value)},{default:o(()=>[c("Toggle")]),_:1}),t(d,{name:"nt-fadein",appear:""},{default:o(()=>[a.value?(i(),_("p",H,"Hello world")):p("",!0)]),_:1})]),_:1})]),_:1}),t(u,{rows:h,title:null,subtitle:"样式变量"}),z,E,F,t(s,{code:"import 'neatui-vue/style/util/scrollbar.css'"}),O,t(s,{lang:"html",code:D}),j,t(s,{lang:"html",code:G}),t(u,{rows:v,title:null,subtitle:"主题定制 - 样式变量"})]),_:1}))}});export{W as default};
