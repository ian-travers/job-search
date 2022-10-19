import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import { Job } from "@/api/types";

import { createJob } from "../../store/utils";

describe("JobListing", () => {
  const createObject = (job: Job) => ({
    props: {
      job: { ...job },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const job = createJob({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createObject(job));

    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "Air Corp" });
    const wrapper = mount(JobListing, createObject(job));

    expect(wrapper.text()).toMatch("Air Corp");
  });

  it("renders job locations", () => {
    const job = createJob({ locations: ["New York", "Dallas"] });
    const wrapper = mount(JobListing, createObject(job));

    expect(wrapper.text()).toMatch("New York");
    expect(wrapper.text()).toMatch("Dallas");
  });

  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: ["Coding", "Testing"],
    });
    const wrapper = mount(JobListing, createObject(job));

    expect(wrapper.text()).toMatch("Coding");
    expect(wrapper.text()).toMatch("Testing");
  });

  it("links to specific job's page", () => {
    const job = createJob({ id: 145 });
    const wrapper = mount(JobListing, createObject(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");

    expect(toProp).toBe("/jobs/results/145");
  });
});
