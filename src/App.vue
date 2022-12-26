<template>
  <div id="container">
    <h1 id="header">Vue Project Template</h1>
    <p>Current Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button class="btn" @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "./stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();

const { doubleCount, count } = storeToRefs(store);
const { increment } = store;
</script>

<style scoped lang="postcss">
#container {
  @apply text-center;
}
#header {
  @apply text-3xl font-bold underline text-blue-800;
}
.btn {
  @apply font-bold py-2 px-4 rounded bg-orange-400 text-white;
}
</style>
