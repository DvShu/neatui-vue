<template>
  <Teleport to="body">
    <div class="nt-image-preview">
      <div class="nt-image-preview__mask"></div>
      <span class="nt-image-preview__btn nt-image-preview__close">
        <CloseIcon></CloseIcon>
      </span>
      <span class="nt-image-preview__btn nt-image-preview__prev">
        <ArrowLeft></ArrowLeft>
      </span>
      <span class="nt-image-preview__btn nt-image-preview__next">
        <ArrowRight></ArrowRight>
      </span>
      <div class="nt-image-preview__btn nt-image-preview__actions">
        <span class="nt-image-preview__btn">
          <ZoomOut></ZoomOut>
        </span>
        <span class="nt-image-preview__btn">
          <ZoomIn></ZoomIn>
        </span>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import CloseIcon from './icon/Close.vue';
import ArrowLeft from './icon/ArrowLeft.vue';
import ArrowRight from './icon/ArrowRight.vue';
import ZoomIn from './icon/ZoomIn.vue';
import ZoomOut from './icon/ZoomOut.vue';
</script>
