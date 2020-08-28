<template>
  <div style="margin-top:60px;">
    <div class="gallery_pigs">
      <figure class="gallery_item_pigs_1" style="background-color:red;">
        <img
          src="..\assets\img\pigsoninstagram_1.png"
          alt="Gallery image 1"
          class="gallery_img_pigs"
        />
      </figure>
      <figure class="gallery_item_pigs_2" style="background-color:green;">
        <img
          src="..\assets\img\pigsoninstagram_2.png"
          alt="Gallery image 2"
          class="gallery_img_pigs"
        />
      </figure>
      <figure class="gallery_item_pigs_3" style="background-color:purple;">
        <img
          src="..\assets\img\pigsoninstagram_3.png"
          alt="Gallery image 3"
          class="gallery_img_pigs"
        />
      </figure>
      <figure class="gallery_item_pigs_4" style="background-color:blue;">
        <img
          src="..\assets\img\pigsoninstagram_4.png"
          alt="Gallery image 4"
          class="gallery_img_pigs"
        />
      </figure>
      <figure class="gallery_item_pigs_5" style="background-color:blue;">
        <img
          src="..\assets\img\pigsoninstagram_5.png"
          alt="Gallery image 5"
          class="gallery_img_pigs"
        />
      </figure>
      <figure class="gallery_item_pigs_6" style="background-color:blue;">
        <img
          src="..\assets\img\pigsoninstagram_6.png"
          alt="Gallery image 6"
          class="gallery_img_pigs"
        />
      </figure>
    </div>
  </div>
</template>

<style>
.gallery_pigs {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_pigs {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_pigs_1 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_pigs_2 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0px;
}

.gallery_item_pigs_3 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_pigs_4 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 3;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.gallery_item_pigs_5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}

.gallery_item_pigs_6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>