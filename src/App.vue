<template>
  <div id="app">
    <navbar/>
    <welcome/>
    <grid/>
    
    <end/>
  </div>
</template>

<style lang="scss">
  @import '@/assets/fonts.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

body {
  font-family: Syne-Regular !important;
}
</style>

<script>
import navbar from '@/navbar/nav.vue'
import welcome from '@/welcome/welcome.vue'
import grid from '@/grid/grid.vue'
import end from '@/end/end.vue'


export default {
  name: 'index',
  components: {
    navbar,	
    grid,
    end,
    welcome
    
    
  }
}


</script>
