<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
defineProps({
  placeholder: { type: String, default: "" },
  modelValue: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
