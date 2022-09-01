import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

import Headline from "@/components/Headline";

describe("Headline", () => {
  it("displays introductory action verb", () => {
    jest.useFakeTimers("legacy");

    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");

    expect(actionPhrase.text()).toBe("Build for everyone");

    jest.useRealTimers();
  });

  it("changes action verb in a consistent interval", () => {
    jest.useFakeTimers("legacy");

    mount(Headline);
    expect(setInterval).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("swaps action verb after first interval", async () => {
    jest.useFakeTimers("legacy");

    const wrapper = mount(Headline);

    jest.runOnlyPendingTimers();
    await nextTick(); // forces vue update the DOM (template section)

    const actionPhrase = wrapper.find("[data-test='action-phrase']");

    expect(actionPhrase.text()).toBe("Create for everyone");

    jest.useRealTimers();
  });
});
