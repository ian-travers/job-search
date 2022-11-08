<template>
  <div class="flex justify-between items-baseline">
    <h3 class="text-base font-semibold my-4">What do you want to do?</h3>
    <div class="text-sm">
      <action-button
        text="Clear Filters"
        type="secondary"
        data-test="clear-job-filters"
        @click="clearUserJobFilterSelections"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

import { key } from "@/store";

import ActionButton from "@/components/Shared/ActionButton.vue";

import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/costants";

const store = useStore(key);

const clearUserJobFilterSelections = () => {
  store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
};
</script>
