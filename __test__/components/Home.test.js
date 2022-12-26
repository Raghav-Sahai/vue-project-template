import Home from "../../src/components/Home.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";

describe("Home.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Home);
  });

  describe("When the component is rendered", () => {
    it("Then the header has the proper text", () => {
      const header = wrapper.find("#homePage");
      expect(header.text()).toBe("Home Page");
    });
  });
});
