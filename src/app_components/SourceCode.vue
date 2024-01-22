<template>
  <pre
    :class="'language-' + lang"
  ><code :class="'language-' + lang" v-html="highlightCode"></code></pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    lang?: string;
    code: string;
  }>(),
  {
    lang: 'typescript',
  },
);

const highlightCode = ref('');

onMounted(() => {
  highlightCode.value = window.Prism.highlight(
    props.code.trim(),
    window.Prism.languages[props.lang],
    props.lang,
  );
});
</script>
