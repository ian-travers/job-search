<template>
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
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",

  components: { Accordion },

  computed: {
    UNIQUE_ORGANIZATIONS() {
      return this.$store.getters.UNIQUE_ORGANIZATIONS;
    },
  },
};
</script>
