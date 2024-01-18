<script setup lang="ts">
import GiteeIcon from "./app_components/GiteeIcon.vue";
import GithubIcon from "./app_components/GithubIcon.vue";
/* regist:auto_add */
</script>

<template>
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header app-header">
      <div></div>
      <div class="app-header-right">
        <GithubIcon class="git-repo-icon"></GithubIcon>
        <GiteeIcon class="git-repo-icon ml-10"></GiteeIcon>
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
#app {
  height: 100%;

  .app-header {
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-header-right {
    height: 100%;
    display: flex;
    align-items: center;
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
}
</style>
