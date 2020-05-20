<template>
  <div class="home">
    <v-layout mt-12>
      <v-flex xs6 sm6 offset-sm1>
        <v-card elevation-20>
          <v-img src="https://picsum.photos/1200/700" aspect-ratio="2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs6 offset-sm1 align-self-center>
        <h1>The Image Gallery</h1>
        <h4>Here's a Random Image for you.</h4>
        <div class="my-2">
          <v-btn large rounded color="light-green" href="/gallery" class="btn-1">More on Gallery</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
