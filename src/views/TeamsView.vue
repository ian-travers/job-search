<template>
  <header-container>
    <template #title>
      <h1 class="w-full font-normal text-4xl">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full font-light text-2xl my-4">
        It's awesome working here. Why don't you come join us?
      </h2>
    </template>
  </header-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default defineComponent({
  name: "TeamsView",

  components: { HeaderContainer },
});
</script>
