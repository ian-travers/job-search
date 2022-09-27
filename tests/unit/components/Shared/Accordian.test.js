import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  it("renders child", async () => {
    const wrapper = mount(Accordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        default: "<h3>Nested Child</h3>",
      },
    });

    expect(wrapper.text()).not.toMatch("Nested Child");

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    expect(wrapper.text()).toMatch("Nested Child");
  });
});
