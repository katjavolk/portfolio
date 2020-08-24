<template>
  <div>
    <h1 class="h1size"  >
      
      {{headline}}
     
    </h1>

    <h2 class="h2size">
      {{subheadline}}
     
    </h2>
  </div>
</template>


<style lang="scss">
.h1size {
  font-size: 100px;
  font-family: Syne-Bold;
  line-height: auto;
  margin-top:30px;
}

@media screen and (max-width: 1200px) {
  .h1size {
    font-size: 100px;
    margin-top:30px;
  }
}

@media screen and (max-width: 992px) {
  .h1size {
    font-size: 80px;
  }
}

@media screen and (max-width: 768px) {
  .h1size {
    font-size: 50px;
  }
}

@media screen and (max-width: 576px) {
  .h1size {
    font-size: 50px;
    line-height:50px;
  }
}


.h2size {
  font-size: 30px;
  font-family: Syne-Bold;
  margin-top:-20px;
}

@media screen and (max-width: 1200px) {
  .h2size {
    font-size: 30px;
    margin-top:-20px;
    
  }
}

@media screen and (max-width: 992px) {
  .h2size {
    font-size: 30px;
    margin-top:-15px;
    
  }
}

@media screen and (max-width: 768px) {
  .h2size {
    font-size: 30px;
    margin-top:-15px;
    
  }
}

@media screen and (max-width: 576px) {
  .h2size {
    font-size: 20px;
    margin-top:-10px;
  
  }
}



</style>

<script>



export default {
  props: {
    headline: String,
    subheadline: String,
}
}
</script>
