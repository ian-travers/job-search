import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton.vue";

describe("Action Button", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Click me",
      },
    });

    expect(wrapper.text()).toMatch("Click me");
  });

  it("applies one of several classes", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
        text: "Click me",
      },
    });

    const button = wrapper.find("button");

    expect(button.classes("primary")).toBe(true);
  });
});
