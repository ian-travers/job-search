import getters from "@/store/getters";
import { createDegree, createJob, createState } from "./utils";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
        createJob({ organization: "Meta" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);

      expect(result).toEqual(new Set(["Google", "Amazon", "Meta"]));
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Intern" }),
        createJob({ jobType: "Remote" }),
        createJob({ jobType: "Intern" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_JOB_TYPES(state);

      expect(result).toEqual(new Set(["Full-time", "Intern", "Remote"]));
    });
  });

  describe("UNIQUE_DEGREES", () => {
    it("extracts unique degree value", () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);

      expect(result).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when user has not selected any organization", () => {
      it("includes job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);

        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given organization", () => {
      const state = createState({
        selectedOrganizations: ["Google"],
      });
      const job = createJob({ organization: "Google" });
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);

      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when user has not selected any job type", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({ jobType: "Full-time" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);

        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given job type", () => {
      const state = createState({
        selectedJobTypes: ["Full-time"],
      });
      const job = createJob({ jobType: "Full-time" });
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);

      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when user has not selected any degree", () => {
      it("includes job", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const job = createJob({ degree: "Master's" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);

        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given degree", () => {
      const state = createState({
        selectedDegrees: ["Master's", "Ph.D"],
      });
      const job = createJob({ degree: "Master's" });
      const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);

      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_SKILL", () => {
    it("identifies if job matches user's skill", () => {
      const state = createState({ skillsSearchTerm: "Vue" });
      const job = createJob({ title: "Vue developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);

      expect(includeJob).toBe(true);
    });

    it("handles inconsistent character casing", () => {
      const state = createState({ skillsSearchTerm: "vUe" });
      const job = createJob({ title: "Vue developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);

      expect(includeJob).toBe(true);
    });

    describe("when the user has not entered any skill", () => {
      it("includes job", () => {
        const state = createState({ skillsSearchTerm: "" });
        const job = createJob({ title: "Vue developer" });
        const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);

        expect(includeJob).toBe(true);
      });
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organization, job type, degree and skills", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_SKILL = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_SKILL,
      };
      const job = createJob({ id: 1, title: "Best job ever" });
      const state = createState({
        jobs: [job],
      });
      const result = getters.FILTERED_JOBS(state, mockGetters);

      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_SKILL).toHaveBeenCalledWith(job);
    });
  });
});
