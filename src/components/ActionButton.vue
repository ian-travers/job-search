<template>
  <button
    class="font-medium text-white bg-brand-blue-1 border-0 rounded hover:shadow-blue transition px-5 py-3"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
};
</script>
