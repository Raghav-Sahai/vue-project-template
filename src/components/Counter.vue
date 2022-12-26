<template>
  <div>
    <h2>Counter Page</h2>
    <p>Current Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button class="btn" @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();

const { doubleCount, count } = storeToRefs(store);
const { increment } = store;
</script>

<style scoped lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded bg-orange-400 text-white;
}
</style>
