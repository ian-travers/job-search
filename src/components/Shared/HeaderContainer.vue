<template>
  <div class="w-full border-b border-brand-gray-1">
    <div class="mx-auto text-center my-16">
      <slot name="title">Sample Title</slot>
      <slot name="subtitle">Sample Subtitle</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderContainer",
});
</script>
