<template>
  <div>
    <v-container grid-list-xl>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" @change="itemChange" v-model="itemNo" label="Items per page"></v-select>
        </v-col>
      </v-row>
      <v-layout row>
        <v-flex xs4 v-for="image in images" :key="image.id">
          <v-card elevation-20>
            <v-img :src="image.download_url" aspect-ratio="1.25"></v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">By {{image.author}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat :href="image.url" target="_blank">View Author</v-btn>
              <v-btn flat color="cyan" :href="image.download_url">Download</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center>
        <v-bottom-nav>
          <v-btn color="orange" :disabled="pageNo==1" @click="previousPage" class="btn-1">
            <span>Back</span>
          </v-btn>

          <v-btn color="light-green" @click="nextPage" class="btn-2">
            <span>Next</span>
          </v-btn>
        </v-bottom-nav>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getImagePage } from "../service/gallery.service";
export default {
  name: "Gallery",
  data() {
    return {
      images: {}, // object for storing all the images
      pageNo: 1,
      items: [6, 9, 12, 15],
      itemNo: 9 // default number of images per page
    };
  },
  created() {
    getImagePage(this.pageNo, this.itemNo).then(
      resp => (this.images = resp.data)
    );
  },
  methods: {
    nextPage() {
      this.pageNo++;
      getImagePage(this.pageNo, this.itemNo).then(
        resp => (this.images = resp.data)
      );
    },
    previousPage() {
      this.pageNo--;
      getImagePage(this.pageNo, this.itemNo).then(
        resp => (this.images = resp.data)
      );
    },
    itemChange() {
      getImagePage(this.pageNo, this.itemNo).then(
        resp => (this.images = resp.data)
      );
    }
  }
};
</script>