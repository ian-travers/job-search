<template>
  <div class="border-b border-brand-gray-2 py-5">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Woops, no content was provided.</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Accordion",

  setup() {
    const header = ref("Title");
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    return { header, open, isOpen };
  },

  //   props: {
  //     header: {
  //       type: String,
  //       required: true,
  //     },
  //   },

  //   data() {
  //     return {
  //       isOpen: false,
  //     };
  //   },

  //   computed: {
  //     caretIcon() {
  //       return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //     },
  //   },

  //   methods: {
  //     open() {
  //       this.isOpen = !this.isOpen;
  //     },
  //   },
};
</script>
