<template>
  <main-nav />
  <hero />
</template>

<script>
import Hero from "@/components/Hero.vue";
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: { MainNav, Hero },
};
</script>
