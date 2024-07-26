import{_ as r,i as u,j as B,L as C,M as c,D as _}from"./chunks/theme.BPBBkDg1.js";import{d as y,e as m,o as q,c as N,g as l,w as e,ae as x,b as o,J as t,X as v,l as d}from"./chunks/framework.-x160Rg7.js";const V=x('<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-label="Permalink to &quot;Dialog&quot;">​</a></h1><p>在保留当前页面状态的情况下，弹出一个对话框告知用户并承载相关操作，包含：标题区、内容区、操作区</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>需要设置 <code>model-value / v-model</code> 属性，它接收 <code>Boolean</code>，当为 <code>true</code> 时显示 <code>Dialog</code>。<code>title</code> 属性用于定义标题，它是可选的，默认值为空。</p>',5),T=o("textarea",{lang:"vue"},`
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  <\/script>
  <template>
    <nt-button type="primary" @click="show = true">显示 Dialog</nt-button>
    <!---->
    <nt-dialog v-model="show" title="Title">
      这是内容
    </nt-dialog>
  </template>
  `,-1),A=o("h3",{id:"自定义头部",tabindex:"-1"},[t("自定义头部 "),o("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1),O=o("p",null,[t("除了使用 "),o("code",null,"title"),t(" 属性定义头部内容外，也可以通过传递 "),o("code",null,"header-slot"),t(" 插槽自定义头部内容。通过传递 "),o("code",null,"width"),t(" 属性改变宽度；通常当需要在头部显示图标时有用, 比如："),o("code",null,"confirm"),t(" 弹窗")],-1),M=o("textarea",{lang:"vue"},`
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
  <\/script>
  <template>
    <nt-button type="primary" @click="show1 = true">显示 Dialog</nt-button>
    <!---->
    <nt-dialog v-model="show1" width="300px">
      <template #header>
        <InfoIcon />
        <span>提示</span>
      </template>
      提示内容
    </nt-dialog>
  </template>
  `,-1),$=o("span",null,"提示",-1),I=o("h3",{id:"异步关闭",tabindex:"-1"},[t("异步关闭 "),o("a",{class:"header-anchor",href:"#异步关闭","aria-label":'Permalink to "异步关闭"'},"​")],-1),S=o("p",null,"有时候点击对话框完毕后，我们需要提交数据，提交成功则关闭对话框，提交失败则给出提示。",-1),U=o("p",null,[o("code",null,"before-close"),t(" 对话框关闭前的回调，通过调用回调的 "),o("code",null,"done()"),t(" 函数来关闭对话框；通过 "),o("code",null,"main-class"),t(" 给对话框主体添加样式；搭配 "),o("a",{href:"/neatui-vue/components/loading"},"Loading"),t(" 就能实现数据提交带上进度。")],-1),L=o("textarea",{lang:"vue"},`
  <script setup lang="ts">
    import { ref } from 'vue';
    //-
    const show = ref(false);
    //-
    function handleBeforeClose(type: 'cancel' | 'close' | 'ok', done) {
      if (type === 'ok') {
        const loading = NtLoading.open({
          to: '.edit-dialog',
          bar: true
        })
        // 模拟数据提交
        setTimeout(() => {
          loading.close()
          NtMessage.success("提交成功")
          done()
        }, 2000);
      } else {
        done()
      }
    }
  <\/script>
  <template>
    <nt-button type="primary" @click="show3 = true">显示 Dialog</nt-button>
    <!---->
    <nt-dialog v-model="show3" title="Title" main-class="edit-dialog" :before-close="handleBeforeClose">
      这是内容
    </nt-dialog>
  </template>
  `,-1),J=o("h3",{id:"移动风格",tabindex:"-1"},[t("移动风格 "),o("a",{class:"header-anchor",href:"#移动风格","aria-label":'Permalink to "移动风格"'},"​")],-1),j=o("p",null,[t("默认情况下对话框为 "),o("code",null,"pc"),t(" 端风格，可以通过传递 "),o("code",null,"theme=mobile"),t(" 将对话框变为移动风格；具体表现为：文本居中，下方按钮平铺")],-1),E=o("textarea",{lang:"vue"},`
  <script setup lang="ts">
    import { ref } from 'vue'
    //-
    const show4 = ref(false);
  <\/script>
  <template>
    <nt-button type="primary" @click="show4 = true">显示 Dialog</nt-button>
    <!---->
    <nt-dialog v-model="show4" title="标题" theme="mobile" :show-close="0" align-center>
      弹窗内容
    </nt-dialog>
  </template>
  `,-1),X=x('<h3 id="消息弹窗" tabindex="-1">消息弹窗 <a class="header-anchor" href="#消息弹窗" aria-label="Permalink to &quot;消息弹窗&quot;">​</a></h3><p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。系统自带有3种消息弹窗：<code>alert</code>、<code>confirm</code>、<code>prompt</code> 但是其样式比较简陋不太美观，消息弹窗优化了样式。</p><p>分别通过 <code>NtDialogBox.alert()</code>、<code>NtDialogBox.confirm()</code>、<code>NtDialogBox.prompt()</code> 调用</p>',3),z=o("textarea",{lang:"vue"},`
  <script setup lang="ts">
    function openAlert() {
      NtDialogBox.alert("这是 Alert Content", 'Alert Title').then((result) => {
        if (result === true) {
          NtMessage.success("点击了确定")
        } else {
          NtMessage.info("点击了关闭")
        }
      })
    }
    //-
    function openConfirm() {
      NtDialogBox.confirm("这是 Confirm Content", 'Confirm Title', { type: 'success' }).then((result) => {
        if (result === true) {
          NtMessage.success("点击了确定")
        } else {
          NtMessage.info("点击了关闭")
        }
      })
    }
    //-
    function openPrompt() {
      NtDialogBox.prompt("请输入用户名", 'Prompt Title').then((result) => {
        NtMessage.info('用户名：' + result)
      })
    }
  <\/script>
  <template>
    <nt-button @click="openAlert">alert</nt-button>
    <nt-button @click="openConfirm">confirm</nt-button>
    <nt-button @click="openPrompt">prompt</nt-button>
  </template>
  `,-1),F=x('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="dialog-props" tabindex="-1">Dialog Props <a class="header-anchor" href="#dialog-props" aria-label="Permalink to &quot;Dialog Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>mask</code></td><td>是否需要遮罩层</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>mask-closable</code></td><td>是否可以通过点击遮罩关闭对话框</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>model-value / v-model</code></td><td><code>是否显示 Dialog</code></td><td><code>Boolean</code></td><td>-</td></tr><tr><td><code>title</code></td><td>标题， 也可通过具名 <code>slot-header</code> 传入</td><td><code>String</code></td><td>-</td></tr><tr><td><code>show-close</code></td><td>右上角关闭按钮显示, <code>1</code>-显示在框内，<code>2</code>-显示在框角, <code>0</code>-不显示</td><td><code>0/1/2</code></td><td><code>1</code></td></tr><tr><td><code>show-cancel</code></td><td>是否显示底部取消按钮</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>show-ok</code></td><td>是否显示底部确定按钮</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>main-class</code></td><td>主体样式类名</td><td><code>String</code></td><td>-</td></tr><tr><td><code>width</code></td><td>宽度</td><td><code>String</code></td><td><code>pc</code>端<code>30%</code>, 移动端 <code>80%</code></td></tr><tr><td><code>before-close</code></td><td>关闭前的回调，会暂停关闭对话框, 通过调用回调函数的 <code>done</code> 关闭对话框; <code>cancel</code>-点击取消按钮触发, <code>close</code>-关闭时触发[右上角关闭按钮、遮罩], <code>ok</code>-点击确定按钮触发</td><td><code>(type: &#39;cancel&#39; | &#39;close&#39; | &#39;ok&#39;, done: () =&gt; void) =&gt; void</code></td><td>-</td></tr><tr><td><code>theme</code></td><td>主题风格</td><td><code>normal</code>、<code>mobile</code></td><td><code>normal</code></td></tr></tbody></table><h3 id="dialogbox-api" tabindex="-1">DialogBox API <a class="header-anchor" href="#dialogbox-api" aria-label="Permalink to &quot;DialogBox API&quot;">​</a></h3><h4 id="_1-alert-message-string-title-string-options-dialogboxoptions-promise-void" tabindex="-1">1. <code>alert(message: string, title: string, options?: DialogBoxOptions): Promise&lt;void&gt;</code> <a class="header-anchor" href="#_1-alert-message-string-title-string-options-dialogboxoptions-promise-void" aria-label="Permalink to &quot;1. `alert(message: string, title: string, options?: DialogBoxOptions): Promise&lt;void&gt;`&quot;">​</a></h4><h4 id="_2-confirm-message-string-title-string-options-dialogboxoptions-promise-boolean" tabindex="-1">2. <code>confirm(message: string, title: string, options?: DialogBoxOptions): Promise&lt;boolean&gt;</code> <a class="header-anchor" href="#_2-confirm-message-string-title-string-options-dialogboxoptions-promise-boolean" aria-label="Permalink to &quot;2. `confirm(message: string, title: string, options?: DialogBoxOptions): Promise&lt;boolean&gt;`&quot;">​</a></h4><h4 id="_3-prompt-tip-string-tip-string-options-dialogboxoptions-promise-string-null" tabindex="-1">3. <code>prompt(tip: string, tip: string, options?: DialogBoxOptions): Promise&lt;string | null&gt;</code> <a class="header-anchor" href="#_3-prompt-tip-string-tip-string-options-dialogboxoptions-promise-string-null" aria-label="Permalink to &quot;3. `prompt(tip: string, tip: string, options?: DialogBoxOptions): Promise&lt;string | null&gt;`&quot;">​</a></h4><h3 id="dialogboxoptions" tabindex="-1">DialogBoxOptions <a class="header-anchor" href="#dialogboxoptions" aria-label="Permalink to &quot;DialogBoxOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>showCancel</code></td><td>是否显示取消按钮</td><td><code>boolean</code></td><td>-</td></tr></tbody></table>',9),R=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1721968438000}'),G={name:"components/dialog.md"},W=y({...G,setup(H){const g=m(!1),h=m(!1),f=m(!1),b=m(!1);function k(n,a){if(n==="ok"){const s=C.open({to:".edit-dialog",bar:!0});setTimeout(()=>{s.close(),c.success("提交成功"),a()},2e3)}else a()}function w(){_.alert("这是 Alert Content","Alert Title").then(n=>{n===!0?c.success("点击了确定"):c.info("点击了关闭")})}function D(){_.confirm("这是 Confirm Content","Confirm Title",{type:"success"}).then(n=>{n===!0?c.success("点击了确定"):c.info("点击了关闭")})}function P(){_.prompt("请输入用户名","Prompt Title").then(n=>{c.info("用户名："+n)})}return(n,a)=>{const s=v("CodePreview"),p=v("ClientOnly");return q(),N("div",null,[V,l(p,null,{default:e(()=>[l(s,null,{preview:e(()=>[l(d(r),{type:"primary",onClick:a[0]||(a[0]=i=>g.value=!0)},{default:e(()=>[t("显示 Dialog")]),_:1}),l(d(u),{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=i=>g.value=i),title:"Title"},{default:e(()=>[t(" 这是内容 ")]),_:1},8,["modelValue"])]),default:e(()=>[T]),_:1})]),_:1}),A,O,l(p,null,{default:e(()=>[l(s,null,{preview:e(()=>[l(d(r),{type:"primary",onClick:a[2]||(a[2]=i=>h.value=!0)},{default:e(()=>[t("显示 Dialog")]),_:1}),l(d(u),{modelValue:h.value,"onUpdate:modelValue":a[3]||(a[3]=i=>h.value=i),width:"300px"},{header:e(()=>[l(d(B)),$]),default:e(()=>[t(" 提示内容 ")]),_:1},8,["modelValue"])]),default:e(()=>[M]),_:1})]),_:1}),I,S,U,l(p,null,{default:e(()=>[l(s,null,{preview:e(()=>[l(d(r),{type:"primary",onClick:a[4]||(a[4]=i=>f.value=!0)},{default:e(()=>[t("显示 Dialog")]),_:1}),l(d(u),{modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=i=>f.value=i),title:"Title","main-class":"edit-dialog","before-close":k},{default:e(()=>[t(" 这是内容 ")]),_:1},8,["modelValue"])]),default:e(()=>[L]),_:1})]),_:1}),J,j,l(p,null,{default:e(()=>[l(s,null,{preview:e(()=>[l(d(r),{type:"primary",onClick:a[6]||(a[6]=i=>b.value=!0)},{default:e(()=>[t("显示 Dialog")]),_:1}),l(d(u),{modelValue:b.value,"onUpdate:modelValue":a[7]||(a[7]=i=>b.value=i),title:"标题",theme:"mobile","show-close":0,"align-center":""},{default:e(()=>[t(" 弹窗内容 ")]),_:1},8,["modelValue"])]),default:e(()=>[E]),_:1})]),_:1}),X,l(p,null,{default:e(()=>[l(s,null,{preview:e(()=>[l(d(r),{onClick:w},{default:e(()=>[t("alert")]),_:1}),l(d(r),{onClick:D},{default:e(()=>[t("confirm")]),_:1}),l(d(r),{onClick:P},{default:e(()=>[t("prompt")]),_:1})]),default:e(()=>[z]),_:1})]),_:1}),F])}}});export{R as __pageData,W as default};
