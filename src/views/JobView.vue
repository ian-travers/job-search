<template>
  <div class="text-center mt-8">Job View</div>
  <div class="text-center mt-2">{{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",

  setup() {
    const route = useRoute();
    const currentJobId = route.params.id;

    return { currentJobId };
  },
});
</script>
