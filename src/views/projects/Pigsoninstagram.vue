<template>
  <div>
    <b-container>
      <titel headline="Why are there so many pigs on instagram?" />
      <kVideo :video="videoid" />
      <paragraph />
      <imggrid />
    </b-container>
  </div>
</template>


<script>
import titel from "@/projekt/titel.vue";
import kVideo from "@/projekt/video.vue";
import imggrid from "@/projekt/imggridPigs.vue";
import paragraph from "@/projekt/paragraph.vue";

export default {
  name: "Pigs",
  components: {
    titel,
    kVideo,
    imggrid,
    paragraph,
  },
  data() {
    return {
      videoid: 349456126,
    };
  },
};
</script>
