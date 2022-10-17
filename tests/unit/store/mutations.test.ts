import mutations from "@/store/mutations";
import state from "@/store/state";
import { GlobalState } from "@/store/types";

describe("mutations", () => {
  describe("LIGIN_USER", () => {
    it("logs user in", () => {
      // const state = { isLoggedIn: false } as GlobalState;
      const startingState = state();
      mutations.LOGIN_USER(startingState);

      expect(startingState.isLoggedIn).toBe(true);
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

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates selected job types for filtering purpose", () => {
      const state = { selectedJobTypes: [] };
      mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);

      expect(state.selectedJobTypes).toEqual(["Full-time", "Part-time"]);
    });
  });
});
