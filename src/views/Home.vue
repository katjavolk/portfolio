<template>
  <div class="home">

      <headerimg/>
     
      <titel/>
      <paragraph/>
      <welcome/>
      <grid/>
      
     

    
    
  </div>






</template>

<script>
// @ is an alias to /src

import welcome from'@/welcome/welcome.vue'
import grid from '@/grid/grid.vue'

import titel from '@/projekt/titel.vue'
import paragraph from '@/projekt/paragraph.vue'
import headerimg from'@/projekt/headerimg.vue'




export default {
  name: 'Home',
  components: {

    welcome,
    grid,
    headerimg,
    titel,
    paragraph,
   
    

    
  }
}
</script>
