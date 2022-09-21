import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
  },

  strict: process.env.NODE_ENV !== "production",
});

console.log(store.state);
store.commit("LOGIN_USER");
console.log(store.state);

export default store;
