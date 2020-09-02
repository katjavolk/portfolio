<template>
  <div>

   
   <b-container >
      <titel headline="Optimist:Pessimist" />
      <paragraph/>
      
    <imggridOptipessi />
    
   </b-container>
    

    
    
   
  </div>
</template>


<script>

import titel from "@/projekt/titel.vue";
import paragraph from '@/projekt/paragraph.vue'

import imggridOptipessi from "@/projekt/imggridOptipessi.vue";


export default {
  name: "Home",
  components: {
    
    titel,
    paragraph,
    imggridOptipessi,
    
    
  },
};
</script>