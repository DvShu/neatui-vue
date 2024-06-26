# LoadingBar 加载条

通常用于在页面初始化的时候，加载初始化数据

## 演示

<script setup>
  import { onMounted, ref } from 'vue'
  import { LoadingBar, Button } from '../../src'
  const loadingBar = new LoadingBar()
  let loadingBar1;
  const $parent = ref(null)

  function onLoading() {
    loadingBar.start()
  }

  function onFinish() {
    loadingBar.finish()
  }

  function onError() {
    loadingBar.error()
  }

  function onLoading1() {
    loadingBar1.start()
  }

  function onFinish1(params) {
    loadingBar1.finish()
  }

  onMounted(() => {
    setTimeout(() => {
      loadingBar1 = new LoadingBar($parent)
    }, 0);
  })
</script>

### 基础用法

在顶部显示一个不定进度条

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const loadingBar = new NtLoadingBar('#loading-bar-demo');
    function onLoading() {
      loadingBar.start()
    }
    function onFinish() {
      loadingBar.finish()
    }
    function onError() {
      loadingBar.error()
    }
  </script>
  <template>
    <nt-button @click="onLoading">开始</nt-button>
    <nt-button @click="onFinish">结束</nt-button>
    <nt-button @click="onError">出错</nt-button>
  </template>
  </textarea>
  <template #preview>
    <Button @click="onLoading">开始</Button>
    <Button @click="onFinish">结束</Button>
    <Button @click="onError">出错</Button>
  </template>
  </CodePreview>
</ClientOnly>

### 局部使用

构建对象的时候，传递一个 `to` 属性指向一个节点即可将加载条渲染到该节点下

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue'
    const $parent = ref<HTMLDivElement>()
    let loadingBar;
    onMounted(() => {
      loadingBar = new LoadingBar($parent)
    })
    function onLoading() {
      loadingBar.start()
    }
    function onFinish(params) {
      loadingBar.finish()
    }
  </script>
  <template>
    <div ref="$parent" id="loading-bar-demo" class="loading-bar-demo">
      <div>这是主要内容区域，数据待加载中……</div>
      <div>
        <nt-button @click="onLoading">开始</nt-button>
        <nt-button @click="onFinish">结束</nt-button>
      </div>
    </div>
  </template>
  <style>
    .loading-bar-demo {
      height: 100px;
      border: 1px solid #4998f4;
      padding: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
  </textarea>
  <template #preview>
    <div ref="$parent" id="loading-bar-demo" class="loading-bar-demo">
      <div>这是主要内容区域，数据待加载中……</div>
      <div>
        <Button @click="onLoading1">开始</Button>
        <Button @click="onFinish1">结束</Button>
      </div>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

## API

### 构造参数

| 参数 | 说明             | 类型                                        | 默认值 |
| ---- | ---------------- | ------------------------------------------- | ------ |
| `to` | 加载条的挂载位置 | `string`、`HTMLElement`、`Ref<HTMLElement>` | -      |

### 方法

| 方法名      | 说明                                                             |
| ----------- | ---------------------------------------------------------------- |
| `start()`   | 开始显示进度条                                                   |
| `finish()`  | 结束显示进度条                                                   |
| `error()`   | 出错显示进度条                                                   |
| `close()`   | 关闭进度条, 通常不用手动调用，内部在进度完成后会自动调用         |
| `destroy()` | 关闭进度条，同时销毁资源，**调用该函数后，就不能再调用其它函数** |
