<template>
  <b-container style="padding:0px;">
    <div class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img
          src="https://www.tierschutzbund.de/fileadmin/_processed_/4/8/csm_Katze-Pfoten_fe2be12322.jpg"
          alt="Gallery image 1"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img
          src="https://www.tierschutzbund.de/fileadmin/_processed_/4/8/csm_Katze-Pfoten_fe2be12322.jpg"
          alt="Gallery image 2"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img
          src="https://www.mera-petfood.com/files/_processed_/b/3/csm_Katze_eingewoehnen_MERA-Katzenratgeber_85ea6d4ff6.jpg"
          alt="Gallery image 3"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img
          src="https://www.tierschutzbund.de/fileadmin/_processed_/4/8/csm_Katze-Pfoten_fe2be12322.jpg"
          alt="Gallery image 4"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img
          src="https://www.mera-petfood.com/files/_processed_/b/3/csm_Katze_eingewoehnen_MERA-Katzenratgeber_85ea6d4ff6.jpg"
          alt="Gallery image 5"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--6">
        <img
          src="https://www.mera-petfood.com/files/_processed_/b/3/csm_Katze_eingewoehnen_MERA-Katzenratgeber_85ea6d4ff6.jpg"
          alt="Gallery image 6"
          class="gallery__img"
        />
      </figure>
    </div>
  </b-container>
</template>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery__item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery__item--2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery__item--3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery__item--4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery__item--5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery__item--6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>