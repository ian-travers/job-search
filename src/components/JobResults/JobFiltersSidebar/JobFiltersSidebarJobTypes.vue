<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="h-8 w-1/2"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectJobType"
            />
            <label :for="jobType" data-test="job-type">
              {{ jobType }}
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { mapMutations } from "vuex";

import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/costants";
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarJobTypes",

  components: { Accordion },

  setup() {
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    return { selectedJobTypes, uniqueJobTypes };
  },

  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
