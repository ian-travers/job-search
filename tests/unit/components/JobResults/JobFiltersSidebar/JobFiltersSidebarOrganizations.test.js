import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations";

describe("JobFiltersSidebarOrganizations", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("render unique list of organizations for filtering", async () => {
    useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const organizationLabels = wrapper.findAll("[data-test='organization']");
    const organizations = organizationLabels.map((node) => node.text());

    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  describe("when user click checkbox", () => {
    it("communicates thar user has selected checkbox for organization", async () => {
      useUniqueOrganizations.mockReturnValue(["Google", "Amazon"]);
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();

      expect(commit).toHaveBeenLastCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]);
    });
  });

  it("navigate user to job results page to see fresh batch of filtered jobs", async () => {
    useUniqueOrganizations.mockReturnValue(["Google", "Amazon"]);
    useStore.mockReturnValue({ commit: jest.fn() });
    const push = jest.fn();
    useRouter.mockReturnValue({ push });
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const googleInput = wrapper.find("[data-test='Google']");
    await googleInput.setChecked();

    expect(push).toHaveBeenCalledWith({ name: "JobResults" });
  });
});
