import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  it("fetched jobs that candidate can apply to", async () => {
    await getJobs();

    expect(axios.get).toHaveBeenCalledWith("http://fake-api.com/jobs");
  });
});
