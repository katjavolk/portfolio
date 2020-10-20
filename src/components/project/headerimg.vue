<template>
  <div style="width: 100%; margin-top: -0.9%; padding-top:0px;">
    <img
      style="
        height: 400px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
      class="d-none d-sm-block"
      :src="link"
    />
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
  },
};
</script>