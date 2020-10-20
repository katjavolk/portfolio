<template>
  <b-container style="margin-top: 6em; margin-bottom: 6em">
    <b-row>
      <b-col>
        <a
          class="kontakt-email"
          style="color: black"
          href="mailto:kontakt@katjavolk.de"
          >kontakt@katjavolk.de</a
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<style >
.kontakt-email {
  font-size: 5.8em;
  font-family: Syne-Bold;
  line-height: auto;
  color: black;
}

@media screen and (max-width: 1200px) {
  .kontakt-email {
    font-size: 4.8em;
  }
}

@media screen and (max-width: 992px) {
  .kontakt-email {
    font-size: 3.6em;
  }
}

@media screen and (max-width: 768px) {
  .kontakt-email {
    font-size: 3.5em;
  }
}

@media screen and (max-width: 576px) {
  .kontakt-email {
    font-size: 1.7em;
  }
}

@media screen and (max-width: 350px) {
  .kontakt-email {
    font-size: 1.2em;
  }
}
</style>