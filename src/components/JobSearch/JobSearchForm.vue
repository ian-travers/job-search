<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex flex-1 items-center h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input
          v-model="role"
          placeholder="Software engineer"
          data-test="role-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex flex-1 items-center h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input
          v-model="location"
          placeholder="Los Angeles"
          data-test="location-input"
        />
      </div>
      <action-button
        text="Search"
        type="secondary"
        class="rounded-r-3xl"
        data-test="form-submit-button"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

const router = useRouter();

const role = ref("");
const location = ref("");

const searchForJobs = () => {
  router.push({
    name: "JobResults",
    query: { role: role.value, location: location.value },
  });
};
</script>
