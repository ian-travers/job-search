<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "primary",
    validator: (value: string) => {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true,
  };
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium transition;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue rounded;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:text-white hover:bg-brand-blue-2;
}
</style>
