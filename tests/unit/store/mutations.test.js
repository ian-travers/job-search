import mutations from "@/store/mutations";

describe("mutations", () => {
  describe("LIGIN_USER", () => {
    it("logs user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);

      expect(state.isLoggedIn).toBe(true);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job 1", "Job 2"]);

      expect(state.jobs).toEqual(["Job 1", "Job 2"]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates selected organizations for filtering purpose", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);

      expect(state.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });
});
