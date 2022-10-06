const { ref, computed } = require("vue");

const name = ref("Boris");
const title = computed(() => name.value + " the Great");

console.log(title.value);

name.value = "Peter";

console.log(title.value);
