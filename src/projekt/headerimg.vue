<template>
<div>
   <b-row  align-h="center" :style="'width: 100%; background-color:'+headerimgbackground">
     <b-col></b-col>
       <b-col>
 <div >
    <img
      style=" height: 400px; display:flex;justify-content:center;align-items:center;"
      src="..\assets\img\wizard_headerimg.jpg"
    />
  </div>
       </b-col>
        <b-col></b-col>
        
   </b-row>
 
  </div>
</template>


<style >
</style>

<script>
export default {
  props: {
    headerimgbackground: String,
  },
};
</script>