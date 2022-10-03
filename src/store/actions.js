import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/costants";
import getJobs from "@/api/getJobs";

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

export default actions;
