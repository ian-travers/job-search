import { ref } from "vue";
import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import { useFetchJobsDispatch, useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import useCurrentPage from "@/composables/useCurrentPage";
jest.mock("@/composables/useCurrentPage");

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
jest.mock("@/composables/usePreviousAndNextPages");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when components mounts", () => {
    it("makes call to fetch jobs from API", () => {
      useFilteredJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue({ value: 2 });
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });
      shallowMount(JobListings, createConfig());

      expect(useFetchJobsDispatch).toHaveBeenCalled();
    });
  });

  it("creates a job listing for a maximum of 10 jobs received job", async () => {
    useFilteredJobs.mockReturnValue({ value: Array(15).fill({}) });
    useCurrentPage.mockReturnValue({ value: 1 });
    usePreviousAndNextPages.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });

    const wrapper = shallowMount(JobListings, createConfig());
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");

    expect(jobListings).toHaveLength(10);
  });

  fit("displays page number", () => {
    useFilteredJobs.mockReturnValue({ value: [] });
    useCurrentPage.mockReturnValue(ref(2));
    usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });
    const wrapper = shallowMount(JobListings, createConfig());

    expect(wrapper.text()).toMatch("Page 2");
  });

  describe("when user is on first page of job results", () => {
    it("does not show link to previous page", () => {
      useFilteredJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue({ value: 2 });
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });

      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");

      expect(previousPage.exists()).toBe(false);
    });

    it("shows link to next page", async () => {
      useFilteredJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue({ value: 2 });
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });

      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      const numberOfJobsInStore = 12;
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");

      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when user is on last page of job results", () => {
    it("does not show link to next page", async () => {
      useFilteredJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue({ value: 2 });
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });

      const queryParams = { page: 2 };
      const $route = createRoute(queryParams);
      const numberOfJobsInStore = 12;
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");

      expect(nextPage.exists()).toBe(false);
    });

    it("shows link to previous page", async () => {
      useFilteredJobs.mockReturnValue({ value: [] });
      useCurrentPage.mockReturnValue({ value: 2 });
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 });

      const queryParams = { page: 2 };
      const $route = createRoute(queryParams);
      const numberOfJobsInStore = 12;
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");

      expect(previousPage.exists()).toBe(true);
    });
  });
});
