<template>
  <div>

    <b-container fluid style="padding:0px;">
 <headerimg headerimgbackground="black"/>
     </b-container> 
   
   <b-container>
      <titel headline="Clod, the weather wizard" />
      <videovimeo/>
      
    <imggridWizard />
    
   </b-container>
    

    
    
   
  </div>
</template>


<script>
import headerimg from "@/projekt/headerimg.vue";
import titel from "@/projekt/titel.vue";

import imggridWizard from "@/projekt/imggridWizard.vue";
import videovimeo from "@/projekt/videovimeo.vue";

export default {
  name: "Home",
  components: {
    headerimg,
    titel,

    imggridWizard,
    videovimeo,
    
  },
};
</script>