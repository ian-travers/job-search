import { mount } from "@vue/test-utils";

import Subnav from "@/components/Subnav";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(Subnav, {
        data() {
          return {
            onJobResultPage: true,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT displays job count", () => {
      const wrapper = mount(Subnav, {
        data() {
          return {
            onJobResultPage: false,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(false);
    });
  });
});
