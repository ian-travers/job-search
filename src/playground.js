const { reactive, computed, toRefs } = require("vue");

const person = reactive({
  firstName: "Boris",
  lastName: "Paskhaver",
});

const { firstName, lastName } = toRefs(person);

const title = computed(() => `${firstName.value} ${lastName.value} the Great`);

console.log(title.value);

person.firstName = "Oliver";

console.log(title.value);

person.lastName = "Ewing";

console.log(title.value);
