<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-wrap">
        <li v-for="value in uniqueValues" :key="value" class="h-8 w-1/2">
          <input
            :id="value"
            v-model="selectedValues"
            :value="value"
            type="checkbox"
            class="mr-3"
            :data-test="value"
            @change="selectValue"
          />
          <label :for="value" data-test="value">
            {{ value }}
          </label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { key } from "@/store";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/costants";

const props = defineProps({
  uniqueValues: {
    type: [Array, Set] as PropType<string[] | Set<string>>,
    required: true,
  },
  mutation: {
    type: String,
    required: true,
  },
});

const store = useStore(key);
const router = useRouter();

const selectedValues = ref<string[]>([]);

store.subscribe((mutation) => {
  if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
    selectedValues.value = [];
  }
});

const selectValue = () => {
  store.commit(props.mutation, selectedValues.value);
  router.push({ name: "JobResults" });
};
</script>
