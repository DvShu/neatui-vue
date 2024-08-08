import{e as b,c as l,g as e,w as s,b as a,q as h,ae as k,M as t,Z as E,o,T as c,k as p}from"./chunks/framework.CqWuvRde.js";import{e as d,_ as m,Q as v}from"./chunks/theme.Ck1ydRZC.js";const f=k("",7),y=a("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-opacity">
<p v-if="show">Hello world</p>
</Transition>
`,-1),x={key:0,class:"ml-10"},C=a("h4",{id:"_1-2-2-nt-fadein",tabindex:"-1"},[t("1.2.2 "),a("code",null,"nt-fadein"),t(),a("a",{class:"header-anchor",href:"#_1-2-2-nt-fadein","aria-label":'Permalink to "1.2.2 `nt-fadein`"'},"​")],-1),T=a("p",null,[t("从顶部往下移动渐变的进入/退出; 支持通过 "),a("code",null,"--nt-fadein-offset"),t(" 控制距离, 默认为 "),a("code",null,"-20px")],-1),q=a("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-fadein">
<p v-if="show">Hello world</p>
</Transition>
<Transition name="nt-fadein">
<p v-if="show" style="--nt-fadein-offset:-50px;">Hello world</p>
</Transition>
`,-1),w={key:0,class:"inline ml-10"},F={key:0,class:"inline ml-10",style:{"--nt-fadein-offset":"-50px"}},P=a("h4",{id:"_1-2-3-nt-scale",tabindex:"-1"},[t("1.2.3 "),a("code",null,"nt-scale"),t(),a("a",{class:"header-anchor",href:"#_1-2-3-nt-scale","aria-label":'Permalink to "1.2.3 `nt-scale`"'},"​")],-1),A=a("p",null,"缩放进入/退出",-1),S=a("textarea",{lang:"vue-html"},`
  <nt-button @click="show = !show">Toggle</nt-button>
    <Transition name="nt-opacity">
  <p v-if="show">Hello world</p>
  </Transition>
  `,-1),B={key:0,class:"inline ml-10"},D=k("",15),V={class:"icon-list mt-15"},N={class:"icon-item center"},H=a("span",{class:"icon-name"},"rotate",-1),I=k("",6),$=a("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),O=a("h4",{id:"更改滚动条颜色以及大小",tabindex:"-1"},[t("更改滚动条颜色以及大小 "),a("a",{class:"header-anchor",href:"#更改滚动条颜色以及大小","aria-label":'Permalink to "更改滚动条颜色以及大小"'},"​")],-1),R=a("p",null,[t("通过使用下面表格中的 "),a("code",null,"CSS"),t(" 变量，可以更改滚动条的颜色以及大小")],-1),W=a("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),z=k("",2),Z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css-util.md","filePath":"css-util.md","lastUpdated":1722238137000}'),j={name:"css-util.md"},G=Object.assign(j,{setup(J){const u=b(!0),r=b(!0),_=b(!0);return(M,i)=>{const n=E("ClientOnly");return o(),l("div",null,[f,e(n,null,{default:s(()=>[e(d,{class:"mb-15"},{preview:s(()=>[e(h(m),{onClick:i[0]||(i[0]=g=>u.value=!u.value)},{default:s(()=>[t("Toggle")]),_:1}),e(c,{name:"nt-opacity"},{default:s(()=>[u.value?(o(),l("span",x,"Hello World")):p("",!0)]),_:1})]),default:s(()=>[y]),_:1})]),_:1}),C,T,e(n,null,{default:s(()=>[e(d,{class:"mb-15"},{preview:s(()=>[e(h(m),{onClick:i[1]||(i[1]=g=>r.value=!r.value)},{default:s(()=>[t("Toggle")]),_:1}),e(c,{name:"nt-fadein"},{default:s(()=>[r.value?(o(),l("div",w,"Hello World")):p("",!0)]),_:1}),e(c,{name:"nt-fadein"},{default:s(()=>[r.value?(o(),l("div",F,"Hello World")):p("",!0)]),_:1})]),default:s(()=>[q]),_:1})]),_:1}),P,A,e(n,null,{default:s(()=>[e(d,null,{preview:s(()=>[e(h(m),{onClick:i[2]||(i[2]=g=>_.value=!_.value)},{default:s(()=>[t("Toggle")]),_:1}),e(c,{name:"nt-scale",appear:""},{default:s(()=>[_.value?(o(),l("div",B,"Hello world")):p("",!0)]),_:1})]),default:s(()=>[S]),_:1})]),_:1}),D,a("div",V,[a("div",N,[e(h(v),{class:"nt-rotate-anim"}),H])]),I,e(n,null,{default:s(()=>[e(d,{class:"mb-15"},{default:s(()=>[$]),_:1})]),_:1}),O,R,e(n,null,{default:s(()=>[e(d,null,{default:s(()=>[W]),_:1})]),_:1}),z])}}});export{Z as __pageData,G as default};
