<template>
  <b-container style="padding: 0px">
    <div style="margin-top: 60px" class="d-none d-sm-block">
      <div class="gallery_geometry">
        <figure
          v-for="i in 16"
          :key="'image-desktop-' + i"
          :class="'gallery_item_geometry_' + i"
        >
          <img :src="link(i)" style="" class="gallery_img_geometry" />
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
</template>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery__item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery__item--2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery__item--3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery__item--4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery__item--5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery__item--6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>

<script>
import titel from "@/components/project/titel.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "__template",
  components: {
    titel,
    paragraph,
  },
  methods: {
    link(image) {
      return require("@/assets/img/template_" + image + ".jpg");
    },
  },
};
</script>