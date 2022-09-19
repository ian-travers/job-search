import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createObject = () => ({
    props: {
      job: {
        title: "Vue Developer",
        organization: "ClearAir",
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const wrapper = mount(JobListing, createObject());

    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", () => {
    const wrapper = mount(JobListing, createObject());

    expect(wrapper.text()).toMatch("ClearAir");
  });
});
