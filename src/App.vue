<template>
  <v-app>
    <header>
      <app-header />
    </header>
    <v-content>
      <router-view />
    </v-content>
    <footer>
      <app-footer />
    </footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter
  }
};
</script>
