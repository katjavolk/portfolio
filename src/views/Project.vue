<template>
  <div>
    <headerimg v-if="!isMobile" />
    <router-view />
    <project_nav />
  </div>
</template>


<script>
import headerimg from "@/components/project/headerimg.vue";
import project_nav from "@/components/project/navigation.vue";

export default {
  name: "Project",
  components: {
    headerimg,
    project_nav,
  },
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        //console.log("Mobile Browser detected");
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
