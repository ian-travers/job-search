<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ActionButton",

  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },

  setup(props) {
    const buttonClass = computed(() => {
      return {
        [props.type]: true,
      };
    });

    return { buttonClass };
  },
};
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
