<template>
  <div style="margin-bottom: 100px; margin-top: 30px">
    <h1 class="h1size">Hey!</h1>

    <h4>Das ist mein Portfolio. <br v-if="isMobile" />Check it out!</h4>
  </div>
</template>



<style scoped>
.h1size {
  font-size: 200px;
  font-family: Syne-Bold;
}

@media screen and (max-width: 1140px) {
  .h1size {
    font-size: 200px;
  }
}

@media screen and (max-width: 960px) {
  .h1size {
    font-size: 160px;
  }
}

@media screen and (max-width: 720px) {
  .h1size {
    font-size: 120px;
  }
}

h4{
  font-size: 1.75rem;
}

</style>


<script>
export default {
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        //console.log("Mobile Browser detected");
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>