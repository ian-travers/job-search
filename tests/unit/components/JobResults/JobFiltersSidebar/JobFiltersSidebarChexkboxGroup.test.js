import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
      uniqueValues: new Set(["ValueA", "ValueB"]),
      mutation: "Test mutation",
      ...props,
    },
  });

  it("render unique list of values for filtering", async () => {
    const props = {
      uniqueValues: new Set(["ValueA", "ValueB"]),
    };
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props));
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputValues = inputLabels.map((node) => node.text());

    expect(inputValues).toEqual(["ValueA", "ValueB"]);
  });

  describe("when user click checkbox", () => {
    it("communicates thar user has selected checkbox for value", async () => {
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const props = {
        uniqueValues: new Set(["ValueC"]),
        mutation: "SOME_MUTATION",
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const remoteInput = wrapper.find("[data-test='ValueC']");
      await remoteInput.setChecked();

      expect(commit).toHaveBeenLastCalledWith("SOME_MUTATION", ["ValueC"]);
    });

    it("navigate user to job results page to see fresh batch of filtered jobs", async () => {
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });

      const props = {
        uniqueValues: new Set(["Remote"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const remoteInput = wrapper.find("[data-test='Remote']");
      await remoteInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
