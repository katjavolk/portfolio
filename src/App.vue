<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
import navbar from '@/navbar/nav.vue'
export default {
  name: 'index',
  components: {
    navbar	
  }
}

</script>
