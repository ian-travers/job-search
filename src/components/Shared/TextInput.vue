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
    value: { type: String, required: true },
  },

  methods: {
    handleInput($event) {
      this.$emit("handleInput", $event.target.value);
    },
  },
};
</script>
