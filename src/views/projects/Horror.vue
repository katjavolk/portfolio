<template>
  <div>
    <b-container>
      <titel headline="Geschichte des Horrors" />
      <paragraph />

      <imggridHorror />
    </b-container>
  </div>
</template>


<script>
import titel from "@/projekt/titel.vue";
import paragraph from "@/projekt/paragraph.vue";

import imggridHorror from "@/projekt/imggridHorror.vue";

export default {
  name: "Horror",
  components: {
    titel,
    paragraph,
    imggridHorror,
  },
};
</script>