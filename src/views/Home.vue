<template>
  <div class="home">
    <b-container>
      <welcome />
      <grid />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import welcome from "@/welcome/welcome.vue";
import grid from "@/grid/grid.vue";

export default {
  name: "Home",
  components: {
    welcome,
    grid,
  },
};
</script>
