const { reactive, computed } = require("vue");

const person = reactive({
  firstName: "Boris",
  lastName: "Paskhaver",
});

const title = computed(
  () => `${person.firstName} ${person.lastName} the Great`
);
const titleLength = computed(() => title.value.length);

console.log(title.value);
console.log(titleLength.value);

person.firstName = "Oliver";

console.log(title.value);
console.log(titleLength.value);
