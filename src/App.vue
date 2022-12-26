<template>
  <div id="container">
    <h1 id="header">Vue Project Template</h1>

    <div class="mb-10">
      <ul>
        <li><router-link to="/">Go to Home</router-link></li>
        <li><router-link to="/counter">Go to Counter</router-link></li>
      </ul>
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped lang="postcss">
#container {
  @apply text-center;
}
#header {
  @apply text-3xl font-bold underline text-blue-800;
}
a {
  @apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
}
</style>
