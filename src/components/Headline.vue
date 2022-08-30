<template>
  <section>
    <h1 class="text-8xl font-bold tracking-tighter mb-14">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "Headline",

  data() {
    return {
      action: "Build",
      interval: null,
    };
  },

  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },

  created() {
    this.changeTitle();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % 4;

        this.action = actions[nextActionIndex];
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
