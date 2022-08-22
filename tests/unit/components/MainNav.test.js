import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("li");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());

    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
