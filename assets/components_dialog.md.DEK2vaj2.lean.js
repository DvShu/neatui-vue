import{_ as s,i as m,j as C,L as y,M as p,D as x}from"./chunks/theme.D9bEuVpp.js";import{d as q,f as c,c as N,af as v,l as d,w as e,b as o,P as l,$ as k,o as V,u as i}from"./chunks/framework.BMugtFyW.js";const $=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1726671680000}'),T={name:"components/dialog.md"},I=q({...T,setup(A){const g=c(!1),f=c(!1),b=c(!1),h=c(!1);function P(n,t){if(n==="ok"){const r=y.open({to:".edit-dialog",bar:!0});setTimeout(()=>{r.close(),p.success("提交成功"),t()},2e3)}else t()}function w(){x.alert("这是 Alert Content","Alert Title").then(n=>{n===!0?p.success("点击了确定"):p.info("点击了关闭")})}function D(){x.confirm("这是 Confirm Content","Confirm Title",{type:"success"}).then(n=>{n===!0?p.success("点击了确定"):p.info("点击了关闭")})}function B(){x.prompt("请输入用户名","Prompt Title").then(n=>{p.info("用户名："+n)})}return(n,t)=>{const r=k("CodePreview"),u=k("ClientOnly");return V(),N("div",null,[t[25]||(t[25]=v('<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-label="Permalink to &quot;Dialog&quot;">​</a></h1><p>在保留当前页面状态的情况下，弹出一个对话框告知用户并承载相关操作，包含：标题区、内容区、操作区</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>需要设置 <code>model-value / v-model</code> 属性，它接收 <code>Boolean</code>，当为 <code>true</code> 时显示 <code>Dialog</code>。<code>title</code> 属性用于定义标题，它是可选的，默认值为空。</p>',5)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[0]||(t[0]=a=>g.value=!0)},{default:e(()=>t[8]||(t[8]=[l("显示 Dialog")])),_:1}),d(i(m),{modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=a=>g.value=a),title:"Title"},{default:e(()=>t[9]||(t[9]=[l(" 这是内容 ")])),_:1},8,["modelValue"])]),default:e(()=>[t[10]||(t[10]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  `,-1))]),_:1})]),_:1}),t[26]||(t[26]=o("h3",{id:"自定义头部",tabindex:"-1"},[l("自定义头部 "),o("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1)),t[27]||(t[27]=o("p",null,[l("除了使用 "),o("code",null,"title"),l(" 属性定义头部内容外，也可以通过传递 "),o("code",null,"header-slot"),l(" 插槽自定义头部内容。通过传递 "),o("code",null,"width"),l(" 属性改变宽度；通常当需要在头部显示图标时有用, 比如："),o("code",null,"confirm"),l(" 弹窗")],-1)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[2]||(t[2]=a=>f.value=!0)},{default:e(()=>t[11]||(t[11]=[l("显示 Dialog")])),_:1}),d(i(m),{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=a=>f.value=a),width:"300px"},{header:e(()=>[d(i(C)),t[12]||(t[12]=o("span",null,"提示",-1))]),default:e(()=>[t[13]||(t[13]=l(" 提示内容 "))]),_:1},8,["modelValue"])]),default:e(()=>[t[14]||(t[14]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  `,-1))]),_:1})]),_:1}),t[28]||(t[28]=o("h3",{id:"异步关闭",tabindex:"-1"},[l("异步关闭 "),o("a",{class:"header-anchor",href:"#异步关闭","aria-label":'Permalink to "异步关闭"'},"​")],-1)),t[29]||(t[29]=o("p",null,"有时候点击对话框完毕后，我们需要提交数据，提交成功则关闭对话框，提交失败则给出提示。",-1)),t[30]||(t[30]=o("p",null,[o("code",null,"before-close"),l(" 对话框关闭前的回调，通过调用回调的 "),o("code",null,"done()"),l(" 函数来关闭对话框；通过 "),o("code",null,"main-class"),l(" 给对话框主体添加样式；搭配 "),o("a",{href:"/neatui-vue/components/loading"},"Loading"),l(" 就能实现数据提交带上进度。")],-1)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[4]||(t[4]=a=>b.value=!0)},{default:e(()=>t[15]||(t[15]=[l("显示 Dialog")])),_:1}),d(i(m),{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=a=>b.value=a),title:"Title","main-class":"edit-dialog","before-close":P},{default:e(()=>t[16]||(t[16]=[l(" 这是内容 ")])),_:1},8,["modelValue"])]),default:e(()=>[t[17]||(t[17]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  `,-1))]),_:1})]),_:1}),t[31]||(t[31]=o("h3",{id:"移动风格",tabindex:"-1"},[l("移动风格 "),o("a",{class:"header-anchor",href:"#移动风格","aria-label":'Permalink to "移动风格"'},"​")],-1)),t[32]||(t[32]=o("p",null,[l("默认情况下对话框为 "),o("code",null,"pc"),l(" 端风格，可以通过传递 "),o("code",null,"theme=mobile"),l(" 将对话框变为移动风格；具体表现为：文本居中，下方按钮平铺")],-1)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{type:"primary",onClick:t[6]||(t[6]=a=>h.value=!0)},{default:e(()=>t[18]||(t[18]=[l("显示 Dialog")])),_:1}),d(i(m),{modelValue:h.value,"onUpdate:modelValue":t[7]||(t[7]=a=>h.value=a),title:"标题",theme:"mobile","show-close":0,"align-center":""},{default:e(()=>t[19]||(t[19]=[l(" 弹窗内容 ")])),_:1},8,["modelValue"])]),default:e(()=>[t[20]||(t[20]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  `,-1))]),_:1})]),_:1}),t[33]||(t[33]=v('<h3 id="消息弹窗" tabindex="-1">消息弹窗 <a class="header-anchor" href="#消息弹窗" aria-label="Permalink to &quot;消息弹窗&quot;">​</a></h3><p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。系统自带有3种消息弹窗：<code>alert</code>、<code>confirm</code>、<code>prompt</code> 但是其样式比较简陋不太美观，消息弹窗优化了样式。</p><p>分别通过 <code>NtDialogBox.alert()</code>、<code>NtDialogBox.confirm()</code>、<code>NtDialogBox.prompt()</code> 调用</p>',3)),d(u,null,{default:e(()=>[d(r,null,{preview:e(()=>[d(i(s),{onClick:w},{default:e(()=>t[21]||(t[21]=[l("alert")])),_:1}),d(i(s),{onClick:D},{default:e(()=>t[22]||(t[22]=[l("confirm")])),_:1}),d(i(s),{onClick:B},{default:e(()=>t[23]||(t[23]=[l("prompt")])),_:1})]),default:e(()=>[t[24]||(t[24]=o("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  `,-1))]),_:1})]),_:1}),t[34]||(t[34]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="dialog-props" tabindex="-1">Dialog Props <a class="header-anchor" href="#dialog-props" aria-label="Permalink to &quot;Dialog Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>mask</code></td><td>是否需要遮罩层</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>mask-closable</code></td><td>是否可以通过点击遮罩关闭对话框</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>model-value / v-model</code></td><td><code>是否显示 Dialog</code></td><td><code>Boolean</code></td><td>-</td></tr><tr><td><code>title</code></td><td>标题， 也可通过具名 <code>slot-header</code> 传入</td><td><code>String</code></td><td>-</td></tr><tr><td><code>show-close</code></td><td>右上角关闭按钮显示, <code>1</code>-显示在框内，<code>2</code>-显示在框角, <code>0</code>-不显示</td><td><code>0/1/2</code></td><td><code>1</code></td></tr><tr><td><code>show-cancel</code></td><td>是否显示底部取消按钮</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>show-ok</code></td><td>是否显示底部确定按钮</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>main-class</code></td><td>主体样式类名</td><td><code>String</code></td><td>-</td></tr><tr><td><code>width</code></td><td>宽度</td><td><code>String</code></td><td><code>pc</code>端<code>30%</code>, 移动端 <code>80%</code></td></tr><tr><td><code>before-close</code></td><td>关闭前的回调，会暂停关闭对话框, 通过调用回调函数的 <code>done</code> 关闭对话框; <code>cancel</code>-点击取消按钮触发, <code>close</code>-关闭时触发[右上角关闭按钮、遮罩], <code>ok</code>-点击确定按钮触发</td><td><code>(type: &#39;cancel&#39; | &#39;close&#39; | &#39;ok&#39;, done: () =&gt; void) =&gt; void</code></td><td>-</td></tr><tr><td><code>theme</code></td><td>主题风格</td><td><code>normal</code>、<code>mobile</code></td><td><code>normal</code></td></tr></tbody></table><h3 id="dialogbox-api" tabindex="-1">DialogBox API <a class="header-anchor" href="#dialogbox-api" aria-label="Permalink to &quot;DialogBox API&quot;">​</a></h3><h4 id="_1-alert-message-string-title-string-options-dialogboxoptions-promise-void" tabindex="-1">1. <code>alert(message: string, title: string, options?: DialogBoxOptions): Promise&lt;void&gt;</code> <a class="header-anchor" href="#_1-alert-message-string-title-string-options-dialogboxoptions-promise-void" aria-label="Permalink to &quot;1. `alert(message: string, title: string, options?: DialogBoxOptions): Promise&lt;void&gt;`&quot;">​</a></h4><h4 id="_2-confirm-message-string-title-string-options-dialogboxoptions-promise-boolean" tabindex="-1">2. <code>confirm(message: string, title: string, options?: DialogBoxOptions): Promise&lt;boolean&gt;</code> <a class="header-anchor" href="#_2-confirm-message-string-title-string-options-dialogboxoptions-promise-boolean" aria-label="Permalink to &quot;2. `confirm(message: string, title: string, options?: DialogBoxOptions): Promise&lt;boolean&gt;`&quot;">​</a></h4><h4 id="_3-prompt-tip-string-tip-string-options-dialogboxoptions-promise-string-null" tabindex="-1">3. <code>prompt(tip: string, tip: string, options?: DialogBoxOptions): Promise&lt;string | null&gt;</code> <a class="header-anchor" href="#_3-prompt-tip-string-tip-string-options-dialogboxoptions-promise-string-null" aria-label="Permalink to &quot;3. `prompt(tip: string, tip: string, options?: DialogBoxOptions): Promise&lt;string | null&gt;`&quot;">​</a></h4><h3 id="dialogboxoptions" tabindex="-1">DialogBoxOptions <a class="header-anchor" href="#dialogboxoptions" aria-label="Permalink to &quot;DialogBoxOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>showCancel</code></td><td>是否显示取消按钮</td><td><code>boolean</code></td><td>-</td></tr></tbody></table>',9))])}}});export{$ as __pageData,I as default};
