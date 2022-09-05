<template>
  <main-nav />
  <hero />
</template>

<script>
import Hero from "@/components/Hero.vue";
import MainNav from "@/components/Navigation/MainNav.vue";

export default {
  name: "App",
  components: { MainNav, Hero },
};
</script>
