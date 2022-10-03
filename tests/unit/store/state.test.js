import state from "@/store/state";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();

    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores jobs listings", () => {
    const startingState = state();

    expect(startingState.jobs).toEqual([]);
  });

  it("stores selected organizations for filtering purpose", () => {
    const startingState = state();

    expect(startingState.selectedOrganizations).toEqual([]);
  });
});
