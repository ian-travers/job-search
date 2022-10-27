<template>
  <div class="flex flex-col bg-white border-r border-brand-gray-1 w-96 p-4">
    <section class="pb-55">
      <div class="flex justify-between items-baseline">
        <h3 class="text-base font-semibold my-4">What do you want to do?</h3>
        <div class="text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            @click="clearUserJobFilterSelections"
          />
        </div>
      </div>

      <accordion header="Degrees">
        <job-filters-sidebar-checkbox-group
          :unique-values="uniqueDegrees"
          :mutation="ADD_SELECTED_DEGREES"
          data-test="degrees-filter"
        />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-checkbox-group
          :unique-values="uniqueJobTypes"
          :mutation="ADD_SELECTED_JOB_TYPES"
          data-test="job-types-filter"
        />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-checkbox-group
          :unique-values="uniqueOrganizations"
          :mutation="ADD_SELECTED_ORGANIZATIONS"
          data-test="organizations-filter"
        />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

import { key } from "@/store";

import Accordion from "@/components/Shared/Accordion.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
} from "@/store/costants";

export default defineComponent({
  name: "JobFIltersSidebar",

  components: {
    Accordion,
    ActionButton,
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const store = useStore(key);
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();
    const uniqueDegrees = useUniqueDegrees();

    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };

    return {
      uniqueJobTypes,
      uniqueOrganizations,
      uniqueDegrees,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_DEGREES,
      clearUserJobFilterSelections,
    };
  },
});
</script>
