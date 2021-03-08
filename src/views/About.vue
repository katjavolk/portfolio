<template>
  <div>
    <b-container style="margin-top: 6em">
      <b-row style="width: 100%; margin: auto">
        <b-col lg="5" md="8" style="padding: 0px">
          <img
            class="image"
            style="width: 100%; margin: 0px"
            src="@/assets/img/about_katjavolk.jpg"
          />
        </b-col>
        <b-col lg="5">
          <p class="context">
            Hey!
            <br /> Ich bin Katja, Kommunikations- und Grafikdesignerin. Zur Zeit
            lebe und arbeite ich in Würzburg.<br /> Mein Schwerpunkt liegt im
            Digitalen und Interaktivem Design. Doch zu meinem Portfolio gehören
            auch Motion und Grafik. Melde dich gerne bei mir, wenn du Interesse
            an einer Zusammenarbeit hast oder mehr über eins meiner Projekte
            wissen möchtest. <br /><br />Mail: <a class="kontakt-email-context" href="mailto:kontakt@katjavolk.de">kontakt@katjavolk.de</a>
          </p>
        </b-col>
        <b-col lg="2" class="d-none d-lg-block">&nbsp;</b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style>
.context {
  font-size: 1.5em;
}

.kontakt-email-context {
  font-size: inherit;
  font-family: Syne-Bold;
  color: #000;
  
}
.kontakt-email-context:hover {
  color: #000;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>