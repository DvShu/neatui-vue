import{c as r,d as i}from"./chunks/theme.BNci8pmS.js";import{e as p,c as u,g as l,w as t,ae as m,b as e,M as a,Z as h,o as v,q as o}from"./chunks/framework.CqWuvRde.js";const b=m('<h1 id="collapase-折叠面板" tabindex="-1">Collapase 折叠面板 <a class="header-anchor" href="#collapase-折叠面板" aria-label="Permalink to &quot;Collapase 折叠面板&quot;">​</a></h1><p>折叠/展开的内容区域; 通常用于后台系统的首页边栏的控制面板上</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>可以同时展开多个面板，面板之间不影响</p>',5),f=e("textarea",{lang:"vue-html"},`
  <nt-collapse>
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),g=e("h3",{id:"手动展开",tabindex:"-1"},[a("手动展开 "),e("a",{class:"header-anchor",href:"#手动展开","aria-label":'Permalink to "手动展开"'},"​")],-1),x=e("p",null,[a("通过传递 "),e("code",null,"v-model"),a(" 来设置展开的面板。")],-1),P=e("textarea",{lang:"vue-html"},`
  <nt-collapse v-model='active1' arrow-placement="right">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),k=e("div",null,"红灯 - 停",-1),w=e("div",null,"绿灯 - 行",-1),C=e("div",null,"黄灯 - 注意",-1),q=e("h3",{id:"手风琴效果",tabindex:"-1"},[a("手风琴效果 "),e("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1),y=e("p",null,[a("手风琴模式，始终只有一个面板处在激活状态。通过 "),e("code",null,"accordion"),a(" 属性来设置是否以手风琴模式显示。")],-1),T=e("textarea",{lang:"vue-html"},`
  <nt-collapse :default-expanded-names='["1"]'>
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),V=e("div",null,"红灯 - 停",-1),j=e("div",null,"绿灯 - 行",-1),A=e("div",null,"黄灯 - 提示",-1),I=e("h3",{id:"箭头位置",tabindex:"-1"},[a("箭头位置 "),e("a",{class:"header-anchor",href:"#箭头位置","aria-label":'Permalink to "箭头位置"'},"​")],-1),N=e("p",null,[a("使用 "),e("code",null,"arrow-placement"),a(" 来设定箭头的位置。")],-1),S=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),E=e("h3",{id:"标题栏对齐方式",tabindex:"-1"},[a("标题栏对齐方式 "),e("a",{class:"header-anchor",href:"#标题栏对齐方式","aria-label":'Permalink to "标题栏对齐方式"'},"​")],-1),O=e("p",null,[a("通过 "),e("code",null,"header-justify"),a(" 来设置对齐方式，例如设置为 "),e("code",null,"space-between"),a(" 表明两端对齐，这个时候，配合 "),e("code",null,"arrow-placement: right"),a(" 就能实现，箭头和文本两端对齐的效果")],-1),B=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right" header-justify="space-between">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),D=e("h3",{id:"背景边框",tabindex:"-1"},[a("背景边框 "),e("a",{class:"header-anchor",href:"#背景边框","aria-label":'Permalink to "背景边框"'},"​")],-1),R=e("p",null,[a("通过设置 "),e("code",null,"background"),a(" 就能实现带背景边框样式")],-1),U=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right" header-justify="space-between" background>
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),$=e("h3",{id:"项间距",tabindex:"-1"},[a("项间距 "),e("a",{class:"header-anchor",href:"#项间距","aria-label":'Permalink to "项间距"'},"​")],-1),J=e("p",null,[a("通过设置 "),e("code",null,"gap"),a(" 设置项间距")],-1),M=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right" header-justify="space-between" background gap="10px">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),Z=e("h3",{id:"圆角",tabindex:"-1"},[a("圆角 "),e("a",{class:"header-anchor",href:"#圆角","aria-label":'Permalink to "圆角"'},"​")],-1),z=e("p",null,[a("通过 "),e("code",null,"border-radius"),a(" 设置边框圆角")],-1),F=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right" header-justify="space-between" background border-radius="5px" gap="10px">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),G=e("h3",{id:"网格模式",tabindex:"-1"},[a("网格模式 "),e("a",{class:"header-anchor",href:"#网格模式","aria-label":'Permalink to "网格模式"'},"​")],-1),H=e("p",null,[a("通过传递 "),e("code",null,"grid"),a(" 属性让折叠面板变为网格模式。")],-1),K=e("textarea",{lang:"vue-html"},`
  <nt-collapse
    arrow-placement="right"
    header-justify="space-between"
    background
    border-radius="5px"
    gap="10px"
    grid
  >
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  `,-1),L=m('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="collapse-props" tabindex="-1">Collapse Props <a class="header-anchor" href="#collapse-props" aria-label="Permalink to &quot;Collapse Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>展开的面板</td><td><code>(string|numberr)[]</code></td><td><code>[]</code></td></tr><tr><td><code>accordion</code></td><td>手风琴模式，是否只允许展开一个面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>arrow-placement</code></td><td>箭头位置</td><td><code>left</code> | <code>right</code></td><td><code>left</code></td></tr><tr><td><code>header-justify</code></td><td>面板头部, 水平对齐方式</td><td><code>flex-start</code> | <code>space-between</code></td><td><code>flex-start</code></td></tr><tr><td><code>background</code></td><td>是否带有背景和边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>gap</code></td><td>面板之间的间隔</td><td><code>string</code></td><td>-</td></tr><tr><td><code>default-expanded-names</code></td><td>默认展开的面板</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td><code>border-radius</code></td><td>边框圆角</td><td><code>string</code></td><td>-</td></tr><tr><td><code>grid</code></td><td>网格模式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events <a class="header-anchor" href="#collapse-events" aria-label="Permalink to &quot;Collapse Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>(expandedNames: (string | number)[])</code></td><td>面板变化时触发</td></tr></tbody></table><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props <a class="header-anchor" href="#collapseitem-props" aria-label="Permalink to &quot;CollapseItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>name</code></td><td>名称, <strong>必传</strong></td><td><code>string</code></td><td>-</td></tr><tr><td><code>header-class</code></td><td>头部样式类</td><td><code>string</code></td><td>-</td></tr></tbody></table>',7),te=JSON.parse('{"title":"Collapase 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md","lastUpdated":1721968438000}'),Q={name:"components/collapse.md"},le=Object.assign(Q,{setup(W){p(["1"]);const c=p(["1"]);return(X,s)=>{const n=h("CodePreview"),d=h("ClientOnly");return v(),u("div",null,[b,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[f]),_:1})]),_:1}),g,x,l(d,null,{default:t(()=>[l(n,null,{preview:t(()=>[l(o(r),{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=_=>c.value=_)},{default:t(()=>[l(o(i),{title:"红灯",name:"1"},{default:t(()=>[k]),_:1}),l(o(i),{title:"绿灯",name:"2"},{default:t(()=>[w]),_:1}),l(o(i),{title:"黄灯",name:"3"},{default:t(()=>[C]),_:1})]),_:1},8,["modelValue"])]),default:t(()=>[P]),_:1})]),_:1}),q,y,l(d,null,{default:t(()=>[l(n,null,{preview:t(()=>[l(o(r),{accordion:""},{default:t(()=>[l(o(i),{title:"红灯",name:"1"},{default:t(()=>[V]),_:1}),l(o(i),{title:"绿灯",name:"2"},{default:t(()=>[j]),_:1}),l(o(i),{title:"黄灯",name:"3"},{default:t(()=>[A]),_:1})]),_:1})]),default:t(()=>[T]),_:1})]),_:1}),I,N,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[S]),_:1})]),_:1}),E,O,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[B]),_:1})]),_:1}),D,R,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[U]),_:1})]),_:1}),$,J,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[M]),_:1})]),_:1}),Z,z,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[F]),_:1})]),_:1}),G,H,l(d,null,{default:t(()=>[l(n,null,{default:t(()=>[K]),_:1})]),_:1}),L])}}});export{te as __pageData,le as default};
