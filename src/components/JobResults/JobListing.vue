<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="border-b border-brand-gray-2 mx-8 pt-5 pb-2">
        <h2 class="text-2xl mb-2">
          {{ job.title }}
        </h2>
        <div class="flex align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-5"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div class="">
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-2">
          <router-link :to="jobPageLink" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Job } from "@/api/types";

export default defineComponent({
  name: "JobListing",

  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },

  setup(props) {
    const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);

    return { jobPageLink };
  },
});
</script>
