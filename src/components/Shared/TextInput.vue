<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",

  props: {
    placeholder: { type: String, default: "" },
    modelValue: { type: String, required: true },
  },

  emits: ["update:modelValue"],

  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
