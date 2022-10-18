import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFetchJobsDispatch,
} from "@/store/composables";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });

      const result = useFilteredJobs();

      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useUniqueJobTypes", () => {
    it("retrieves unique job types from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: ["Full-time", "Remote"],
        },
      });

      const result = useUniqueJobTypes();

      expect(result.value).toEqual(["Full-time", "Remote"]);
    });
  });

  describe("useUniqueOrganizations", () => {
    it("retrieves unique organizations from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: ["Google", "Amazon"],
        },
      });

      const result = useUniqueOrganizations();

      expect(result.value).toEqual(["Google", "Amazon"]);
    });
  });

  describe("useFetchJobsDispatch", () => {
    it("sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });

      useFetchJobsDispatch();

      expect(dispatch).toHaveBeenLastCalledWith("FETCH_JOBS");
    });
  });
});
