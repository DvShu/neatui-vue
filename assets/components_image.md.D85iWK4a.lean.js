import{p as g,q as l,r as w}from"./chunks/theme.CVO0TTn9.js";import{f as k,c,af as h,l as i,w as n,b as e,Q as a,a0 as f,o as v,u as d,F as x,C as b}from"./chunks/framework.hs56f8h4.js";const y={class:"grid grid-cols-5"},P={class:"demo-img-item"},q={class:"demo-img-item"},j={class:"demo-img-item"},S={class:"demo-img-item"},z={class:"demo-img-item"},C=["src"],$=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"components/image.md","filePath":"components/image.md","lastUpdated":1729613669000}'),I={name:"components/image.md"},B=Object.assign(I,{setup(F){const p=k(!1),m=["/neatui-vue/img1.svg","/neatui-vue/img2.svg","https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"];return(N,t)=>{const o=f("CodePreview"),r=f("ClientOnly");return v(),c("div",null,[t[16]||(t[16]=h('<h1 id="image-图片" tabindex="-1">Image 图片 <a class="header-anchor" href="#image-图片" aria-label="Permalink to &quot;Image 图片&quot;">​</a></h1><p>可预览的图片，在保留所有原生 <code>img</code> 的特性下，支持懒加载，自定义占位图片、加载失败等</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',4)),i(r,null,{default:n(()=>[i(o,{class:"mt-15"},{default:n(()=>t[2]||(t[2]=[e("textarea",{lang:"vue-html"},`    <nt-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" width="100px"></nt-image>
    `,-1)])),_:1})]),_:1}),t[17]||(t[17]=e("h3",{id:"适应容器",tabindex:"-1"},[a("适应容器 "),e("a",{class:"header-anchor",href:"#适应容器","aria-label":'Permalink to "适应容器"'},"​")],-1)),t[18]||(t[18]=e("p",null,[a("可以通过 "),e("code",null,"fit"),a(" 确定图片如何适应到容器框，同原生 "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noreferrer"},"object-fit"),a(),e("code",null,"CSS"),a(" 属性；如果不填浏览器默认为 "),e("code",null,"fill")],-1)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[e("div",y,[i(d(g),{content:"被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框"},{default:n(()=>[e("div",P,[i(d(l),{src:"/neatui-vue/img1.svg",width:"100px",height:"100px",fit:"fill"}),t[3]||(t[3]=e("span",{class:"mt-15"},"fill",-1))])]),_:1}),i(d(g),{content:"被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。整个对象在填充盒子的同时保留其长宽比"},{default:n(()=>[e("div",q,[i(d(l),{src:"/neatui-vue/img1.svg",width:"100px",height:"100px",fit:"contain"}),t[4]||(t[4]=e("span",{class:"mt-15"},"contain",-1))])]),_:1}),i(d(g),{content:"被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框"},{default:n(()=>[e("div",j,[i(d(l),{src:"/neatui-vue/img1.svg",width:"100px",height:"100px",fit:"cover"}),t[5]||(t[5]=e("span",{class:"mt-15"},"cover",-1))])]),_:1}),i(d(g),{content:"被替换的内容将保持其原有的尺寸"},{default:n(()=>[e("div",S,[i(d(l),{src:"/neatui-vue/img1.svg",width:"100px",height:"100px",fit:"none"}),t[6]||(t[6]=e("span",{class:"mt-15"},"none",-1))])]),_:1}),i(d(g),{content:"内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些"},{default:n(()=>[e("div",z,[i(d(l),{src:"/neatui-vue/img1.svg",width:"100px",height:"100px",fit:"scale-down"}),t[7]||(t[7]=e("span",{class:"mt-15"},"scale-down",-1))])]),_:1})])]),default:n(()=>[t[8]||(t[8]=e("textarea",{lang:"vue-html"},`  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="fill"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="contain"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="cover"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="none"></nt-image>
  <nt-image src="/neatui-vue/img1.svg" width="100px" height="100px" fit="scale-down"></nt-image>
  `,-1))]),_:1})]),_:1}),t[19]||(t[19]=e("h3",{id:"占位",tabindex:"-1"},[a("占位 "),e("a",{class:"header-anchor",href:"#占位","aria-label":'Permalink to "占位"'},"​")],-1)),t[20]||(t[20]=e("p",null,[a("使用 "),e("code",null,"placeholder"),a(" 定义图片加载时显示的图片；通常用于加载大图时用来实现渐进加载，将 "),e("code",null,"placeholder"),a(" 设置为一个原图模糊后的图片")],-1)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[i(d(l),{src:"/neatui-vue/img2.svg",width:"100px",height:"100px",placeholder:"/neatui-vue/img_loading.png"})]),default:n(()=>[t[9]||(t[9]=e("textarea",{lang:"vue-html"},`  <nt-image src="/neatui-vue/img2.svg" width="100px" height="100px" placeholder="/neatui-vue/img_loading.png"></nt-image>
  `,-1))]),_:1})]),_:1}),t[21]||(t[21]=e("h3",{id:"加载失败",tabindex:"-1"},[a("加载失败 "),e("a",{class:"header-anchor",href:"#加载失败","aria-label":'Permalink to "加载失败"'},"​")],-1)),t[22]||(t[22]=e("p",null,[a("通过配置 "),e("code",null,"fallback"),a(" 配置加载失败显示图像占位符; 也可以传递 "),e("code",null,"custom-fallback"),a(" 启用自定义加载失败占位符, 然后配置 "),e("code",null,"slot-fallback"),a(" 来自定义加载失败显示.")],-1)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[i(d(l),{src:"/neatui-vue/img3.svg",width:"100px",height:"100px",fallback:"/neatui-vue/loading_error.png"}),i(d(l),{src:"/neatui-vue/img3.svg",width:"100px",height:"100px","custom-fallback":"",class:"ml-10"},{fallback:n(()=>t[10]||(t[10]=[e("div",{style:{height:"100%","background-color":"gray",display:"flex","justify-content":"center","align-items":"center",color:"#fff"}},"Error",-1)])),_:1})]),default:n(()=>[t[11]||(t[11]=e("textarea",{lang:"vue-html"},`  <nt-image src="/neatui-vue/img3.svg" width="100px" height="100px" fallback="/neatui-vue/loading_error.png"></nt-image>
  <nt-image
    src="/neatui-vue/img3.svg"
    width="100px"
    height="100px"
    custom-fallback
    class="ml-10"
  >
    <template #fallback>
      <div style="height: 100%;background-color: gray;display:flex;justify-content:center;align-items:center;color:#fff;">Error</div>
    </template>
  </nt-image>
  `,-1))]),_:1})]),_:1}),t[23]||(t[23]=e("h3",{id:"禁用预览",tabindex:"-1"},[a("禁用预览 "),e("a",{class:"header-anchor",href:"#禁用预览","aria-label":'Permalink to "禁用预览"'},"​")],-1)),t[24]||(t[24]=e("p",null,[a("使用 "),e("code",null,"preview-disabled"),a(" 来禁止预览")],-1)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[i(d(l),{src:"/neatui-vue/img2.svg",width:"100px",height:"100px","preview-disable":""})]),default:n(()=>[t[12]||(t[12]=e("textarea",{lang:"vue-html"},`  <nt-image src="/neatui-vue/img2.svg" width="100px" height="100px" preview-disable></nt-image>
  `,-1))]),_:1})]),_:1}),t[25]||(t[25]=e("h3",{id:"多图预览",tabindex:"-1"},[a("多图预览 "),e("a",{class:"header-anchor",href:"#多图预览","aria-label":'Permalink to "多图预览"'},"​")],-1)),t[26]||(t[26]=e("p",null,[a("可通过 "),e("code",null,"previewSrcList"),a(" 开启预览多图的功能。 可以通过 "),e("code",null,"initial-index"),a(" 初始化第一张预览图片的位置。 默认初始位置为 "),e("code",null,"0"),a("。")],-1)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[(v(),c(x,null,b(m,(s,u)=>i(d(l),{key:u,src:s,"preview-src-list":m,"initial-index":u,width:"100px"},null,8,["src","initial-index"])),64))]),default:n(()=>[t[13]||(t[13]=e("textarea",{lang:"vue"},`  <script setup>
    const imgs = [
      '/neatui-vue/img1.svg',
      '/neatui-vue/img2.svg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    ]
  <\/script>
  <template>
    <nt-image v-for="src,index in imgs" :key="index" :src="src" :preview-src-list="imgs" :initial-index="index" width="100px"></nt-image>
  </template>
  `,-1))]),_:1})]),_:1}),t[27]||(t[27]=e("h3",{id:"懒加载",tabindex:"-1"},[a("懒加载 "),e("a",{class:"header-anchor",href:"#懒加载","aria-label":'Permalink to "懒加载"'},"​")],-1)),t[28]||(t[28]=e("p",null,[a("通过使用浏览器原生支持的 "),e("code",null,"loading"),a(" 属性来开启懒加载，只需要设置 "),e("code",null,'loading="lazy"')],-1)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[i(d(l),{src:"/neatui-vue/img2.svg",width:"100px",height:"100px",loading:"lazy"})]),default:n(()=>[t[14]||(t[14]=e("textarea",{lang:"vue-html"},`  <nt-image src="/neatui-vue/img2.svg" width="100px" height="100px" loading="lazy"></nt-image>
  `,-1))]),_:1})]),_:1}),t[29]||(t[29]=h('<blockquote><p>从 <code>ios 15.4</code> 开始已经全面支持; 对于不支持 <code>loading=&quot;lazy&quot;</code> 属性的浏览器，可以通过 <a href="https://github.com/mfranzke/loading-attribute-polyfill" target="_blank" rel="noreferrer">loading-attribute-polyfill</a> 来兼容</p></blockquote><h3 id="手动预览" tabindex="-1">手动预览 <a class="header-anchor" href="#手动预览" aria-label="Permalink to &quot;手动预览&quot;">​</a></h3><p>如果不想通过 <code>Image</code> 组件来预览图片，也可以手动通过使用 <code>ImagePreview</code> 来预览图片</p>',3)),i(r,null,{default:n(()=>[i(o,null,{preview:n(()=>[(v(),c(x,null,b(m,(s,u)=>e("img",{key:u,src:s,style:{width:"100px",height:"100px",display:"inline",cursor:"pointer"},onClick:t[0]||(t[0]=O=>p.value=!0)},null,8,C)),64)),i(d(w),{show:p.value,"onUpdate:show":t[1]||(t[1]=s=>p.value=s),"url-list":m,"initial-index":0},null,8,["show"])]),default:n(()=>[t[15]||(t[15]=e("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const show = ref(false);
    const imgs = [
      '/neatui-vue/img1.svg',
      '/neatui-vue/img2.svg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    ]
  <\/script>
  <template>
    <img
      v-for="item, index in imgs"
      :key="index"
      :src="item"
      class="demo-img"
      @click="show = true"
    />
    <nt-image-preview
      v-model:show="show"
      :url-list="imgs"
      :initial-index="0"
    ></nt-image-preview>
  </template>
  <style>
    .demo-img {
      width: 100px;
      height: 100px;
      display: inline;
      cursor: pointer;
    }
  </style>
  `,-1))]),_:1})]),_:1}),t[30]||(t[30]=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="image-props" tabindex="-1">Image Props <a class="header-anchor" href="#image-props" aria-label="Permalink to &quot;Image Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td><em>必填</em> , 图片源地址，同原生属性一致</td><td><code>string</code></td><td>—</td></tr><tr><td><code>width</code></td><td>宽度</td><td><code>string</code></td><td>-</td></tr><tr><td><code>height</code></td><td>高度</td><td><code>string</code></td><td>-</td></tr><tr><td><code>alt</code></td><td>原生属性 <code>alt</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>loading</code></td><td>原生属性, 浏览器加载图像的策略</td><td><code>eager</code>、<code>lazy</code></td><td><code>eager</code></td></tr><tr><td><code>fit</code></td><td>确定图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noreferrer">object-fit</a></td><td><code>string</code></td><td>-</td></tr><tr><td><code>fallback</code></td><td>图片加载失败时显示的地址</td><td><code>string</code></td><td>-</td></tr><tr><td><code>placeholder</code></td><td>图片占位, 用于加载大图时的占位</td><td><code>string</code></td><td>-</td></tr><tr><td><code>preview-disable</code></td><td>禁用图片预览</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>preview--src-list</code></td><td>预览图片地址列表, 多图预览时使用</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>initial-index</code></td><td>初始预览图像索引</td><td><code>number</code></td><td>0</td></tr></tbody></table>',3))])}}});export{$ as __pageData,B as default};
