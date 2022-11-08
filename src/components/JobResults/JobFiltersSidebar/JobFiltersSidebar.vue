<template>
  <div class="flex flex-col bg-white border-r border-brand-gray-1 w-96 p-4">
    <section class="pb-55">
      <job-filters-sidebar-prompt />

      <accordion header="Skills and Qualifications">
        <job-filters-sidebar-skills />
      </accordion>

      <accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </accordion>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/costants";

import Accordion from "@/components/Shared/Accordion.vue";

import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";
import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

const parseSkillsSearchForm = () => {
  const route = useRoute();
  const role = route.query.role || "";
  const store = useStore(key);
  store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
};

onMounted(parseSkillsSearchForm);
</script>
