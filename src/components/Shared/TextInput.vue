<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :value="value"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",

  props: {
    placeholder: { type: String, default: "" },
  },

  data() {
    return {
      value: "",
    };
  },

  methods: {
    handleInput(event) {
      this.value = event.target.value;
    },
  },
};
</script>
