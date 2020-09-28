<template>
  <div>
    <b-container fluid style="padding:0px;">
      <headerimg headerimgbackground="white" />
    </b-container>

    <router-view />
  </div>
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
