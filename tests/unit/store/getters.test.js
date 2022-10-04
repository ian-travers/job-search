import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
          { organization: "Meta" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);

      expect(result).toEqual(new Set(["Google", "Amazon", "Meta"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are assosiated with the given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
          { organization: "Meta" },
        ],
        selectedOrganizations: ["Amazon", "Meta"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);

      expect(filteredJobs).toEqual([
        { organization: "Amazon" },
        { organization: "Meta" },
      ]);
    });

    describe("when user has not selected any organization", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Google" },
            { organization: "Meta" },
          ],
          selectedOrganizations: [],
        };
        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);

        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
          { organization: "Meta" },
        ]);
      });
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Intern" },
          { jobType: "Remote" },
          { jobType: "Intern" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);

      expect(result).toEqual(new Set(["Full-time", "Intern", "Remote"]));
    });
  });

  describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
    it("identifies jobs that are assosiated with the given job types", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Remote" },
          { jobType: "Full-time" },
        ],
        selectedJobTypes: ["Full-time", "Remote"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);

      expect(filteredJobs).toEqual([
        { jobType: "Full-time" },
        { jobType: "Remote" },
        { jobType: "Full-time" },
      ]);
    });

    describe("when user has not selected any job types", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { jobType: "Full-time" },
            { jobType: "Part-time" },
            { jobType: "Remote" },
            { jobType: "Full-time" },
          ],
          selectedJobTypes: [],
        };
        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);

        expect(filteredJobs).toEqual([
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Remote" },
          { jobType: "Full-time" },
        ]);
      });
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when user has not selected any organization", () => {
      it("includes job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);

        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given organization", () => {
      const state = {
        selectedOrganizations: ["Google"],
      };
      const job = { organization: "Google" };
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);

      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when user has not selected any job type", () => {
      it("includes job", () => {
        const state = {
          selectedJobTypes: [],
        };
        const job = { jobType: "Full-time" };
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);

        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given job type", () => {
      const state = {
        selectedJobTypes: ["Full-time"],
      };
      const job = { jobType: "Full-time" };
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);

      expect(includeJob).toBe(true);
    });
  });
});
