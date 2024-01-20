<script setup lang="ts">
import { ref } from 'vue';
import GiteeIcon from './app_components/GiteeIcon.vue';
import GithubIcon from './app_components/GithubIcon.vue';
import { MaskCloseIcon, SearchIcon, Input, vClickoutside } from './index';
import asids from './asides';
import type { AsideItem } from './asides';
import { debounce } from 'ph-utils/web';
import Introduce from './views/Introduce.vue';
import Usage from './views/Usage.vue';
/* regist:auto_add */

const searchText = ref('');
const searchResultList = ref<AsideItem[]>([]);
const activeAside = ref('introduce');

function doSearch() {
  if (searchText.value === '') {
    searchResultList.value = [];
  } else {
    const searchReg = new RegExp(searchText.value, 'i');
    searchResultList.value = asids.filter(
      (item) => searchReg.test(item.name) || searchReg.test(item.text),
    );
  }
}

function handleLink(platform: string) {
  let url = '';
  if (platform === 'gitee') {
    url = 'https://gitee.com/towardly/neatui-vue';
  } else {
    url = 'https://github.com/DvShu/neatui-vue';
  }
  window.open(url);
}

const handleSearchInput = debounce(() => {
  doSearch();
});

function handleSearchFocus(dir: 'in' | 'out') {
  if (dir === 'in') {
    // 获取焦点
    doSearch();
  } else {
    searchResultList.value = [];
  }
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
          <div class="search-wrapper">
            <input
              v-model="searchText"
              type="text"
              placeholder="搜索"
              class="nt-input"
              @input="handleSearchInput"
              @focus="handleSearchFocus('in')"
              @blur="handleSearchFocus('out')"
            />
            <Transition name="nt-opacity">
              <ul v-if="searchResultList.length > 0" class="search-menu-list">
                <li v-for="aside in asids" :key="aside.name">
                  <span v-if="!aside.name.startsWith('$')"
                    >{{ aside.name }}&nbsp;-&nbsp;</span
                  >
                  <span>{{ aside.text }}</span>
                </li>
              </ul>
            </Transition>
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
      <aside class="nt-aside">
        <ul>
          <li
            v-for="aside in asids"
            :key="aside.name"
            :class="[
              aside.name !== '---' ? 'aside-item' : 'aside-divider',
              activeAside === aside.name ? 'aside-item--active' : '',
            ]"
          >
            <template v-if="aside.name !== '---'"
              ><span v-if="!aside.name.startsWith('$')"
                >{{ aside.name }}&nbsp;</span
              >
              <span>{{ aside.text }}</span></template
            >
          </li>
        </ul>
      </aside>
      <main class="nt-main app-main">
        <Introduce></Introduce>
        <Usage />
      </main>
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  margin: 24px 0;
}
h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin: 15px 0;
}
p {
  margin: 5px 0;
  font-size: 16px;
  line-height: 1.4;
  color: #333;
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
    width: 100%;
  }

  .search-wrapper {
    position: relative;
    width: 200px;
  }

  .search-menu-list {
    position: absolute;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    li {
      padding: 7px 10px;
      border-bottom: 1px solid #dedede;
      cursor: pointer;
      background-color: white;
      transition: background-color 0.3s;
      &:hover {
        background-color: #efefef;
      }
    }
  }

  .aside-item {
    padding: 7px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.3s;
    &:hover {
      color: #4fc08d;
    }
  }
  .aside-item--active {
    color: #4fc08d;
    font-weight: bold;
    background-color: #ebfff0;
  }

  .aside-divider {
    height: 1px;
    background-color: #dedede;
    margin: 5px 0;
  }

  .app-main {
    overflow: hidden;
  }
  .doc-wrapper {
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .doc-main {
    height: 100%;
    flex-grow: 1;
    font-size: 16px;
  }

  .preview-wrapper {
    flex-shrink: 0;
    width: 376px;
    height: 90%;
    border-radius: 5px;
    border: 1px solid #dedede;
    margin-left: 20px;
  }

  .preview-header {
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #dedede;
  }

  .preview-container {
    height: clac(100% - 50px);
    padding: 10px;
    overflow-y: auto;
  }
}
</style>
