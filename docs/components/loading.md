# Loading 加载

数据加载时显示的动效。

## 演示

<script setup>
  import { Loading as vLoading, Button } from '../../src'
  import { ref } from 'vue'

  const loading = ref(true)

  const loading2 = ref(false)

  function handleOpenLoading() {
    loading2.value = true
    setTimeout(() => {
      loading2.value = false
    }, 3000);
  }

  const loading3 = ref(false)
  function handleBarOpen() {
    loading3.value = true;
  }
  function handleBarClose() {
    loading3.value = false;
  }

  let loadingInstance;
  function handleApiOpen() {
    loadingInstance = vLoading.open();
    setTimeout(() => {
      loadingInstance.close()
    }, 3000);
  }
</script>

### 区域加载

在某一个区域加载数据时展示加载动画，防止页面失去响应，提高用户体验

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <div class="loading-demo" v-loading="loading">
    内容加载区域
  </div>
  </textarea>
  <template #preview>
    <div class="loading-demo" v-loading="loading">
      内容加载区域
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 自定义内容

你可以自定义加载中组件的文字，背景颜色。

在绑定了 `v-loading` 指令的元素上添加 `nt-loading-text` 属性，其值会被渲染为加载文案，并显示在加载图标的下方；将其设置为空字符串可以用于取消文本。`nt-loading-background` 用来设定背景色值。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <div
    class="loading-demo"
    v-loading="loading"
    nt-loading-text="loading……"
    nt-loading-background="rgba(255, 255, 255, .9)"
  >
    内容加载区域
  </div>
  </textarea>
  <template #preview>
    <div
      class="loading-demo"
      v-loading="loading"
      nt-loading-text="loading……"
      nt-loading-background="rgba(255, 255, 255, .9)"
    >
      内容加载区域
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 全屏

通过传递 `fullscreen` 修饰符将遮罩插入至 `body` 上保证加载数据時显示全屏动画；当全屏时默认会禁止滚动，通过传递 `unlock` 修饰符可以允许滚动。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const loading2 = ref(false)
    function handleOpenLoading() {
      loading2.value = true
      setTimeout(() => {
        loading2.value = false
      }, 3000);
    }
  </script>
  <template>
    <div v-loading.fullscreen="loading2">
      <lt-button @click="handleOpenLoading">加载</lt-button>
    </div>
  </template>
  </textarea>
  <template #preview>
    <div v-loading.fullscreen="loading2">
      <Button @click="handleOpenLoading">加载</Button>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 进度条风格

通过传递 `bar` 参数可以将圆形加载变为进度条风格。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const loading3 = ref(false)
    function handleBarOpen() {
      loading3.value = true;
    }
    function handleBarClose() {
      loading3.value = false;
    }
  </script>
  <template>
    <div class="loading-demo" v-loading:bar.fullscreen.unlock="loading3">
      <lt-button @click="handleBarOpen">开始</lt-button>
      <lt-button @click="handleBarClose">结束</lt-button>
    </div>
  </template>
  </textarea>
  <template #preview>
    <div class="loading-demo" v-loading:bar.fullscreen.unlock="loading3">
      <Button @click="handleBarOpen">开始</Button>
      <Button @click="handleBarClose">结束</Button>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 编程式调用

通过调用 `open` 函数来显示加载动画，例如：

```javascript
const loadingInstance = NtLoading.open(options);
```

其中 `options` 参数为 `Loading` 的配置项，具体见下表。该会返回一个 `Loading` 实例，可通过调用该实例的 `close` 方法来关闭它：

```javascript
const loadingInstance = NtLoading.open(options);
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close();
});
```

需要注意的是，以编程方式创建的 `Loading` 默认为全屏的且该全屏 `Loading` 是单例的。 若在前一个全屏 `Loading` 关闭前再次调用全屏 `Loading`，并不会创建一个新的 `Loading` 实例，而是返回现有全屏 `Loading` 的实例，只要其中一个实例关闭，其它都关闭：

```javascript
const loadingInstance1 = NtLoading.open();
const loadingInstance2 = NtLoading.open();

loadingInstance2.close();
```

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
    let loadingInstance;
    function handleApiOpen() {
      loadingInstance = NtLoading.open();
      setTimeout(() => {
        loadingInstance.close()
      }, 3000);
    }
  </script>
  <template>
    <lt-button @click="handleApiOpen">开始</lt-button>
  </template>
  </textarea>
  <template #preview>
    <Button @click="handleApiOpen">开始</Button>
  </template>
  </CodePreview>
</ClientOnly>

## API

### 配置项

<!-- prettier-ignore -->
| 字段 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `to` | 加载条的挂载位置；可传入一个 `DOM` 对象或字符串； 若传入字符串，则会将其作为参数传入 `document.querySelector` 以获取到对应 `DOM` 节点 | `string`、`HTMLElement`、`Ref<HTMLElement>` | `document.body` |
| `fullscreen` | 是否为全屏加载 | `boolean` | `true` |
| `unlock` | 是否取消禁止页面滚动 | `boolean` | `false` |
| `text` | 显示在加载图标下方的加载文案; 通过传递空字符串可以用于不显示文本 | `string` | `加载中……` |
| `bar` | 加载条是否显示为进度条样式 | `boolean` | `false` |
| `background` | 遮罩层背景色 | `string` | - |

### 指定

<!-- prettier-ignore -->
| 字段 | 说明 | 类型 |
| --- | --- | --- |
| `v-loading` | 是否显示加载组件 | `boolean` |
| `nt-loading-text` | 显示在加载图标下方的加载文案 | `string` |
| `nt-loading-background` | 遮罩层背景色 | `string` |
