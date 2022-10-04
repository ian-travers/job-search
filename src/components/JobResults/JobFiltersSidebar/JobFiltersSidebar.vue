<template>
  <div class="flex flex-col bg-white border-r border-brand-gray-1 w-96 p-4">
    <section class="pb-55">
      <div class="flex justify-between items-baseline">
        <h3 class="text-base font-semibold my-4">What do you want to do?</h3>
        <div class="text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <job-filters-sidebar-organizations />
      <job-filters-sidebar-job-types />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations";

export default {
  name: "JobFIltersSidebar",

  components: {
    ActionButton,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
  },
};
</script>
