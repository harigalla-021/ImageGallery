<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn color="success" href="/">Home</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/gallery"  text>
        <span class="mr-2">View Gallery</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>