<template>
  <div>
    <b-container>
      <titel headline="Clod, the weather wizard" />
      <kVideo :video="videoid" />
      <paragraph />
      <imggrid />
    </b-container>
  </div>
</template>


<script>
import titel from "@/projekt/titel.vue";
import kVideo from "@/projekt/video.vue";
import imggrid from "@/projekt/imggridWizard.vue";
import paragraph from "@/projekt/paragraph.vue";

export default {
  name: "Wizard",
  components: {
    titel,
    kVideo,
    imggrid,
    paragraph,
  },
  data() {
    return {
      videoid: 394446011,
    };
  },
};
</script>





