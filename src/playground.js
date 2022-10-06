const { reactive, computed } = require("vue");

const person = reactive({
  name: "Boris",
});

const title = computed(() => person.name + " the Great");

console.log(title.value);

person.name = "Peter";

console.log(title.value);
