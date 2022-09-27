import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
    },
    ...config,
  });

  it("renders child", async () => {
    const configSlots = {
      slots: {
        default: "<h3>Nested Child</h3>",
      },
    };

    const wrapper = mount(Accordion, createConfig(configSlots));

    expect(wrapper.text()).not.toMatch("Nested Child");

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    expect(wrapper.text()).toMatch("Nested Child");
  });

  describe("when we don't provide custom child content", () => {
    it("renders default content", async () => {
      const configSlots = {
        slots: {},
      };

      const wrapper = mount(Accordion, createConfig(configSlots));

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      expect(wrapper.text()).toMatch("Woops, no content was provided.");
    });
  });
});
