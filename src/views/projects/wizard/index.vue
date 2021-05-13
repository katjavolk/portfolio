<template>
  <div>
    <b-container>
      <titel headline="Clod, <br> the weather wizard" />
      <titel>
        <template #title> Clod, the weather wizard </template>
      </titel>
      <div class="d-none d-sm-block">
        <b-row>
          <b-col>
            <div style="margin-top: 3vh">
              <kVideo :video="videoid" />
            </div>
          </b-col>
        </b-row>
        <b-row style="margin-top: 1%">
          <b-col>
            <img
              src="@/assets/img/wizard_2.png"
              alt="Gallery Image 2"
              width="100%"
            />
          </b-col>
          <b-col>
            <img
              src="@/assets/img/wizard_3.png"
              alt="Gallery Image 2"
              width="100%"
            />
          </b-col>
        </b-row>

        <b-row style="margin-top: 1%">
          <b-col>
            <img
              src="@/assets/img/wizard_4.jpg"
              alt="Gallery image 5"
              style="width: 100%"
            />
          </b-col>
        </b-row>
      </div>
      <div class="d-block d-sm-none">
        <b-row>
          <b-col>
            <div>
              <kVideo :video="videoid" />
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <img
              src="@/assets/img/wizard_1.jpg"
              alt="Gallery Image 2"
              width="100%"
              style="margin-top: 1rem"
            />
          </b-col>
          <div class="w-100"></div>
          <b-col>
            <img
              src="@/assets/img/wizard_2.png"
              alt="Gallery Image 2"
              width="100%"
              style="margin-top: 1rem"
            />
          </b-col>
          <div class="w-100"></div>
          <b-col>
            <img
              src="@/assets/img/wizard_3.png"
              alt="Gallery Image 2"
              width="100%"
              style="margin-top: 1rem"
            />
          </b-col>
          <div class="w-100"></div>
          <b-col>
            <img
              src="@/assets/img/wizard_4.jpg"
              alt="Gallery image 5"
              width="100%"
              style="margin-top: 1rem"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>


<script>
import titel from "@/components/project/titel.vue";
import kVideo from "@/components/project/video.vue";

export default {
  name: "Wizard",
  components: {
    titel,
    kVideo,
  },
  data() {
    return {
      videoid: 394446011,
    };
  },
};
</script>





