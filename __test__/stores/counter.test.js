import { useCounterStore } from "../../src/stores/counter";
import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";

describe("counter.js", () => {
  let counter;
  beforeEach(() => {
    setActivePinia(createPinia());
    counter = useCounterStore();
  });

  describe("State", () => {
    describe("When the counter store is initialized", () => {
      it("Then the proper initial state of the count is returned", () => {
        expect(counter.count).toBe(1);
      });
    });
  });

  describe("Getters", () => {
    describe("doubleCount", () => {
      describe("When doubleCount is calculated", () => {
        it("Then the proper doubled count value should be returned", () => {
          expect(counter.doubleCount).toBe(2);
        });
      });
    });
  });

  describe("Actions", () => {
    describe("increment", () => {
      describe("When increment is invoked", () => {
        it("Then the proper incremented count is returned", () => {
          counter.increment();
          expect(counter.count).toBe(2);
        });
      });
    });
  });
});
