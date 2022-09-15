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

          <div class="px-8 py-4">
            <div class="">
              <h3 class="mt-1 mb-2">Qualifications:</h3>
              <div>
                <ul class="list-disc pl-8">
                  <li>Bachelor's degree or equivalent practice experience.</li>
                  <li>5 years experience in program management.</li>
                  <li>
                    Experience analyzing data through querying database (e.g.
                    SQL), using spreadssheet sofrware.
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center mt-2">
              <router-link to="/jobs/results/1" class="text-brand-blue-1"
                >Expand</router-link
              >
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
