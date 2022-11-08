<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="organizations-filter"
  />
</template>

<script setup lang="ts">
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/costants";

const uniqueOrganizations = useUniqueOrganizations();
</script>
