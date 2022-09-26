<template>
  <div class="flex flex-col bg-white border-r border-brand-gray-1 w-96 p-4">
    <section class="pb5">
      <div class="flex justify-between">
        <h3 class="text-base font-semibold my-4">What do you want to do?</h3>
        <div class="text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <accordion />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFIltersSidebar",

  components: { ActionButton, Accordion },
};
</script>
