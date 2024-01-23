<template>
  <div class="nt-scrollbar doc-main">
    <p>组件默认是没有进行样式重置，但是也提供了样式重置文件，可以手动引入</p>
    <SourceCode code="import 'neatui-vue/style/reset.css'"></SourceCode>
    <p>建议将样式重置放在最开始引入。</p>
    <p>重置样式包含如下内容：</p>
    <SourceCode lang="css" :code="resetCode"></SourceCode>
  </div>
</template>

<script lang="ts" setup>
import SourceCode from '../app_components/SourceCode.vue';
import resetCode from '../../style/reset.css?raw';
</script>
