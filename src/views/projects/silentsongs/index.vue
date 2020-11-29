<template>
  <div>
    <b-container>
      <titel headline="Silent songs" subheadline="Lieder aus Licht" />
      <paragraph
        >Licht ist für uns eine Selbstverständlichkeit. Seine Funktionalität im
        Alltag und in der Technik macht es uns leicht, seine einfache Schönheit
        zu übersehen. Licht ist faszinierend. Nicht nur physisch, sondern auch
        visuell. Silent songs verwendet Licht als Medium. Kleine, interaktive
        Leuchtkästen schaffen einen sinnlichen Moment, in dem sich die
        BetrachterInnen auf das Licht konzentrieren können. Dadurch werden
        Bilder auf ihre ganz eigene Weise gezeichnet.</paragraph
      >

      <div style="margin-top: 60px">
        <div class="gallery_silentsongs">
          <figure class="gallery_item_silentsongs_1">
            <img
              src="@/assets/img/silentsongs_1.jpg"
              alt="Gallery image 1"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_2">
            <img
              src="@/assets/img/silentsongs_2.jpg"
              alt="Gallery image 2"
              class="gallery_img_silentsongs"
            />
          </figure>

          <figure class="gallery_item_silentsongs_3">
            <img
              src="@/assets/img/silentsongs_fyall.jpg"
              alt="Gallery image 3"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_4">
            <img
              src="@/assets/img/silentsongs_3.jpg"
              alt="Gallery image 4"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_5">
            <img
              src="@/assets/img/silentsongs_4.jpg"
              alt="Gallery image 5"
              class="gallery_img_silentsongs"
            />
          </figure>

          <figure class="gallery_item_silentsongs_6">
            <img
              src="@/assets/img/silentsongs_ogha.jpg"
              alt="Gallery image 6"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_7">
            <img
              src="@/assets/img/silentsongs_6.jpg"
              alt="Gallery image 7"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_8">
            <img
              src="@/assets/img/silentsongs_5.jpg"
              alt="Gallery image 8"
              class="gallery_img_silentsongs"
            />
          </figure>

          <figure class="gallery_item_silentsongs_9">
            <img
              src="@/assets/img/silentsongs_lioa.jpg"
              alt="Gallery image 6"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_10">
            <img
              src="@/assets/img/silentsongs_7.jpg"
              alt="Gallery image 7"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_11">
            <img
              src="@/assets/img/silentsongs_8.jpg"
              alt="Gallery image 8"
              class="gallery_img_silentsongs"
            />
          </figure>

          <figure class="gallery_item_silentsongs_12">
            <img
              src="@/assets/img/silentsongs_reykr.jpg"
              alt="Gallery image 6"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_13">
            <img
              src="@/assets/img/silentsongs_7.jpg"
              alt="Gallery image 7"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_14">
            <img
              src="@/assets/img/silentsongs_8.jpg"
              alt="Gallery image 8"
              class="gallery_img_silentsongs"
            />
          </figure>

          <figure class="gallery_item_silentsongs_15">
            <img
              src="@/assets/img/silentsongs_9.jpg"
              alt="Gallery image 1"
              class="gallery_img_silentsongs"
            />
          </figure>
          <figure class="gallery_item_silentsongs_16">
            <img
              src="@/assets/img/silentsongs_10.jpg"
              alt="Gallery image 2"
              class="gallery_img_silentsongs"
            />
          </figure>
        </div>
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
  name: "Horror",
  components: {
    titel,
    paragraph,
  },
};
</script>