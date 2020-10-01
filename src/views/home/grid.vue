<template>
  <div>
    <h3>Projekte</h3>

    <b-row style="width: 100%; margin: auto">
      <b-col class="column" style="padding: 0px" lg="4" md="6" sm="12">
        <b-link to="/projects/wizard">
          <img
            class="image"
            style="margin: 0px"
            src="@/assets/img/wizard_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              Clod, the weather wizard
            </div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: blue; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
        <b-link to="/projects/silentsongs">
          <img
            class="image"
            style="width: 100%; margin: 0px"
            src="@/assets/img/silentsongs_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              Silent Songs
            </div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: blue; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
        <b-link to="/projects/geometryplus">
          <img
            class="image"
            style="width: 100%; margin: 0px"
            src="@/assets/img/geometryplus_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">Geometry+</div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: blue; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
        <b-link to="/projects/horror">
          <img
            class="image"
            style="width: 100%; margin: 0px"
            src="@/assets/img/horror_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              Geschichte des Horrors
            </div>
          </div>
        </b-link>
      </b-col>

      <b-col class="column" style="padding: 0px" lg="4" md="6" sm="12">
        <b-link to="/projects/pigsoninstagram">
          <img
            class="image"
            style="width: 100%; margin: 0px"
            src="@/assets/img/pigsoninstagram_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              Why are there so many pigs on instagram?
            </div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: blue; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
        <b-link to="/projects/optipessi">
          <img
            class="image"
            style="width: 100%; margin: 0px"
            src="@/assets/img/optipessi_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              Optimist:Pessismist
            </div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: green; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
        <b-link to="/projects/wabi">
          <img
            class="image"
            style="width: 100%; height: auto; margin: 0px"
            src="@/assets/img/wabiphone_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">Wabi Phone</div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: green; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
        <b-link to="/projects/tinkerfestival">
          <img
            class="image"
            style="width: 100%; height: auto; margin: 0px"
            src="@/assets/img/tinkerfestival_teaser.jpg"
          />
          <div class="overlay">
            <div class="middlestuff" style="position: absolute">
              Tinkerfestival Würzburg
            </div>
          </div>
        </b-link>
      </b-col>

      <b-col
        class="column"
        style="background-color: blue; padding: 0px"
        lg="4"
        md="6"
        sm="12"
      >
      <b-link to="/projects/pretzelprinter">
        <img
          class="image"
          style="width: 100%; margin: 0px"
          src="@/assets/img/pretzelprinter_teaser.jpg"
        />
        <div class="overlay">
          <div class="middlestuff" style="postiion: absolute">
            pretzelprinter Logo
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