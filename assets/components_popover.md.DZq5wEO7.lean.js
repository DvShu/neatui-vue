import{E as p,_ as d}from"./chunks/theme.r1xc2cnH.js";import{f as v,c,af as u,p as o,w as e,b as l,P as r,$ as m,o as b,u as n}from"./chunks/framework.BKc52Jce.js";const f={class:"popover-p-row"},h={class:"popover-p-row"},P={class:"popover-p-row"},x={class:"popover-p-row"},L=JSON.parse('{"title":"Popover 弹出气泡","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover.md","filePath":"components/popover.md","lastUpdated":1726671680000}'),w={name:"components/popover.md"},R=Object.assign(w,{setup(k){const s=v(!1);function g(){s.value=!s.value}return(T,t)=>{const a=m("CodePreview"),i=m("ClientOnly");return b(),c("div",null,[t[21]||(t[21]=u('<h1 id="popover-弹出气泡" tabindex="-1">Popover 弹出气泡 <a class="header-anchor" href="#popover-弹出气泡" aria-label="Permalink to &quot;Popover 弹出气泡&quot;">​</a></h1><p>点击/鼠标移入元素，弹出气泡式的卡片浮层。在内容周围弹出一些隐藏的信息。和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>最简单的用法，通过 <code>content</code> 传递浮层内容。</p>',5)),o(i,null,{default:e(()=>[o(a,null,{preview:e(()=>[o(n(p),{content:"悬浮提示"},{trigger:e(()=>t[0]||(t[0]=[l("span",null,"悬浮",-1)])),_:1})]),default:e(()=>[t[1]||(t[1]=l("textarea",{lang:"vue-html"},`  <nt-popover content="悬浮提示">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  `,-1))]),_:1})]),_:1}),t[22]||(t[22]=l("h3",{id:"触发方式",tabindex:"-1"},[r("触发方式 "),l("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1)),t[23]||(t[23]=l("p",null,[r("两种触发方式：鼠标移入["),l("code",null,"hover"),r("]、点击["),l("code",null,"click"),r("]；通过 "),l("code",null,"trigger"),r(" 属性设置触发方式。")],-1)),o(i,null,{default:e(()=>[o(a,null,{preview:e(()=>[o(n(p),{content:"悬浮提示",trigger:"hover"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[2]||(t[2]=[r("悬浮")])),_:1})]),_:1}),o(n(p),{content:"点击提示",trigger:"click"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[3]||(t[3]=[r("点击")])),_:1})]),_:1})]),default:e(()=>[t[4]||(t[4]=l("textarea",{lang:"vue-html"},`  <nt-popover content="悬浮提示" trigger='hover'>
    <template #trigger>
      <nt-button>悬浮</nt-button>
    </template>
  </nt-popover>
  <nt-popover content="点击提示" trigger='click'>
    <template #trigger>
      <nt-button>点击</nt-button>
    </template>
  </nt-popover>
  `,-1))]),_:1})]),_:1}),t[24]||(t[24]=l("h3",{id:"位置",tabindex:"-1"},[r("位置 "),l("a",{class:"header-anchor",href:"#位置","aria-label":'Permalink to "位置"'},"​")],-1)),t[25]||(t[25]=l("p",null,[r("有 "),l("code",null,"12"),r(" 个弹出位置。通过 "),l("code",null,"placement"),r(" 属性设置弹出位置。")],-1)),o(i,null,{default:e(()=>[o(a,null,{preview:e(()=>[l("div",f,[o(n(p),{content:"提示内容",placement:"topLeft"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[5]||(t[5]=[r("topLeft")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"top"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[6]||(t[6]=[r("top")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"topRight"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[7]||(t[7]=[r("topRight")])),_:1})]),_:1})]),l("div",h,[o(n(p),{content:"提示内容",placement:"leftTop"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[8]||(t[8]=[r("leftTop")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"left"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[9]||(t[9]=[r("left")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"leftBottom"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[10]||(t[10]=[r("leftBottom")])),_:1})]),_:1})]),l("div",P,[o(n(p),{content:"提示内容",placement:"rightTop"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[11]||(t[11]=[r("rightTop")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"right"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[12]||(t[12]=[r("right")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"rightBottom"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[13]||(t[13]=[r("rightBottom")])),_:1})]),_:1})]),l("div",x,[o(n(p),{content:"提示内容",placement:"bottomLeft"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[14]||(t[14]=[r("bottomLeft")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"bottom"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[15]||(t[15]=[r("bottom")])),_:1})]),_:1}),o(n(p),{content:"提示内容",placement:"bottomRight"},{trigger:e(()=>[o(n(d),null,{default:e(()=>t[16]||(t[16]=[r("bottomRight")])),_:1})]),_:1})])]),default:e(()=>[t[17]||(t[17]=l("textarea",{lang:"vue-html"},`  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="topLeft">
      <template #trigger>
        <nt-button>topLeft</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top">
      <template #trigger>
        <nt-button>top</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="topRight">
      <template #trigger>
        <nt-button>topRight</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="leftTop">
      <template #trigger>
        <nt-button>leftTop</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left">
      <template #trigger>
        <nt-button>left</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="leftBottom">
      <template #trigger>
        <nt-button>leftBottom</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="rightTop">
      <template #trigger>
        <nt-button>rightTop</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right">
      <template #trigger>
        <nt-button>right</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="rightBottom">
      <template #trigger>
        <nt-button>rightBottom</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="bottomLeft">
      <template #trigger>
        <nt-button>bottomLeft</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom">
      <template #trigger>
        <nt-button>bottom</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottomRight">
      <template #trigger>
        <nt-button>bottomRight</nt-button>
      </template>
    </nt-popover>
  </div>
  `,-1))]),_:1})]),_:1}),t[26]||(t[26]=l("h3",{id:"受控模式",tabindex:"-1"},[r("受控模式 "),l("a",{class:"header-anchor",href:"#受控模式","aria-label":'Permalink to "受控模式"'},"​")],-1)),t[27]||(t[27]=l("p",null,[r("不需要自动弹出，需要进行手动控制是否展示；通过传递 "),l("code",null,"visible"),r(" 属性设置是否展示，然后设置 "),l("code",null,"to"),r(" 属性指向弹层对标节点。")],-1)),o(i,null,{default:e(()=>[o(a,null,{preview:e(()=>[t[19]||(t[19]=l("span",{id:"popoverTo"},"对标元素",-1)),o(n(d),{onClick:g,class:"ml-10"},{default:e(()=>t[18]||(t[18]=[r("弹出/隐藏")])),_:1}),o(n(p),{to:"#popoverTo",content:"提示内容",visible:s.value},null,8,["visible"])]),default:e(()=>[t[20]||(t[20]=l("textarea",{lang:"vue-html"},`  <script setup>
  import { ref } from 'vue'
  const show = ref(false)
  function toggleShow() {
    show.value = !show.value
  }
  <\/script>
  <template>
    <span id="popoverTo">对标元素</span>
    <nt-button @click='toggleShow' class="ml-10">弹出/隐藏</nt-button>
    <nt-popover to="#popoverTo" content="提示内容" :visible="show"></nt-popover>
  </template>
  `,-1))]),_:1})]),_:1}),t[28]||(t[28]=u('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="popover-props" tabindex="-1">Popover Props <a class="header-anchor" href="#popover-props" aria-label="Permalink to &quot;Popover Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>trigger</code></td><td>触发方式</td><td><code>hover</code>、<code>click</code></td><td><code>hover</code></td></tr><tr><td><code>content</code></td><td>显示内容, 也可以通过 <code>default-slot</code> 显示</td><td><code>string</code></td><td>-</td></tr><tr><td><code>placement</code></td><td>弹出位置</td><td><code>topLeft</code>、<code>top</code>、<code>topRight</code>、<code>leftTop</code>、<code>left</code>、<code>leftBottom</code>、<code>rightTop</code>、<code>right</code>、<code>rightBottom</code>、<code>bottomLeft</code>、<code>bottom</code>、<code>bottomRight</code></td><td><code>top</code></td></tr><tr><td><code>visible</code></td><td>受控模式显示与隐藏</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>to</code></td><td>受控模式下起泡对标元素</td><td><code>HTMLElement</code>、<code>string</code>、<code>Ref&lt;HTMLElement&gt;</code></td><td>-</td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots <a class="header-anchor" href="#popover-slots" aria-label="Permalink to &quot;Popover Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义内容</td></tr><tr><td><code>trigger</code></td><td>自定义触发元素</td></tr></tbody></table><h3 id="popover-exposes" tabindex="-1">Popover Exposes <a class="header-anchor" href="#popover-exposes" aria-label="Permalink to &quot;Popover Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>close</code></td><td>关闭弹层</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}});export{L as __pageData,R as default};
