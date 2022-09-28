<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="h-80 w-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>

    <spotlight #default="slotProps" class="flex justify-center pb-16">
      <router-link
        to="/jobs/results"
        class="flex flex-col border rounded-lg bg-brand-gray-2 w-72 h-96 mx-5"
      >
        <img :src="slotProps.spotlight.img" class="object-contain" />
        <div class="h-48 px-6 py-4 mt-3">
          <h3 class="text-lg font-medium">
            {{ slotProps.spotlight.title }}
          </h3>
          <p class="text-sm mt-3">
            {{ slotProps.spotlight.description }}
          </p>
        </div>
        <router-link
          to="/jobs/results"
          class="text-sm text-brand-blue-1 px-6 pb-4"
        >
          See jobs
        </router-link>
      </router-link>
    </spotlight>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";

export default {
  name: "Hero",
  components: { Headline, JobSearchForm, Spotlight },
};
</script>
