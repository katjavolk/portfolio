<template>
  <div
    :style="
      'width: 100vw; height: 400px; padding-top: 0px; background: ' + bgcolor + ';'
    "
  >
    <center>
      <img style="height: inherit" :src="link" />
    </center>
  </div>
</template>


<style >
</style>

<script>
export default {
  props: {
    headerimgbackground: String,
  },
  computed: {
    link() {
      return require("@/assets/img/" +
        this.$route.name.toLowerCase() +
        "_headerimg.jpg");
    },
    bgcolor() {
      return this.$route.meta.base_color;
    },
  },
};
</script>