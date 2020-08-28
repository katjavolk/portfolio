<template>
  <div>

    <b-container fluid style="padding:0px;">
 <headerimg headerimgbackground="black"/>
     </b-container> 
   
   <b-container >
      <titel headline="Optimist:Pessimist" />
      <paragraph/>
      
    <imggridOptipessi />
    
   </b-container>
    

    
    
   
  </div>
</template>


<script>
import headerimg from "@/projekt/headerimg.vue";
import titel from "@/projekt/titel.vue";
import paragraph from '@/projekt/paragraph.vue'

import imggridOptipessi from "@/projekt/imggridOptipessi.vue";


export default {
  name: "Home",
  components: {
    headerimg,
    titel,
    paragraph,
    imggridOptipessi,
    
    
  },
};
</script>