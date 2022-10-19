import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

const axiosGetMock = axios.get as jest.Mock;

describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          img: "Some img",
          title: "Some title",
          description: "Some description",
          ...data,
        },
      ],
    });
  };

  it("provide IMG attribute to parent", async () => {
    const data = { img: "Some img" };
    mockSpotlightResponse(data);
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <p>{{ slotProps.img }}</p>
        </template>`,
      },
    });
    await flushPromises();

    expect(wrapper.text()).toMatch("Some img");
  });

  it("provide TITLE attribute to parent", async () => {
    const data = { img: "Some title" };
    mockSpotlightResponse(data);
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <p>{{ slotProps.title }}</p>
        </template>`,
      },
    });
    await flushPromises();

    expect(wrapper.text()).toMatch("Some title");
  });

  it("provide DESCRIPTION attribute to parent", async () => {
    const data = { img: "Some description" };
    mockSpotlightResponse(data);
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <p>{{ slotProps.description }}</p>
        </template>`,
      },
    });
    await flushPromises();

    expect(wrapper.text()).toMatch("Some description");
  });
});
