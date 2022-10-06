const { reactive, computed } = require("vue");

const person = reactive({
  firstName: "Boris",
  lastName: "Paskhaver",
});

const { firstName, lastName } = person;

const title = computed(() => `${firstName} ${lastName} the Great`);

console.log(title.value);

person.firstName = "Oliver";

console.log(title.value);

person.lastName = "Ewing";

console.log(title.value);
