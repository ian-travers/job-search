<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="degrees-filter"
  />
</template>

<script setup lang="ts">
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import { useUniqueDegrees } from "@/store/composables";
import { ADD_SELECTED_DEGREES } from "@/store/costants";

const uniqueDegrees = useUniqueDegrees();
</script>
