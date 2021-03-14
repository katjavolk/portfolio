<template>
  <b-container>
    <b-row class="proj-nav" no-gutters>
      <b-col md="6">
        <b-button
          v-if="position != 0"
          class="button"
          variant="link"
          :to="last.path"
          >&laquo; {{ last.meta.title }}</b-button
        >
      </b-col>
      <b-col md="6" class="text-right">
        <b-button
          v-if="position != projects.length"
          class="button"
          variant="link"
          :to="next.path"
          >{{ next.meta.title }} &raquo;</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>


<style>
.proj-nav {
  width: 100%;
  padding: 0 0 0 0;
  margin: 2vh 0 0 0;
}

.button {
  color: #000;
  text-decoration: none;
  font-weight: 700;
  padding: 0 0 0 0;
}

.button:hover {
  text-decoration: underline;
  color: #000;
  font-weight: 700;
}
</style>

<script>
export default {
  data() {
    return {
      last: {
        meta: {
          name: "Last",
        },
        path: "/",
      },
      current: {
        meta: {
          name: "Current",
        },
        path: "/",
      },
      next: {
        meta: {
          name: "Next",
        },
        path: "/",
      },
      position: null,
    };
  },
  watch: {
    "$route.name": {
      handler: function (to, from) {
        console.log("nav event from " + from + " to " + to);
        this.getCurrentProject(to);
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.getCurrentProject(this.$route.name);
  },
  computed: {
    projects() {
      return this.$router.options.routes.filter((obj) => {
        return obj.name === "Projekte";
      })[0].children;
    },
  },
  methods: {
    getCurrentProject(to) {
      let _current_name = to;
      // get the current entry in the routes array
      this.position = this.projects.findIndex(
        (project) => project.name === _current_name
      );
      if (this.position != 0) this.last = this.projects[this.position - 1];

      this.current = this.projects[this.position];

      if (this.position != this.projects.length)
        this.next = this.projects[this.position + 1];
    },
  },
};
</script>