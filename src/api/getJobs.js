import axios from "axios";

const getJobs = () => {
  const baseURL = process.env.VUE_APP_API_URL;
  axios.get(`${baseURL}/jobs`);
};

export default getJobs;
