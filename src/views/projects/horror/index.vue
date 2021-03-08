<template>
  <b-container>
    <titel>
      <template #title>Geschichte des Horrors</template>
    </titel>
    <paragraph>
      Gruselgeschichten sind so alt wie die Menschheit selbst. Auf 72 Seiten
      wird diese Historie und wichtige Persönlichkeiten des Genres in
      verschiedenen Medien vorgestellt. Das Buch behandelt außerdem die Frage wo
      unsere Lust zum Gruseln überhaupt herkommt.</paragraph
    >
    <template>
      <div style="margin-top: 60px" class="d-none d-sm-block">
        <div class="gallery_horror">
          <figure class="gallery_item_horror_1">
            <img
              src="@/assets/img/horror_2.jpg"
              alt="Gallery image 1"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_2">
            <img
              src="@/assets/img/horror_5.jpg"
              alt="Gallery image 2"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_3">
            <img
              src="@/assets/img/horror_1.jpg"
              alt="Gallery image 3"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_4">
            <img
              src="@/assets/img/horror_7.jpg"
              alt="Gallery image 4"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_5">
            <img
              src="@/assets/img/horror_4.jpg"
              alt="Gallery image 5"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_6">
            <img
              src="@/assets/img/horror_3.jpg"
              alt="Gallery image 6"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_7">
            <img
              src="@/assets/img/horror_6.jpg"
              alt="Gallery image 7"
              class="gallery_img_horror"
            />
          </figure>
          <figure class="gallery_item_horror_8">
            <img
              src="@/assets/img/horror_7.jpg"
              alt="Gallery image 8"
              class="gallery_img_horror"
            />
          </figure>
        </div>
      </div>
      <div class="d-block d-sm-none">
        <b-row>
          <b-col
            v-for="i in 7"
            :key="'picture-mobile-' + i"
            sm="12"
            style="margin-top: 1vh"
          >
            <img :src="link(i)" width="100%" />
          </b-col>
        </b-row>
      </div>
    </template>
  </b-container>
</template>



<style>
.gallery_horror {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_horror {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_horror_1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_horror_2 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_horror_3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 5;
  margin-bottom: 0px;
}

.gallery_item_horror_4 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-bottom: 0px;
}

.gallery_item_horror_5 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 8;
  margin-bottom: 0px;
}

.gallery_item_horror_6 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_horror_7 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_horror_8 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 8;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>

<script>
import titel from "@/components/project/titel.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "Horror",
  components: {
    titel,
    paragraph,
  },
    methods: {
    link(image) {
      return require("@/assets/img/horror_" + image + ".jpg");
    },
  },
};
</script>