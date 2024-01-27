<template>
  <div class="nt-scrollbar doc-main" style="padding: 50px">
    <Tooltip text="这是提示文本这是提示文本">
      <span>悬浮提示</span>
    </Tooltip>
    <div style="height: 50px"></div>
    <div></div>
    <div></div>
    <a href="#" data-title="漠白 · GitLab">GitLab</a>
    <ThemeTable></ThemeTable>
  </div>
  <CodePreview title="Tooltip"></CodePreview>
</template>

<script lang="ts" setup>
import SourceCode from '../app_components/SourceCode.vue';
import CodePreview from '../app_components/CodePreview.vue';
import ThemeTable from '../app_components/ThemeTable.vue';
import Tooltip from '../components/Tooltip.vue';
</script>

<style>
a {
  position: relative;
  margin: 0 20px;
}
a:after {
  content: '漠白 · GitLab';
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, 0);
  color: #fff;
  text-shadow: 0 -1px 0px black;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  background: #383838;
  border-radius: 2px;
  padding: 3px 10px;
  font-size: 12px;
  white-space: nowrap;
  transition: all 0.3s;
  opacity: 1;
  visibility: visible;
}
a:hover:after {
  transition-delay: 100ms;
  visibility: visible;
  transform: translate(-50%, -6px);
  opacity: 1;
}
</style>
