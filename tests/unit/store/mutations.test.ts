import mutations from "@/store/mutations";
import { createDegree, createJob, createState } from "./utils";

describe("mutations", () => {
  describe("LIGIN_USER", () => {
    it("logs user in", () => {
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);

      expect(startingState.isLoggedIn).toBe(true);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const startingState = createState({ jobs: [] });
      const jobOne = createJob();
      const jobTwo = createJob();
      mutations.RECEIVE_JOBS(startingState, [jobOne, jobTwo]);

      expect(startingState.jobs).toEqual([jobOne, jobTwo]);
    });
  });

  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const startingState = createState({ degrees: [] });
      const degreeOne = createDegree();
      const degreeTwo = createDegree();
      mutations.RECEIVE_DEGREES(startingState, [degreeOne, degreeTwo]);

      expect(startingState.degrees).toEqual([degreeOne, degreeTwo]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates selected organizations for filtering purpose", () => {
      const startingState = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Org1", "Org2"]);

      expect(startingState.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates selected job types for filtering purpose", () => {
      const startingState = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(startingState, [
        "Full-time",
        "Part-time",
      ]);

      expect(startingState.selectedJobTypes).toEqual([
        "Full-time",
        "Part-time",
      ]);
    });
  });

  describe("ADD_SELECTED_DEGREES", () => {
    it("keeps track of which degrees user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(startingState, ["Ph.D."]);

      expect(startingState.selectedDegrees).toEqual(["Ph.D."]);
    });
  });
});
