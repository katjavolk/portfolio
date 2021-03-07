<template>
  <div>
    <headerimg />
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
