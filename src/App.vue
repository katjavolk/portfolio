<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <kFooter />
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
import navbar from "@/components/navbar.vue";
import kFooter from "@/components/footer.vue";

export default {
  name: "index",
  components: {
    navbar,
    kFooter,
  },
};
</script>
