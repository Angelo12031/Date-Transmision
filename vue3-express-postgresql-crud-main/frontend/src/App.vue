<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Car Shop</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/car" class="nav-link">Car List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
          <li class="nav-item">
              <router-link to="/carpage" class="nav-link">Car Page</router-link>
          </li>

      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
