<template>
    <div>
    <b-container>
      <titel headline="Silent songs" subheadline="Lieder aus Licht" />
      <paragraph />

      <imggridSilentsongs />
    </b-container>
  </div>
</template>


<script>
import titel from "@/projekt/titel.vue";
import paragraph from "@/projekt/paragraph.vue";

import imggridSilentsongs from "@/projekt/imggridSilentsongs.vue";

export default {
  name: "Horror",
  components: {
    titel,
    paragraph,
    imggridSilentsongs,
  },
};
</script>