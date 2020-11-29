<template>
  <div>
    <b-container>
      <titel headline="Why are there so many pigs on instagram?" />
      <paragraph
        >Sie haben Hunderttausende Abonnenten. Mehr als du auf jeden Fall.
        Teacup Pigs. Es gibt zahllose dieser Schweinchen auf instagram. In
        zuckersüßen Outfits halten sie ihre Schnauze in die Kamera. Und sind sie
        nicht einfach umwerfend mit der Mütze auf dem Kopf? Sie sind ein
        Trendhaustier, welches seinem Besitzer Millionen likes garantiert.
        Zwischen den vielen Blume, Schleifen, Kleidchen und glitzernden
        Accessoires lässt sich nicht immer sagen wer hier insziniert
        wird.</paragraph
      >

      <kVideo :video="videoid" />

      <div style="margin-top: 60px">
        <div class="gallery_pigs">
          <figure class="gallery_item_pigs_1">
            <img
              src="@/assets/img/pigsoninstagram_1.png"
              alt="Gallery image 1"
              class="gallery_img_pigs"
            />
          </figure>
          <figure class="gallery_item_pigs_2">
            <img
              src="@/assets/img/pigsoninstagram_2.png"
              alt="Gallery image 2"
              class="gallery_img_pigs"
            />
          </figure>
          <figure class="gallery_item_pigs_3">
            <img
              src="@/assets/img/pigsoninstagram_3.png"
              alt="Gallery image 3"
              class="gallery_img_pigs"
            />
          </figure>
          <figure class="gallery_item_pigs_4">
            <img
              src="@/assets/img/pigsoninstagram_4.png"
              alt="Gallery image 4"
              class="gallery_img_pigs"
            />
          </figure>
          <figure class="gallery_item_pigs_5">
            <img
              src="@/assets/img/pigsoninstagram_5.png"
              alt="Gallery image 5"
              class="gallery_img_pigs"
            />
          </figure>
          <figure class="gallery_item_pigs_6">
            <img
              src="@/assets/img/pigsoninstagram_6.png"
              alt="Gallery image 6"
              class="gallery_img_pigs"
            />
          </figure>
        </div>
      </div>
    </b-container>
  </div>
</template>
   

<style>
.gallery_pigs {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_pigs {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_pigs_1 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_pigs_2 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_pigs_3 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_pigs_4 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 3;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_pigs_5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_pigs_6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>

<script>
import titel from "@/components/project/titel.vue";
import kVideo from "@/components/project/video.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "Pigs",
  components: {
    titel,
    kVideo,
    paragraph,
  },
  data() {
    return {
      videoid: 349456126,
    };
  },
};
</script>
