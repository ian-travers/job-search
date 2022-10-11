<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="h-8 w-1/2"
          >
            <input
              :id="organization"
              v-model="selectedOrganozations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectOrganization"
            />
            <label :for="organization" data-test="organization">
              {{ organization }}
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useUniqueOrganizations } from "@/store/composables";

import { ADD_SELECTED_ORGANIZATIONS } from "@/store/costants";

import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",

  components: { Accordion },

  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedOrganozations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganozations.value);
      router.push({ name: "JobResults" });
    };

    return { selectedOrganozations, uniqueOrganizations, selectOrganization };
  },
};
</script>
