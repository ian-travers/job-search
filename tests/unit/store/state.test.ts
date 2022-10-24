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

  it("stores all degrees that jobs may require", () => {
    const startingState = state();

    expect(startingState.degrees).toEqual([]);
  });

  it("stores selected organizations for filtering purpose", () => {
    const startingState = state();

    expect(startingState.selectedOrganizations).toEqual([]);
  });

  it("stores selected job types for filtering purpose", () => {
    const startingState = state();

    expect(startingState.selectedJobTypes).toEqual([]);
  });

  it("stores selected degrees for filtering purpose", () => {
    const startingState = state();

    expect(startingState.selectedDegrees).toEqual([]);
  });
});
