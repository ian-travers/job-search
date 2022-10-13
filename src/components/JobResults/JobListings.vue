<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="text-sm font-semibold text-brand-blue-1 mx-3"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="text-sm font-semibold text-brand-blue-1 mx-3"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import useCurrentPage from "@/composables/useCurrentPage";
import { useFilteredJobs } from "@/store/composables";

import { FETCH_JOBS } from "@/store/costants";
import JobListing from "./JobListing.vue";

export default {
  name: "JobListings",

  components: { JobListing },

  setup() {
    const store = useStore();

    const fetchJobs = () => store.dispatch(FETCH_JOBS);
    onMounted(fetchJobs);

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1;
      const firstPage = 1;

      return previousPage >= firstPage ? previousPage : undefined;
    });

    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;
      const maxPage = Math.ceil(filteredJobs.value.length / 10);

      console.log(nextPage, maxPage);

      return nextPage <= maxPage ? nextPage : undefined;
    });

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;

      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { displayedJobs, currentPage, previousPage, nextPage };
  },
};
</script>
