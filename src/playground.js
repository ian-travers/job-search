const { ref, computed } = require("vue");

const person = ref({
  name: "Boris",
});

const title = computed(() => person.value.name + " the Great");

console.log(title.value);

person.value.name = "Peter";

console.log(title.value);
