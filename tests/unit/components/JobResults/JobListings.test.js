import { shallowMount } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);

    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });
});
