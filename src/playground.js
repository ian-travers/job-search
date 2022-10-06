const { reactive, computed } = require("vue");

const person = reactive({
  firstName: "Boris",
  lastName: "Paskhaver",
});

const title = computed(
  () => `${person.firstName} ${person.lastName} the Great`
);

console.log(title.value);

person.firstName = "Peter";

console.log(title.value);
