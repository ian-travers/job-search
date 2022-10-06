const { reactive, computed, toRef } = require("vue");

const person = reactive({
  firstName: "Boris",
  lastName: "Paskhaver",
});

const firstName = toRef(person, "firstName");
const lastName = toRef(person, "lastName");

const title = computed(() => `${firstName.value} ${lastName.value} the Great`);

console.log(title.value);

person.firstName = "Oliver";

console.log(title.value);

person.lastName = "Ewing";

console.log(title.value);
