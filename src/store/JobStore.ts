import { defineStore } from "pinia";

import { JobState } from "@/store/types";
import { Job } from "@/api/types";
import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_DEGREE,
  INCLUDE_JOB_BY_SKILL,
  FILTERED_JOBS,
} from "@/store/costants";
import state from "./state";
import getters from "./getters";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
}

export const useJobStore = defineStore("JobStore", {
  state: () => ({
    jobs: [],
    degrees: [],
    skillsSearchTerm: "",
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
  }),

  getters: {
    [UNIQUE_ORGANIZATIONS](state: JobState) {
      const uniqueOrganizations = new Set<string>();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));

      return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state: JobState) {
      const uniqueJobTypes = new Set<string>();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));

      return uniqueJobTypes;
    },

    [UNIQUE_DEGREES](state: JobState) {
      return state.degrees.map((degree) => degree.degree);
    },
    [INCLUDE_JOB_BY_ORGANIZATION](state: JobState) {
      (job: Job) => {
        if (state.selectedOrganizations.length === 0) return true;

        return state.selectedOrganizations.includes(job.organization);
      };
    },
    [INCLUDE_JOB_BY_JOB_TYPE]: (state: JobState) => (job: Job) => {
      if (state.selectedJobTypes.length === 0) return true;

      return state.selectedJobTypes.includes(job.jobType);
    },
    [INCLUDE_JOB_BY_DEGREE]: (state: JobState) => (job: Job) => {
      if (state.selectedDegrees.length === 0) return true;

      return state.selectedDegrees.includes(job.degree);
    },
    [INCLUDE_JOB_BY_SKILL]: (state: JobState) => (job: Job) => {
      return job.title
        .toLocaleLowerCase()
        .includes(state.skillsSearchTerm.toLocaleLowerCase());
    },
    [FILTERED_JOBS](state: JobState) {
      return (getters: IncludeJobGetters) =>
        state.jobs
          .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
          .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
          .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
          .filter((job) => getters.INCLUDE_JOB_BY_SKILL(job));
    },
  },
});
