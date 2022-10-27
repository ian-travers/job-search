import { shallowMount, VueWrapper } from "@vue/test-utils";
jest.mock("vuex");

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Remote"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Amazon"]));
    useUniqueDegreesMock.mockReturnValue(["Ph.D.", "Master's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='job-types-filter']"
    ) as VueWrapper;
    const { header, uniqueValues, mutation } = jobTypesFilter.props();

    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Remote"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Remote"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Amazon"]));
    useUniqueDegreesMock.mockReturnValue(["Ph.D.", "Master's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const organizationsFilter = wrapper.findComponent(
      "[data-test='organizations-filter']"
    ) as VueWrapper;
    const { header, uniqueValues, mutation } = organizationsFilter.props();

    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["Amazon"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });

  it("allows user to filter jobs by degrees", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Remote"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Amazon"]));
    useUniqueDegreesMock.mockReturnValue(["Ph.D.", "Master's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const degreesFilter = wrapper.findComponent(
      "[data-test='degrees-filter']"
    ) as VueWrapper;
    const { header, uniqueValues, mutation } = degreesFilter.props();

    expect(header).toBe("Degrees");
    expect(uniqueValues).toEqual(["Ph.D.", "Master's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
