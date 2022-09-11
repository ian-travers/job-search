<template>
  <div class="text-center mt-8">Job View</div>
  <div class="text-center mt-2">{{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",

  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>
