import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { GlobalState } from "@/store/types";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    useStoreMock.mockReturnValue({
      state: {
        isLoggedIn: false,
      },
    });
    const wrapper = shallowMount(MainNav, createConfig());

    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    useStoreMock.mockReturnValue({
      state: {
        isLoggedIn: false,
      },
    });
    const wrapper = shallowMount(MainNav, createConfig());
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
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

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      useStoreMock.mockReturnValue({
        state: {
          isLoggedIn: false,
        },
      });
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");

      expect(loginButton.exists()).toBe(true);
    });

    it("issues call to Vuex to login user", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({
        state: {
          isLoggedIn: false,
        },
        commit,
      });
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toBeCalledWith("LOGIN_USER");
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile image", () => {
      useStoreMock.mockReturnValue({
        state: {
          isLoggedIn: true,
        },
      });
      const wrapper = shallowMount(MainNav, createConfig());

      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnav menu with additional info", () => {
      useStoreMock.mockReturnValue({
        state: {
          isLoggedIn: true,
        },
      });
      const wrapper = shallowMount(MainNav, createConfig());
      const subnav = wrapper.find("[data-test='subnav']");

      expect(subnav.exists()).toBe(true);
    });
  });
});
