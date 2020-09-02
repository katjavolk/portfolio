<template>
     <div>
        
    <b-container>
      <titel headline="Geometry+" />
      <paragraph />

      <imggridGeometry />
    </b-container>
  </div>
</template>


<script>
import titel from "@/projekt/titel.vue";
import paragraph from "@/projekt/paragraph.vue";

import imggridGeometry from "@/projekt/imggridGeometry.vue";

export default {
  name: "Horror",
  components: {
    titel,
    paragraph,
    imggridGeometry,
   
  },
};
</script>
