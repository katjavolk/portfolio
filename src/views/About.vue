<template>
  <div class="about">
    <b-container style="margin-top:6em;">
      <b-row style="width:100%; margin:auto;">
        <b-col lg="5" md="8" style="padding:0px;">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="@/assets/img/about_katjavolk.jpg"
          />
        </b-col>
        <b-col lg="5">
          <p class="context">
            Hey, ich bin Katja. Designerin aus Kaiserslautern.
            Zur Zeit lebe, arbeite und studiere ich in Würzburg.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style>
.context {
  font-size: 1.5em;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>