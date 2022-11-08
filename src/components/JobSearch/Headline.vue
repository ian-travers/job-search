<template>
  <section class="mb-16">
    <h1
      class="text-8xl font-bold tracking-tighter mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script setup lang="ts">
import nextElementInList from "@/utils/nextElementInList";
import { ref, computed, onBeforeUnmount } from "vue";

interface ActionClasses {
  [x: string]: boolean;
}

let action = ref("Build");
let interval = 0;

const actionClasses = computed((): ActionClasses => {
  return {
    [action.value.toLowerCase()]: true,
  };
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

const changeTitle = () => {
  interval = setInterval(() => {
    const actions = ["Build", "Create", "Design", "Code"];

    action.value = nextElementInList(actions, action.value);
  }, 3000);
};

changeTitle();
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
