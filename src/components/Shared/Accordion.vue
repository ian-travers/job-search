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

<script setup lang="ts">
import { computed, ref } from "vue";

defineProps({
  header: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() =>
  isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
);
</script>
