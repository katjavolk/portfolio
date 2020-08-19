<template>
  <div class="home">

      
     
     
      <welcome/>
      <grid/>
     

    
    
  </div>






</template>

<script>
// @ is an alias to /src

import welcome from'@/welcome/welcome.vue'
import grid from '@/grid/grid.vue'








export default {
  name: 'Home',
  components: {

    welcome,
    grid,
    
  
  },





  
}
</script>
