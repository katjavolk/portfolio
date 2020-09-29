<template>
  <div>
    <b-container>
      <titel headline="Clod, the weather wizard" />
      <kVideo :video="videoid" />
      <paragraph />
      <!--
      <template>
        <div style="margin-top: 60px">
          <div class="gallery_wizard">
            <figure class="gallery_item_wizard_1" style="background-color: red">
              <img
                src="@/assets/img/wizard_1.jpg"
                alt="Gallery image 2"
                class="gallery_img_wizard"
              />
            </figure>
            <figure
              class="gallery_item_wizard_2"
              style="background-color: green"
            >
              <img
                src="@/assets/img/wizard_2.png"
                alt="Gallery image 3"
                class="gallery_img_wizard"
              />
            </figure>
            <figure
              class="gallery_item_wizard_3"
              style="background-color: purple"
            >
              <img
                src="@/assets/img/wizard_3.png"
                alt="Gallery image 4"
                class="gallery_img_wizard"
              />
            </figure>
            <figure
              class="gallery_item_wizard_4"
              style="background-color: blue"
            >
              <img
                src="@/assets/img/wizard_4.jpg"
                alt="Gallery image 5"
                class="gallery_img_wizard"
              />
            </figure>
          </div>
        </div>
      </template> -->
      <!-- marcis vorschlag für auto-responsive von bootstrap -->
      <div class="d-none d-sm-block">
        <b-media right-align vertical-align="center">
          <template v-slot:aside>
            <img src="@/assets/img/wizard_1.jpg" alt="Gallery Image 2" />
          </template>
        </b-media>
        <b-media right-align vertical-align="center">
          <template v-slot:aside>
            <img
              src="@/assets/img/wizard_2.png"
              alt="Gallery Image 2"
              style="width: 50%"
            />

            <img
              src="@/assets/img/wizard_3.png"
              alt="Gallery Image 2"
              style="width: 50%"
            />
          </template>
        </b-media>

        <b-media right-align vertical-align="center">
          <template v-slot:aside>
            <img
              src="@/assets/img/wizard_4.jpg"
              alt="Gallery image 5"
              style="width: 100%"
            />
          </template>
        </b-media>
      </div>
      <div class="d-block d-sm-none">
        <b-row>
          <b-col>
            <img
              src="@/assets/img/wizard_1.jpg"
              alt="Gallery Image 2"
              width="100%"
              style="margin-top: 1rem;"
            />
          </b-col>
          <div class="w-100"></div>
          <b-col>
            <img
              src="@/assets/img/wizard_2.png"
              alt="Gallery Image 2"
              width="100%"
              style="margin-top: 1rem;"
            />
          </b-col>
          <div class="w-100"></div>
          <b-col>
            <img
              src="@/assets/img/wizard_3.png"
              alt="Gallery Image 2"
              width="100%"
              style="margin-top: 1rem;"
            />
          </b-col>
          <div class="w-100"></div>
          <b-col>
            <img
              src="@/assets/img/wizard_4.jpg"
              alt="Gallery image 5"
              width="100%"
              style="margin-top: 1rem;"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>


<style>
.gallery_wizard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_wizard {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_wizard_1 {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_wizard_2 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_wizard_3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_wizard_4 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>

<script>
import titel from "@/components/project/titel.vue";
import kVideo from "@/components/project/video.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "Wizard",
  components: {
    titel,
    kVideo,
    paragraph,
  },
  data() {
    return {
      videoid: 394446011,
    };
  },
};
</script>





