 <template>
  <div>
    <b-container>
      <titel>
        <template #title>pretzelprinter</template>
        <template #subtitle>Logo und Visitenkarte</template>
      </titel>

      <div style="margin-top: 60px" class="d-none d-sm-block">
        <div class="gallery_pretzelprinter">
          <figure class="gallery_item_pretzelprinter_1">
            <img
              src="@/assets/img/pretzelprinter_1.jpg"
              alt="Gallery image 2"
              class="gallery_img_pretzelprinter"
            />
          </figure>
          <figure class="gallery_item_pretzelprinter_2">
            <img
              src="@/assets/img/pretzelprinter_2.jpg"
              alt="Gallery image 3"
              class="gallery_img_pretzelprinter"
            />
          </figure>
          <figure class="gallery_item_pretzelprinter_3">
            <img
              src="@/assets/img/pretzelprinter_3.jpg"
              alt="Gallery image 3"
              class="gallery_img_pretzelprinter"
            />
          </figure>
          <figure class="gallery_item_pretzelprinter_4">
            <img
              src="@/assets/img/pretzelprinter_4.jpg"
              alt="Gallery image 4"
              class="gallery_img_pretzelprinter"
            />
          </figure>
          <figure class="gallery_item_pretzelprinter_5">
            <img
              src="@/assets/img/pretzelprinter_5.jpg"
              alt="Gallery image 5"
              class="gallery_img_pretzelprinter"
            />
          </figure>

          <figure class="gallery_item_pretzelprinter_6">
            <img
              src="@/assets/img/pretzelprinter_6.jpg"
              alt="Gallery image 6"
              class="gallery_img_pretzelprinter"
            />
          </figure>
        </div>
      </div>
      <div class="d-block d-sm-none">
        <b-row>
          <b-col
            v-for="i in 6"
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
.gallery_pretzelprinter {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_pretzelprinter {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_pretzelprinter_1 {
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_pretzelprinter_2 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_pretzelprinter_3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_pretzelprinter_4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_pretzelprinter_5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_pretzelprinter_6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>


 <script>
import titel from "@/components/project/titel.vue";

export default {
  name: "Pretzelprinter",
  components: {
    titel,
  },
  methods: {
    link(image) {
      return require("@/assets/img/pretzelprinter_" + image + ".jpg");
    },
  },
};
</script>


