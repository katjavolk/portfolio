<template>
  <div>
    <b-container>
      <titel headline="Wabi Phone" subheadline="Es fühlt wie du" />
      <paragraph
        >Wie wäre es wenn unsere Geräte Gefühle hätten? Wie würden sie diese mit
        uns Kommunizieren? Wie würden wir damit umgehen müssen? Genau diese
        Fragen behandelt das Wabi Phone. Ein Konzept für ein Smartphone, welches
        fühlt und seine Emotionen ausdrückt und uns dazu bringt empathischer mit
        unseren Geräten umzugehen.
      </paragraph>

      <div style="margin-top: 60px">
        <div class="gallery_wabi">
          <figure class="gallery_item_wabi_1">
            <img
              src="@/assets/img/wabi_1.jpg"
              alt="Gallery image 2"
              class="gallery_img_wabi"
            />
          </figure>
          <figure class="gallery_item_wabi_2">
            <img
              src="@/assets/img/wabi_2.jpg"
              alt="Gallery image 3"
              class="gallery_img_wabi"
            />
          </figure>
          <figure class="gallery_item_wabi_3">
            <img
              src="@/assets/img/wabi_3.jpg"
              alt="Gallery image 3"
              class="gallery_img_wabi"
            />
          </figure>
          <figure class="gallery_item_wabi_4">
            <img
              src="@/assets/img/wabi_4.jpg"
              alt="Gallery image 4"
              class="gallery_img_wabi"
            />
          </figure>
          <figure class="gallery_item_wabi_5">
            <img
              src="@/assets/img/wabi_5.jpg"
              alt="Gallery image 5"
              class="gallery_img_wabi"
            />
          </figure>

          <figure class="gallery_item_wabi_6">
            <img
              src="@/assets/img/wabi_6.jpg"
              alt="Gallery image 6"
              class="gallery_img_wabi"
            />
          </figure>
        </div>
      </div>
    </b-container>
  </div>
</template>


<style>
.gallery_wabi {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_wabi {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_wabi_1 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_wabi_2 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_wabi_3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_wabi_4 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_wabi_5 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_wabi_6 {
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
  name: "Wabi",
  components: {
    titel,
    paragraph,
  },
};
</script>