<template>
  <div>
    <b-container>
      <titel>
        <template #title>Silent songs</template>
        <template #subtitle>Lieder aus Licht</template>
      </titel>
      <paragraph
        >Licht ist für uns eine Selbstverständlichkeit. Seine Funktionalität im
        Alltag und in der Technik macht es uns leicht, seine einfache Schönheit
        zu übersehen. Licht ist faszinierend. Nicht nur physisch, sondern auch
        visuell. Silent songs verwendet Licht als Medium. Kleine, interaktive
        Leuchtkästen schaffen einen sinnlichen Moment, in dem sich die
        BetrachterInnen auf das Licht konzentrieren können. Dadurch werden
        Bilder auf ihre ganz eigene Weise gezeichnet.</paragraph
      >

      <div style="margin-top: 60px" class="d-none d-sm-block">
        <div class="gallery_silentsongs">
           <figure v-for="i in 16" :key="'image-desktop-'+i" :class="'gallery_item_silentsongs_'+(i)">
            <img
              :src="link(i)"
              :alt="'Gallery image' + (i+1)"
              class="gallery_img_silentsongs"
            />
          </figure>
        </div>
      </div>
      <div class="d-block d-sm-none">
        <b-row>
          <b-col
            v-for="i in 16"
            :key="'picture-mobile-' + i"
            sm="12"
            style="margin-top: 1vh"
          >
            <img :src="link(i)" width="100%" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>



<style>
.gallery_silentsongs {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_silentsongs {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_silentsongs_1 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_2 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_4 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_5 {
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_6 {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_7 {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_8 {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_9 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_10 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_11 {
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 5;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_12 {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_13 {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_14 {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_15 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_silentsongs_16 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>

<script>
import titel from "@/components/project/titel.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "Silent Songs",
  components: {
    titel,
    paragraph,
  },
  methods: {
    link(image) {
      return require("@/assets/img/silentsongs_" + image + ".jpg");
    },
  },
};
</script>