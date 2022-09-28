import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "Some Title",
      },
    });

    expect(wrapper.text()).toMatch("Some Title");
  });

  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "Some Subtitle",
      },
    });

    expect(wrapper.text()).toMatch("Some Subtitle");
  });
});
