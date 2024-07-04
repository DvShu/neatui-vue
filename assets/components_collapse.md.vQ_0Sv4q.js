import{d as s,e as i}from"./chunks/theme.D2m7nk3t.js";import{e as p,c as h,l as a,w as t,ab as r,b as e,G as l,U as c,o as m,z as o}from"./chunks/framework.MCgil6G4.js";const _=r('<h1 id="collapase-折叠面板" tabindex="-1">Collapase 折叠面板 <a class="header-anchor" href="#collapase-折叠面板" aria-label="Permalink to &quot;Collapase 折叠面板&quot;">​</a></h1><p>折叠/展开的内容区域; 通常用于后台系统的首页边栏的控制面板上</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>可以同时展开多个面板，面板之间不影响</p>',5),u=e("textarea",{lang:"vue-html"},`
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
  `,-1),v=e("h3",{id:"默认展开",tabindex:"-1"},[l("默认展开 "),e("a",{class:"header-anchor",href:"#默认展开","aria-label":'Permalink to "默认展开"'},"​")],-1),f=e("p",null,[l("通过传递 "),e("code",null,"default-expanded-names"),l(" 数组，来设置默认展开的面板。")],-1),b=e("textarea",{lang:"vue-html"},`
  <nt-collapse :default-expanded-names='["1"]' arrow-placement="right">
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
  `,-1),x=e("div",null,"红灯 - 停",-1),g=e("div",null,"绿灯 - 行",-1),P=e("h3",{id:"手风琴效果",tabindex:"-1"},[l("手风琴效果 "),e("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1),k=e("p",null,[l("手风琴模式，始终只有一个面板处在激活状态。通过 "),e("code",null,"accordion"),l(" 属性来设置是否以手风琴模式显示。")],-1),w=e("textarea",{lang:"vue-html"},`
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
  `,-1),C=e("div",null,"红灯 - 停",-1),q=e("div",null,"绿灯 - 行",-1),y=e("div",null,"黄灯 - 提示",-1),T=e("h3",{id:"箭头位置",tabindex:"-1"},[l("箭头位置 "),e("a",{class:"header-anchor",href:"#箭头位置","aria-label":'Permalink to "箭头位置"'},"​")],-1),A=e("p",null,[l("使用 "),e("code",null,"arrow-placement"),l(" 来设定箭头的位置。")],-1),I=e("textarea",{lang:"vue-html"},`
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
  `,-1),N=e("h3",{id:"标题栏对齐方式",tabindex:"-1"},[l("标题栏对齐方式 "),e("a",{class:"header-anchor",href:"#标题栏对齐方式","aria-label":'Permalink to "标题栏对齐方式"'},"​")],-1),S=e("p",null,[l("通过 "),e("code",null,"header-justify"),l(" 来设置对齐方式，例如设置为 "),e("code",null,"space-between"),l(" 表明两端对齐，这个时候，配合 "),e("code",null,"arrow-placement: right"),l(" 就能实现，箭头和文本两端对齐的效果")],-1),V=e("textarea",{lang:"vue-html"},`
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
  `,-1),j=e("h3",{id:"背景边框",tabindex:"-1"},[l("背景边框 "),e("a",{class:"header-anchor",href:"#背景边框","aria-label":'Permalink to "背景边框"'},"​")],-1),E=e("p",null,[l("通过设置 "),e("code",null,"background"),l(" 就能实现带背景边框样式")],-1),O=e("textarea",{lang:"vue-html"},`
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
  `,-1),B=e("h3",{id:"项间距",tabindex:"-1"},[l("项间距 "),e("a",{class:"header-anchor",href:"#项间距","aria-label":'Permalink to "项间距"'},"​")],-1),D=e("p",null,[l("通过设置 "),e("code",null,"item-space"),l(" 设置项间距")],-1),R=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right" header-justify="space-between" background item-space="10px">
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
  `,-1),U=e("h3",{id:"圆角",tabindex:"-1"},[l("圆角 "),e("a",{class:"header-anchor",href:"#圆角","aria-label":'Permalink to "圆角"'},"​")],-1),$=e("p",null,[l("通过 "),e("code",null,"border-radius"),l(" 设置边框圆角")],-1),z=e("textarea",{lang:"vue-html"},`
  <nt-collapse arrow-placement="right" header-justify="space-between" background border-radius="5px">
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
  `,-1),G=r('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="collapse-props" tabindex="-1">Collapse Props <a class="header-anchor" href="#collapse-props" aria-label="Permalink to &quot;Collapse Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>accordion</code></td><td>手风琴模式，是否只允许展开一个面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>arrow-placement</code></td><td>箭头位置</td><td><code>left</code> | <code>right</code></td><td><code>left</code></td></tr><tr><td><code>header-justify</code></td><td>面板头部, 水平对齐方式</td><td><code>flex-start</code> | <code>space-between</code></td><td><code>flex-start</code></td></tr><tr><td><code>background</code></td><td>是否带有背景和边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>item-space</code></td><td>面板之间的间隔</td><td><code>string</code></td><td>-</td></tr><tr><td><code>default-expanded-names</code></td><td>默认展开的面板</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td><code>border-radius</code></td><td>边框圆角</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events <a class="header-anchor" href="#collapse-events" aria-label="Permalink to &quot;Collapse Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>(expandedNames: (string | number)[])</code></td><td>面板变化时触发</td></tr></tbody></table><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props <a class="header-anchor" href="#collapseitem-props" aria-label="Permalink to &quot;CollapseItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>name</code></td><td>名称, <strong>必传</strong></td><td><code>string</code></td><td>-</td></tr></tbody></table>',7),Q=JSON.parse('{"title":"Collapase 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md","lastUpdated":1720107457000}'),J={name:"components/collapse.md"},W=Object.assign(J,{setup(F){return p(["1"]),(H,K)=>{const n=c("CodePreview"),d=c("ClientOnly");return m(),h("div",null,[_,a(d,null,{default:t(()=>[a(n,null,{default:t(()=>[u]),_:1})]),_:1}),v,f,a(d,null,{default:t(()=>[a(n,null,{preview:t(()=>[a(o(s),{"default-expanded-names":["1"]},{default:t(()=>[a(o(i),{title:"红灯",name:"1"},{default:t(()=>[x]),_:1}),a(o(i),{title:"绿灯",name:"2"},{default:t(()=>[g]),_:1})]),_:1})]),default:t(()=>[b]),_:1})]),_:1}),P,k,a(d,null,{default:t(()=>[a(n,null,{preview:t(()=>[a(o(s),{accordion:""},{default:t(()=>[a(o(i),{title:"红灯",name:"1"},{default:t(()=>[C]),_:1}),a(o(i),{title:"绿灯",name:"2"},{default:t(()=>[q]),_:1}),a(o(i),{title:"黄灯",name:"3"},{default:t(()=>[y]),_:1})]),_:1})]),default:t(()=>[w]),_:1})]),_:1}),T,A,a(d,null,{default:t(()=>[a(n,null,{default:t(()=>[I]),_:1})]),_:1}),N,S,a(d,null,{default:t(()=>[a(n,null,{default:t(()=>[V]),_:1})]),_:1}),j,E,a(d,null,{default:t(()=>[a(n,null,{default:t(()=>[O]),_:1})]),_:1}),B,D,a(d,null,{default:t(()=>[a(n,null,{default:t(()=>[R]),_:1})]),_:1}),U,$,a(d,null,{default:t(()=>[a(n,null,{default:t(()=>[z]),_:1})]),_:1}),G])}}});export{Q as __pageData,W as default};
