import{e as b,o as d,c as o,g as e,w as s,b as a,l as p,ae as h,J as t,X as g,T as k,j as u}from"./chunks/framework.-x160Rg7.js";import{f as r,_,K as E}from"./chunks/theme.CubdvXnq.js";const y=h("",7),v=a("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-opacity">
<p v-if="show">Hello world</p>
</Transition>
`,-1),f={key:0,class:"ml-10"},C=a("h4",{id:"_1-2-2-nt-fadein",tabindex:"-1"},[t("1.2.2 "),a("code",null,"nt-fadein"),t(),a("a",{class:"header-anchor",href:"#_1-2-2-nt-fadein","aria-label":'Permalink to "1.2.2 `nt-fadein`"'},"​")],-1),x=a("p",null,[t("从顶部往下移动渐变的进入/退出; 支持通过 "),a("code",null,"--nt-fadein-offset"),t(" 控制距离, 默认为 "),a("code",null,"-20px")],-1),T=a("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-fadein">
<p v-if="show">Hello world</p>
</Transition>
<Transition name="nt-fadein">
<p v-if="show" style="--nt-fadein-offset:-50px;">Hello world</p>
</Transition>
`,-1),q={key:0,class:"inline ml-10"},F={key:0,class:"inline ml-10",style:{"--nt-fadein-offset":"-50px"}},w=h("",15),P={class:"icon-list mt-15"},A={class:"icon-item center"},S=a("span",{class:"icon-name"},"rotate",-1),B=h("",6),D=a("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),V=a("h4",{id:"更改滚动条颜色以及大小",tabindex:"-1"},[t("更改滚动条颜色以及大小 "),a("a",{class:"header-anchor",href:"#更改滚动条颜色以及大小","aria-label":'Permalink to "更改滚动条颜色以及大小"'},"​")],-1),N=a("p",null,[t("通过使用下面表格中的 "),a("code",null,"CSS"),t(" 变量，可以更改滚动条的颜色以及大小")],-1),I=a("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),H=h("",2),z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css-util.md","filePath":"css-util.md","lastUpdated":1721968438000}'),$={name:"css-util.md"},J=Object.assign($,{setup(O){const c=b(!0),i=b(!0);return(R,n)=>{const l=g("ClientOnly");return d(),o("div",null,[y,e(l,null,{default:s(()=>[e(r,{class:"mb-15"},{preview:s(()=>[e(p(_),{onClick:n[0]||(n[0]=m=>c.value=!c.value)},{default:s(()=>[t("Toggle")]),_:1}),e(k,{name:"nt-opacity"},{default:s(()=>[c.value?(d(),o("span",f,"Hello World")):u("",!0)]),_:1})]),default:s(()=>[v]),_:1})]),_:1}),C,x,e(l,null,{default:s(()=>[e(r,{class:"mb-15"},{preview:s(()=>[e(p(_),{onClick:n[1]||(n[1]=m=>i.value=!i.value)},{default:s(()=>[t("Toggle")]),_:1}),e(k,{name:"nt-fadein"},{default:s(()=>[i.value?(d(),o("div",q,"Hello World")):u("",!0)]),_:1}),e(k,{name:"nt-fadein"},{default:s(()=>[i.value?(d(),o("div",F,"Hello World")):u("",!0)]),_:1})]),default:s(()=>[T]),_:1})]),_:1}),w,a("div",P,[a("div",A,[e(p(E),{class:"nt-rotate-anim"}),S])]),B,e(l,null,{default:s(()=>[e(r,{class:"mb-15"},{default:s(()=>[D]),_:1})]),_:1}),V,N,e(l,null,{default:s(()=>[e(r,null,{default:s(()=>[I]),_:1})]),_:1}),H])}}});export{z as __pageData,J as default};
