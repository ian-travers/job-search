import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "ClearAir",
    ...jobProps,
  });

  const createObject = (jobProps) => ({
    props: {
      job: { ...jobProps },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createObject(jobProps));

    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "Air Corp" });
    const wrapper = mount(JobListing, createObject(jobProps));

    expect(wrapper.text()).toMatch("Air Corp");
  });
});
