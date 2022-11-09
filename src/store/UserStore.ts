import { defineStore } from "pinia";
import { UserState } from "@/store/types";

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
});
