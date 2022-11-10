import { defineStore } from "pinia";
import { UserState } from "@/store/types";
import { LOGIN_USER, LOGOUT_USER } from "@/store/costants";

export const useUserStore = defineStore("UserStore", {
  state: (): UserState => ({
    isLoggedIn: false,
    name: "John Doe",
  }),

  getters: {
    firstName(): string {
      return this.name.split(" ")[0];
    },
  },

  actions: {
    [LOGIN_USER]() {
      this.isLoggedIn = true;
    },
    [LOGOUT_USER]() {
      this.isLoggedIn = false;
    },
  },
});
