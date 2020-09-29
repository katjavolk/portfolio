<template>
  <b-container
    fluid
    :style="'width: 100%; background-color:' + headerimgbackground + ';'"
  >
    <img
      style="
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
      class="d-none d-sm-block"
      :src="link"
    />
  </b-container>
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
  },
};
</script>