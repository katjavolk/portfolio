<template>
  <div id="app">
    <b-container fluid style="padding:0px;">
    <navbar />

    <router-view>
      <home />
    </router-view>

    <end />
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/fonts.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

body {
  font-family: Syne-Regular !important;
}
</style>

<script>
import navbar from "@/navbar/nav.vue";
import end from "@/end/end.vue";
import home from "@/views/Home.vue";

export default {
  name: "index",
  components: {
    navbar,
    end,
    home,
  },
};
</script>
