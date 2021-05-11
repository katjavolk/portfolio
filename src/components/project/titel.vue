<template>
  <div>
    <h1 class="h1size"><slot name="title"></slot></h1>

    <h2 class="h2size"><slot name="subtitle"></slot></h2>
  </div>
</template>


<style lang="scss">
.h1size {
  font-size: 100px;
  font-family: Syne-Bold;
  line-height: auto;
  margin-top: 30px;
}

@media screen and (max-width: 1200px) {
  .h1size {
    font-size: 100px;
    margin-top: 30px;
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
    font-size: 45px;
    line-height: 45px;
  }
}

.h2size {
  font-size: 30px;
  font-family: Syne-Bold;
  margin-top: -1vh;
}

@media screen and (max-width: 1200px) {
  .h2size {
    font-size: 30px;
  }
}

@media screen and (max-width: 992px) {
  .h2size {
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) {
  .h2size {
    font-size: 30px;
  }
}

@media screen and (max-width: 576px) {
  .h2size {
    font-size: 20px;
  }
}

h3 {
    font-family: Syne-Bold;
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
  }
  
  @media screen and (max-width: 1200px) {
    h3 {
      font-size: 16px;
      line-height: 24px;
    }
  }
  
  @media screen and (max-width: 992px) {
    h3 {
      font-size: 14px;
      line-height: 20px;
    }
  }
  
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 14px;
      line-height: 20px;
    }
  }
  
  @media screen and (max-width: 576px) {
    h3 {
      font-size: 14px;
      line-height: 20px;
    }
  }
</style>

<script>
export default {
  props: {
    headline: String,
    subheadline: String,
  },
};
</script>
