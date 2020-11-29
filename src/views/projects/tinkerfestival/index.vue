<template>
  <div>
    <b-container>
      <titel
        headline="Tinkerfestival"
        subheadline="Hackathon 30.11.-01.12.2019 Würzburg"
      />
      <paragraph
        >Ein Wochenende lang gemeinsam Ideen entwickeln, tüfteln und Visionen
        für die Stadt der Zukunft austauschen. Während des Tinkerfestivals kamen
        Menschen aus den unterschiedlichsten Bereichen zusammen, um ihre Ideen
        für unser Zusammenleben, Verkehr und Gesellschaft zu vereinen und an
        Konzepten zu diesen zu arbeiten. Für diese Veranstaltung entstand dieses
        Design für Web und Print.
      </paragraph>

      <div style="margin-top: 60px">
        <div class="gallery_tinkerfestival">
          <figure class="gallery_item_tinkerfestival_1">
            <img
              src="@/assets/img/tinkerfestival_1.jpg"
              alt="Gallery image 2"
              class="gallery_img_tinkerfestival"
            />
          </figure>
          <figure class="gallery_item_tinkerfestival_2">
            <img
              src="@/assets/img/tinkerfestival_2.jpg"
              alt="Gallery image 3"
              class="gallery_img_tinkerfestival"
            />
          </figure>
          <figure class="gallery_item_tinkerfestival_3">
            <img
              src="@/assets/img/tinkerfestival_3.jpg"
              alt="Gallery image 4"
              class="gallery_img_tinkerfestival"
            />
          </figure>
          <figure class="gallery_item_tinkerfestival_4">
            <img
              src="@/assets/img/tinkerfestival_5.jpg"
              alt="Gallery image 5"
              class="gallery_img_tinkerfestival"
            />
          </figure>
          <figure class="gallery_item_tinkerfestival_5">
            <img
              src="@/assets/img/tinkerfestival_4.jpg"
              alt="Gallery image 5"
              class="gallery_img_tinkerfestival"
            />
          </figure>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style>
.gallery_tinkerfestival {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_tinkerfestival {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_tinkerfestival_1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_tinkerfestival_2 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_tinkerfestival_3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_tinkerfestival_4 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_tinkerfestival_5 {
  grid-column-start: 4;
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
  name: "Horror",
  components: {
    titel,
    paragraph,
  },
};
</script>