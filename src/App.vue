<script setup lang="ts">
import { onMounted } from 'vue';
import GiteeIcon from './app_components/GiteeIcon.vue';
import GithubIcon from './app_components/GithubIcon.vue';
import { MaskCloseIcon, SearchIcon, Input, vClickoutside } from './index';

function handleLink(platform: string) {
  let url = '';
  if (platform === 'gitee') {
    url = 'https://gitee.com/towardly/neatui-vue';
  } else {
    url = 'https://github.com/DvShu/neatui-vue';
  }
  window.open(url);
}

function handleSearchOutside() {
  console.log('outside');
}
</script>

<template>
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header app-header">
      <div class="vertical-center app-header-left">
        <div class="logo-wrapper">
          <img src="/icon.png" alt="neatui" />
        </div>
        <div class="ml-10">
          <div v-clickoutside="handleSearchOutside">
            <input type="text" placeholder="搜索" class="nt-input" />
          </div>
        </div>
      </div>
      <div class="vertical-center app-header-right">
        <GithubIcon
          class="git-repo-icon"
          @click="handleLink('github')"
        ></GithubIcon>
        <GiteeIcon
          class="git-repo-icon ml-10"
          @click="handleLink('gitee')"
        ></GiteeIcon>
      </div>
    </header>
    <section class="nt-container">
      <aside class="nt-aside">Aside</aside>
      <main class="nt-main">Main</main>
    </section>
  </section>
</template>

<style lang="less">
.ml-10 {
  margin-left: 10px;
}
.vertical-center {
  display: flex;
  align-items: center;
}
#app {
  height: 100%;

  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-header-right,
  .app-header-left {
    height: 100%;
  }

  .git-repo-icon {
    font-size: 24px;
    color: white;
    transition: font-size 0.15s;
    cursor: pointer;
    &:hover {
      font-size: 30px;
    }
  }

  .logo-wrapper {
    width: calc(var(--nt-aside-width) - 10px);
    border-right: 1px solid #dedede;
    box-sizing: border-box;
  }

  .nt-input {
    width: 200px;
  }
}
</style>
