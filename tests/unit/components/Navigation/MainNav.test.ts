import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import { useUserStore } from "@/store/UserStore";

import MainNav from "@/components/Navigation/MainNav.vue";
import { LOGIN_USER, LOGOUT_USER } from "@/store/costants";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      plugins: [createTestingPinia()],
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    const wrapper = shallowMount(MainNav, createConfig());

    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
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
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");

      expect(loginButton.exists()).toBe(true);
    });

    it("issues call to Pinia to login user", async () => {
      const wrapper = shallowMount(MainNav, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                UserStore: {
                  isLoggedIn: false,
                },
              },
            }),
          ],
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });
      const userStore = useUserStore();

      expect(userStore.isLoggedIn).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      expect(userStore[LOGIN_USER]).toHaveBeenCalledTimes(1);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile image", () => {
      const wrapper = shallowMount(MainNav, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                UserStore: {
                  isLoggedIn: true,
                },
              },
            }),
          ],
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnav menu with additional info", () => {
      const wrapper = shallowMount(MainNav, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                UserStore: {
                  isLoggedIn: true,
                },
              },
            }),
          ],
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });
      const subnav = wrapper.find("[data-test='subnav']");

      expect(subnav.exists()).toBe(true);
    });

    it("issues call to Pinia to logout user", async () => {
      const wrapper = shallowMount(MainNav, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                UserStore: {
                  isLoggedIn: true,
                },
              },
            }),
          ],
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
      });
      const userStore = useUserStore();

      const logoutButton = wrapper.find("[data-test='logout-button']");
      await logoutButton.trigger("click");

      expect(userStore[LOGOUT_USER]).toHaveBeenCalledTimes(1);
    });
  });
});
