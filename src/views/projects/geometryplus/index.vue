<template>
  <div>
    <b-container>
      <titel>
        <template #title>Geometry+</template>
      </titel>
      <paragraph>
        Geometry+ ist eine Sammlung von Grafiken, die zu unterschiedlichen
        Themen mit Geometrie als Werkzeug erstellt wurden. Die Geometrie
        beschäftigt sich mit Figuren in der Ebene, dem Messen und Berechnen von
        Längen, Abständen, Flächen und Winkel. Entscheidend ist, dass nicht
        freihand gezeichnet wird. Alles ist abgemessen, berechnet oder hat einen
        festen Punkt im Koordinatensystem. Genau dieses Prinzip wurde für die
        Grafiken von Geometry+ angewendet. Die Grafiken sind konstruiert, die
        Längen und Größen von Strecken und Flächen voneinander und von
        Informationen abhänig. Auch wenn alle Grafiken auf Informatonen und
        Daten der Themen basieren, stehen die Grafiken und nicht die
        Informationsvermittlung im Vordergrund. Wichtiger ist, wie mit Hilfe von
        Geometrie unterschiedlichste Bilder aus Daten entstehen
        können.</paragraph
      >

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
          <b-col sm="12" style="margin-top: 1vh">
            <img src="@/assets/img/geometry_1_mobile.jpg" width="100%" />
          </b-col>

          <b-col
            v-for="i in 15"
            :key="'picture-mobile-' + i"
            sm="12"
            style="margin-top: 1vh"
          >
            <img :src="link(i + 1)" width="100%" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<style>
.gallery_geometry {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(32, 0, 25fr);
  grid-gap: 1rem;
}

.gallery_img_geometry {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_geometry_1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_geometry_2 {
  grid-column-start: 3;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_geometry_3 {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_geometry_4 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_geometry_5 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
  margin-bottom: 0px;
}

.gallery_item_geometry_6 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 8;
  margin-bottom: 0px;
}

.gallery_item_geometry_7 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 8;
  grid-row-end: 13;
  margin-bottom: 0px;
}

.gallery_item_geometry_8 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 8;
  grid-row-end: 11;
  margin-bottom: 0px;
}

.gallery_item_geometry_9 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 11;
  grid-row-end: 14;
  margin-bottom: 0px;
}

.gallery_item_geometry_10 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 14;
  grid-row-end: 17;
  margin-bottom: 0px;
}

.gallery_item_geometry_11 {
  grid-column-start: 4;
  grid-column-end: 8;
  grid-row-start: 13;
  grid-row-end: 17;
  margin-bottom: 0px;
}

.gallery_item_geometry_12 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 17;
  grid-row-end: 23;
  margin-bottom: 0px;
}

.gallery_item_geometry_13 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 23;
  grid-row-end: 27;
  margin-bottom: 0px;
}

.gallery_item_geometry_14 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 23;
  grid-row-end: 27;
  margin-bottom: 0px;
}

.gallery_item_geometry_15 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 27;
  grid-row-end: 30;
  margin-bottom: 0px;
}

.gallery_item_geometry_16 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 27;
  grid-row-end: 30;
  margin-bottom: 0px;
}
</style>
   


<script>
import titel from "@/components/project/titel.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "Geometry+",
  components: {
    titel,
    paragraph,
  },
  methods: {
    link(image) {
      return require("@/assets/img/geometry_" + image + ".jpg");
    },
  },
};
</script>