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

import welcome from "./welcome.vue";
import grid from "./grid.vue";

export default {
  name: "Home",
  components: {
    welcome,
    grid,
  },
};
</script>
