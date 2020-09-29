<template >
  <b-container fluid style="padding-bottom: 0px; margin-bottom: 0px">
    <b-container>
      <b-navbar
        style="padding-left: 0px; padding-right: 0px; padding-bottom: 0px"
        toggleable="lg"
        type="light"
        variant="white"
      >
        <b-navbar-brand to="/">Katja Volk</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item to="/">Projekte</b-nav-item>
              <b-nav-item to="/about">Über</b-nav-item>
              <b-nav-item to="/kontakt">Kontakt</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <hr
      style="background-color: #4885ff; height: 6px; padding: 0px 0px 0px 0px;"
      class="d-block"
    />
  </b-container>
</template>