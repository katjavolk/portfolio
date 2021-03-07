<template>
  <div>
    <headerimg v-if="!isMobile" />
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
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        console.log("Mobile Browser detected");
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
