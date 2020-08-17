<template>
  <div id="app">
    <navbar/>
    
    <grid/>
    <end/>
    
  </div>

</template>

<style>

</style>

<script>
import navbar from '@/navbar/nav.vue'
import grid from '@/grid/grid.vue'
import end from '@/end/end.vue'


export default {
  name: 'index',
  components: {
    navbar,	
    grid,
    end
    
    
  }
}


</script>
