import{e as p,c as l,l as a,w as t,ab as u,b as e,G as n,U as v,o as d,z as b,T as h,g as _}from"./chunks/framework.MCgil6G4.js";import{f as r,_ as f}from"./chunks/theme.BVjx0zTc.js";const k=u("",7),g=e("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-opacity">
<p v-if="show">Hello world</p>
</Transition>
`,-1),x={key:0,class:"ml-10"},T=e("h4",{id:"_1-2-2-nt-fadein",tabindex:"-1"},[n("1.2.2 "),e("code",null,"nt-fadein"),n(),e("a",{class:"header-anchor",href:"#_1-2-2-nt-fadein","aria-label":'Permalink to "1.2.2 `nt-fadein`"'},"​")],-1),y=e("p",null,[n("从顶部往下移动渐变的进入/退出; 支持通过 "),e("code",null,"--nt-fadein-offset"),n(" 控制距离, 默认为 "),e("code",null,"-20px")],-1),w=e("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-fadein">
<p v-if="show">Hello world</p>
</Transition>
<Transition name="nt-fadein">
<p v-if="show" style="--nt-fadein-offset:-50px;">Hello world</p>
</Transition>
`,-1),C={key:0,class:"inline ml-10"},P={key:0,class:"inline ml-10",style:{"--nt-fadein-offset":"-50px"}},q=u("",9),S=e("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),E=e("h4",{id:"更改滚动条颜色以及大小",tabindex:"-1"},[n("更改滚动条颜色以及大小 "),e("a",{class:"header-anchor",href:"#更改滚动条颜色以及大小","aria-label":'Permalink to "更改滚动条颜色以及大小"'},"​")],-1),V=e("p",null,[n("通过使用下面表格中的 "),e("code",null,"CSS"),n(" 变量，可以更改滚动条的颜色以及大小")],-1),A=e("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),N=u("",2),O=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css-util.md","filePath":"css-util.md","lastUpdated":1713346936000}'),F={name:"css-util.md"},$=Object.assign(F,{setup(B){const c=p(!0),s=p(!0);return(D,i)=>{const o=v("ClientOnly");return d(),l("div",null,[k,a(o,null,{default:t(()=>[a(r,{class:"mb-15"},{preview:t(()=>[a(b(f),{onClick:i[0]||(i[0]=m=>c.value=!c.value)},{default:t(()=>[n("Toggle")]),_:1}),a(h,{name:"nt-opacity"},{default:t(()=>[c.value?(d(),l("span",x,"Hello World")):_("",!0)]),_:1})]),default:t(()=>[g]),_:1})]),_:1}),T,y,a(o,null,{default:t(()=>[a(r,{class:"mb-15"},{preview:t(()=>[a(b(f),{onClick:i[1]||(i[1]=m=>s.value=!s.value)},{default:t(()=>[n("Toggle")]),_:1}),a(h,{name:"nt-fadein"},{default:t(()=>[s.value?(d(),l("div",C,"Hello World")):_("",!0)]),_:1}),a(h,{name:"nt-fadein"},{default:t(()=>[s.value?(d(),l("div",P,"Hello World")):_("",!0)]),_:1})]),default:t(()=>[w]),_:1})]),_:1}),q,a(o,null,{default:t(()=>[a(r,{class:"mb-15"},{default:t(()=>[S]),_:1})]),_:1}),E,V,a(o,null,{default:t(()=>[a(r,null,{default:t(()=>[A]),_:1})]),_:1}),N])}}});export{O as __pageData,$ as default};
