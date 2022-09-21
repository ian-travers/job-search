import { state, mutations } from "@/store";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();

    expect(startingState.isLoggedIn).toBe(false);
  });
});

describe("mutations", () => {
  describe("LIGIN_USER", () => {
    it("logs user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);

      expect(state.isLoggedIn).toBe(true);
    });
  });
});
