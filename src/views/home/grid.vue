<template>
  <div>
    <h3>Projekte</h3>

    <b-row style="width: 100%; margin: auto">
      <b-col
        v-for="project in $router.options.routes[2].children"
        :key="project.name"
        class="column"
        style="padding: 0px"
        :lg="project.meta.prominent ? '12' : '4'"
        :md="project.meta.prominent ? '12' : '6'"
        :sm="project.meta.prominent ? '12' : '12'"
      >
        <b-link :to="project.path">
          <img class="image" style="margin: 0px" :src="link(project.name)" />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              {{ project.meta.teaser }}
            </div>
          </div>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>



<style >
.column {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: black;
}

.column:hover .overlay {
  opacity: 0.8;
}

.middlestuff {
  font-family: Syne-Bold;
  line-height: 28px;
  color: white;
  font-size: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>

<script>
export default {
  methods: {
    link(route) {
      return require("@/assets/img/" + route.toLowerCase() + "_teaser.jpg");
    },
  },
};
</script>