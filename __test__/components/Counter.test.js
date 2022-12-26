import Counter from "../../src/components/Counter.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useCounterStore } from "../../src/stores/counter";

describe("Counter.vue", () => {
  let wrapper;
  let counter;
  beforeEach(() => {
    wrapper = mount(Counter, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    counter = useCounterStore();
  });

  describe("When the component is rendered", () => {
    it("Then the initial value of the counter is 1", () => {
      expect(counter.count).toBe(1);
    });
  });
});
