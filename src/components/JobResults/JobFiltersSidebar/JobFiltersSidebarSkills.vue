<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="border border-brand-gray-1 h-12 w-full rounded shadow-gray p-3"
      placeholder="Computer programming, Finance degree"
      data-test="skills-search-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/costants";

export default defineComponent({
  name: "JobFiltersSidebarSkills",

  setup() {
    const store = useStore(key);

    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
      },
    });

    return { skillsSearchTerm };
  },
});
</script>
