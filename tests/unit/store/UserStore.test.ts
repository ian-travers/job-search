import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "@/store/UserStore";
import { LOGIN_USER, LOGOUT_USER } from "@/store/costants";

describe("UserStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores isLoggedIn", () => {
    const userStore = useUserStore();

    expect(userStore.isLoggedIn).toBe(false);
  });

  it("stores default name", () => {
    const userStore = useUserStore();

    expect(userStore.name).toBe("John Doe");
  });

  it("might log in the user", () => {
    const userStore = useUserStore();

    expect(userStore.isLoggedIn).toBe(false);

    userStore[LOGIN_USER]();

    expect(userStore.isLoggedIn).toBe(true);
  });

  it("might log out the user", () => {
    const userStore = useUserStore();
    userStore.isLoggedIn = true;

    userStore[LOGOUT_USER]();

    expect(userStore.isLoggedIn).toBe(false);
  });
});
