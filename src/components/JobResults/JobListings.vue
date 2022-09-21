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
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="text-sm font-semibold text-brand-blue-1 mx-3"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "./JobListing.vue";

export default {
  name: "JobListings",

  components: { JobListing },

  data() {
    return {
      jobs: [],
    };
  },

  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";

      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;

      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = this.jobs.length / 10;

      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;

      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },

  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>
