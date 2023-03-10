import App from "../src/App.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
  });

  describe("When the component is rendered", () => {
    it("Then the header has the proper text", () => {
      const header = wrapper.find("#header");
      expect(header.text()).toBe("Vue Project Template");
    });
  });
});
