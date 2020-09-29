<template>
  <b-container fluid>
    <headerimg headerimgbackground="white" />

    <router-view />
  </b-container>
</template>


<script>
import headerimg from "@/components/project/headerimg.vue";

export default {
  name: "Project",
  components: {
    headerimg,
  },
};
</script>
