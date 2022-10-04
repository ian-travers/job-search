import { mount } from "@vue/test-utils";

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("render unique list of job types for filtering", async () => {
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-time", "Remote"]),
      },
    };
    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig($store));
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const jobTypeLabels = wrapper.findAll("[data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());

    expect(jobTypes).toEqual(["Full-time", "Remote"]);
  });

  it("communicates thar user has selected checkbox for job type", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-tyme", "Remote"]),
      },
      commit,
    };
    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig($store));
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const remoteInput = wrapper.find("[data-test='Remote']");
    await remoteInput.setChecked();

    expect(commit).toHaveBeenLastCalledWith("ADD_SELECTED_JOB_TYPES", [
      "Remote",
    ]);
  });
});
