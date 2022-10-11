import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("render unique list of job types for filtering", async () => {
    useUniqueJobTypes.mockReturnValue(["Full-time", "Remote"]);
    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const jobTypeLabels = wrapper.findAll("[data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());

    expect(jobTypes).toEqual(["Full-time", "Remote"]);
  });

  describe("when user click checkbox", () => {
    it("communicates thar user has selected checkbox for job type", async () => {
      useUniqueJobTypes.mockReturnValue(["Full-time", "Remote"]);
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const remoteInput = wrapper.find("[data-test='Remote']");
      await remoteInput.setChecked();

      expect(commit).toHaveBeenLastCalledWith("ADD_SELECTED_JOB_TYPES", [
        "Remote",
      ]);
    });

    it("navigate user to job results page to see fresh batch of filtered jobs", async () => {
      useUniqueJobTypes.mockReturnValue(["Full-time", "Remote"]);
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const remoteInput = wrapper.find("[data-test='Remote']");
      await remoteInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
