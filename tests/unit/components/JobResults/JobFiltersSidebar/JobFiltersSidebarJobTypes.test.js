import { mount } from "@vue/test-utils";

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = ($store, $router) => ({
    global: {
      mocks: {
        $store,
        $router,
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
    const $router = { push: jest.fn() };
    const wrapper = mount(
      JobFiltersSidebarJobTypes,
      createConfig($store, $router)
    );
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const jobTypeLabels = wrapper.findAll("[data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());

    expect(jobTypes).toEqual(["Full-time", "Remote"]);
  });

  describe("when user click checkbox", () => {
    it("communicates thar user has selected checkbox for job type", async () => {
      const commit = jest.fn();
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-tyme", "Remote"]),
        },
        commit,
      };
      const $router = { push: jest.fn() };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const remoteInput = wrapper.find("[data-test='Remote']");
      await remoteInput.setChecked();

      expect(commit).toHaveBeenLastCalledWith("ADD_SELECTED_JOB_TYPES", [
        "Remote",
      ]);
    });

    it("navigate user to job results page to see fresh batch of filtered jobs", async () => {
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-tyme", "Remote"]),
        },
        commit: jest.fn(),
      };
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const remoteInput = wrapper.find("[data-test='Remote']");
      await remoteInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
