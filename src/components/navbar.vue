<template >
  <div>
    <b-container>
      <b-navbar
        style="padding: 1vh 0 0 0;"
        toggleable="lg"
      >
        <b-navbar-brand to="/">Katja Volk</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" fill>
            <b-navbar-nav>
              <!--              <b-nav-item to="/">Projekte</b-nav-item> -->
              <b-nav-item to="/about">Über</b-nav-item>
              <b-nav-item to="/kontakt">Kontakt</b-nav-item>
              <b-nav-item-dropdown to="/" text="Projekte" right>
                <b-dropdown-item
                  v-for="link in projects"
                  :key="link.name"
                  :to="link.path"
                  >{{ link.meta.title }}</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <hr
      style="background-color: #4885ff; height: 6px; padding: 0 0 0 0; margin: 1vh 0 0 0;"
    />
  </div>
</template>

<script>
export default {
  computed: {
    projects()
    {
      return this.$router.options.routes.filter(obj => { return obj.name === 'Projekte';})[0].children;
    }
  }
}
</script>