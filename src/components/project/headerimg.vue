<template>
  <div>
    <b-row align-h="center" :style="'width: 100%; background-color:'+headerimgbackground">
      <b-col></b-col>
      <b-col>
        <div>
          <img
            style=" height: 400px; display:flex;justify-content:center;align-items:center;"
            :src="link"
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
  computed: {
    link() {
      return require("@/assets/img/" +
        this.$route.name.toLowerCase() +
        "_headerimg.jpg");
    },
  },
};
</script>