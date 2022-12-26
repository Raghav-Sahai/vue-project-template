import App from "../src/App.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '../src/stores/counter'

describe("App.vue", () => {
  let wrapper;
  let counter;
  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    counter = useCounterStore()
  });

  describe("When the component is rendered", () => {
    it("Then the header has the proper text", () => {
      const header = wrapper.find("#header");
      expect(header.text()).toBe("Vue Project Template");
    });
  });
});
