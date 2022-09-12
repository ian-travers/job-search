<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/results/1"
          class="block mx-auto bg-white border border-brand-gray-2 rounded hover:shadow-gray"
        >
          <div class="border-b border-brand-gray-2 mx-8 pt-5 pb-2">
            <h2 class="text-2xl mb-2">
              Technical Program Manager, Perception, Augmented Reality
            </h2>
            <div class="flex align-middle">
              <div class="mr-5">
                <span>Bobo</span>
              </div>
              <div class="">
                <span>San Francisco, CA, USA</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "JobListings",
};
</script>
