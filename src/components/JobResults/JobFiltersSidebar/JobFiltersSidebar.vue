<template>
  <div class="flex flex-col bg-white border-r border-brand-gray-1 w-96 p-4">
    <section class="pb5">
      <div class="flex justify-between">
        <h3 class="text-base font-semibold my-4">What do you want to do?</h3>
        <div class="text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <accordion header="Job types"></accordion>

      <accordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-wrap">
              <li class="h-8 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Between Vue and Me" type="checkbox" class="mr-3" />
                <label for="Between Vue and Me">Between Vue</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="At Vue Brute" type="checkbox" class="mr-3" />
                <label for="At Vue Brute">At Vue Brute</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Halfman" type="checkbox" class="mr-3" />
                <label for="Halfman">Halfman</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Star Control" type="checkbox" class="mr-3" />
                <label for="Star Control">Star Control</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </accordion>
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
