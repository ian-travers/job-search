import { Commit } from "vuex";

import {
  FETCH_JOBS,
  RECEIVE_DEGREES,
  FETCH_DEGREES,
  RECEIVE_JOBS,
} from "@/store/costants";
import getJobs from "@/api/getJobs";
import getDegrees from "@/api/getDegrees";

interface Context {
  commit: Commit;
}

export const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },

  [FETCH_DEGREES]: async (context: Context) => {
    const degreess = await getDegrees();
    context.commit(RECEIVE_DEGREES, degreess);
  },
};

export default actions;
