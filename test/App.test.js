import App from "../src/App.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
  });

  describe("When the component is rendered", () => {
    it("Then the component is a instance of vue", () => {
      const header = wrapper.find("#header");
      expect(header.text()).toBe("Hello world");
    });
  });
});
