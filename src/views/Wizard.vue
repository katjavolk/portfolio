<template>
<b-container style="padding:0px;">
<div>
    <headerimg/>
    <titel headline="Clod, the weather wizard"/>
    <paragraph/>
    <h1>ABRAKADABRA!!!!!</h1>

</div>
</b-container>
</template>


<script>

import headerimg from '@/projekt/headerimg.vue'
import titel from '@/projekt/titel.vue'
import paragraph from '@/projekt/paragraph.vue'


export default {
  name: 'Home',
  components: {

headerimg,
titel,
paragraph,
  
  
  
},
}
</script>