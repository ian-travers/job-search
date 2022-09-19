import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "ClearAir",
    locations: ["Los Angeles"],
    minimumQualifications: ["Programming"],
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

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["New York", "Dallas"] });
    const wrapper = mount(JobListing, createObject(jobProps));

    expect(wrapper.text()).toMatch("New York");
    expect(wrapper.text()).toMatch("Dallas");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Coding", "Testing"],
    });
    const wrapper = mount(JobListing, createObject(jobProps));

    expect(wrapper.text()).toMatch("Coding");
    expect(wrapper.text()).toMatch("Testing");
  });

  it("links to specific job's page", () => {
    const jobProps = createJobProps({ id: 145 });
    const wrapper = mount(JobListing, createObject(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");

    expect(toProp).toBe("/jobs/results/145");
  });
});
