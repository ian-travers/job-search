import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);

    wrapper.setData({
      company: "Super Corp",
    });

    expect(wrapper.text()).toMatch("Super Corp");
  });
});
