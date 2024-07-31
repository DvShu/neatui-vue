import{y as l,_ as a}from"./chunks/theme.CjnrSd6H.js";import{e as u,o as m,c as _,g as e,w as t,ae as s,b as r,K as n,Y as i,l as o}from"./chunks/framework.zsgsDjJh.js";const g=s('<h1 id="popover-弹出气泡" tabindex="-1">Popover 弹出气泡 <a class="header-anchor" href="#popover-弹出气泡" aria-label="Permalink to &quot;Popover 弹出气泡&quot;">​</a></h1><p>点击/鼠标移入元素，弹出气泡式的卡片浮层。在内容周围弹出一些隐藏的信息。和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>最简单的用法，通过 <code>content</code> 传递浮层内容。</p>',5),v=r("textarea",{lang:"vue-html"},`
  <nt-popover content="悬浮提示">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  `,-1),b=r("span",null,"悬浮",-1),f=r("h3",{id:"触发方式",tabindex:"-1"},[n("触发方式 "),r("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1),P=r("p",null,[n("两种触发方式：鼠标移入["),r("code",null,"hover"),n("]、点击["),r("code",null,"click"),n("]；通过 "),r("code",null,"trigger"),n(" 属性设置触发方式。")],-1),T=r("textarea",{lang:"vue-html"},`
  <nt-popover content="悬浮提示" trigger='hover'>
    <template #trigger>
      <nt-button>悬浮</nt-button>
    </template>
  </nt-popover>
  <nt-popover content="点击提示" trigger='click'>
    <template #trigger>
      <nt-button>点击</nt-button>
    </template>
  </nt-popover>
  `,-1),x=r("h3",{id:"位置",tabindex:"-1"},[n("位置 "),r("a",{class:"header-anchor",href:"#位置","aria-label":'Permalink to "位置"'},"​")],-1),w=r("p",null,[n("有 "),r("code",null,"12"),n(" 个弹出位置。通过 "),r("code",null,"placement"),n(" 属性设置弹出位置。")],-1),k=r("textarea",{lang:"vue-html"},`
  <div class="popover-p-row">
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
  `,-1),q={class:"popover-p-row"},B={class:"popover-p-row"},R={class:"popover-p-row"},S={class:"popover-p-row"},L=r("h3",{id:"受控模式",tabindex:"-1"},[n("受控模式 "),r("a",{class:"header-anchor",href:"#受控模式","aria-label":'Permalink to "受控模式"'},"​")],-1),C=r("p",null,[n("不需要自动弹出，需要进行手动控制是否展示；通过传递 "),r("code",null,"visible"),n(" 属性设置是否展示，然后设置 "),r("code",null,"to"),n(" 属性指向弹层对标节点。")],-1),y=r("textarea",{lang:"vue-html"},`
  <script setup>
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
  `,-1),A=r("span",{id:"popoverTo"},"对标元素",-1),V=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="popover-props" tabindex="-1">Popover Props <a class="header-anchor" href="#popover-props" aria-label="Permalink to &quot;Popover Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>trigger</code></td><td>触发方式</td><td><code>hover</code>、<code>click</code></td><td><code>hover</code></td></tr><tr><td><code>content</code></td><td>显示内容, 也可以通过 <code>default-slot</code> 显示</td><td><code>string</code></td><td>-</td></tr><tr><td><code>placement</code></td><td>弹出位置</td><td><code>topLeft</code>、<code>top</code>、<code>topRight</code>、<code>leftTop</code>、<code>left</code>、<code>leftBottom</code>、<code>rightTop</code>、<code>right</code>、<code>rightBottom</code>、<code>bottomLeft</code>、<code>bottom</code>、<code>bottomRight</code></td><td><code>top</code></td></tr><tr><td><code>visible</code></td><td>受控模式显示与隐藏</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>to</code></td><td>受控模式下起泡对标元素</td><td><code>HTMLElement</code>、<code>string</code>、<code>Ref&lt;HTMLElement&gt;</code></td><td>-</td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots <a class="header-anchor" href="#popover-slots" aria-label="Permalink to &quot;Popover Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义内容</td></tr><tr><td><code>trigger</code></td><td>自定义触发元素</td></tr></tbody></table><h3 id="popover-exposes" tabindex="-1">Popover Exposes <a class="header-anchor" href="#popover-exposes" aria-label="Permalink to &quot;Popover Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>close</code></td><td>关闭弹层</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7),M=JSON.parse('{"title":"Popover 弹出气泡","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover.md","filePath":"components/popover.md","lastUpdated":1721968438000}'),E={name:"components/popover.md"},$=Object.assign(E,{setup(N){const c=u(!1);function h(){c.value=!c.value}return(I,O)=>{const p=i("CodePreview"),d=i("ClientOnly");return m(),_("div",null,[g,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[e(o(l),{content:"悬浮提示"},{trigger:t(()=>[b]),_:1})]),default:t(()=>[v]),_:1})]),_:1}),f,P,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[e(o(l),{content:"悬浮提示",trigger:"hover"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("悬浮")]),_:1})]),_:1}),e(o(l),{content:"点击提示",trigger:"click"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("点击")]),_:1})]),_:1})]),default:t(()=>[T]),_:1})]),_:1}),x,w,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[r("div",q,[e(o(l),{content:"提示内容",placement:"topLeft"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("topLeft")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"top"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("top")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"topRight"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("topRight")]),_:1})]),_:1})]),r("div",B,[e(o(l),{content:"提示内容",placement:"leftTop"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("leftTop")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"left"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("left")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"leftBottom"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("leftBottom")]),_:1})]),_:1})]),r("div",R,[e(o(l),{content:"提示内容",placement:"rightTop"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("rightTop")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"right"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("right")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"rightBottom"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("rightBottom")]),_:1})]),_:1})]),r("div",S,[e(o(l),{content:"提示内容",placement:"bottomLeft"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("bottomLeft")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"bottom"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("bottom")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"bottomRight"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("bottomRight")]),_:1})]),_:1})])]),default:t(()=>[k]),_:1})]),_:1}),L,C,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[A,e(o(a),{onClick:h,class:"ml-10"},{default:t(()=>[n("弹出/隐藏")]),_:1}),e(o(l),{to:"#popoverTo",content:"提示内容",visible:c.value},null,8,["visible"])]),default:t(()=>[y]),_:1})]),_:1}),V])}}});export{M as __pageData,$ as default};
