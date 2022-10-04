import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS_BY_ORGANIZATIONS,
  FILTERED_JOBS_BY_JOB_TYPES,
  FILTERED_JOBS,
} from "@/store/costants";

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));

    return uniqueOrganizations;
  },

  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) =>
      state.selectedOrganizations.includes(job.organization)
    );
  },

  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));

    return uniqueJobTypes;
  },

  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) =>
      state.selectedJobTypes.includes(job.jobType)
    );
  },

  [FILTERED_JOBS](state) {
    const noSelectedOrganizations = state.selectedOrganizations.length === 0;
    const noSelectedJobTypes = state.selectedJobTypes.length === 0;

    if (noSelectedOrganizations && noSelectedJobTypes) {
      return state.jobs;
    }

    return state.jobs
      .filter((job) => state.selectedJobTypes.includes(job.jobType))
      .filter((job) => state.selectedOrganizations.includes(job.organization));
  },
};

export default getters;
