<template>
  <div style="margin-top:60px;">
    <div class="gallery_wizard">
      <figure class="gallery_item_wizard_1" style="background-color:red;">
        <img src="..\assets\img\wizard_1.jpg" alt="Gallery image 2" class="gallery_img_wizard" />
      </figure>
      <figure class="gallery_item_wizard_2" style="background-color:green;">
        <img src="..\assets\img\wizard_2.png" alt="Gallery image 3" class="gallery_img_wizard" />
      </figure>
      <figure class="gallery_item_wizard_3" style="background-color:purple;">
        <img src="..\assets\img\wizard_3.png" alt="Gallery image 4" class="gallery_img_wizard" />
      </figure>
      <figure class="gallery_item_wizard_4" style="background-color:blue;">
        <img src="..\assets\img\wizard_4.jpg" alt="Gallery image 5" class="gallery_img_wizard" />
      </figure>
    </div>
  </div>
</template>

<style>
.gallery_wizard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem;
}

.gallery_img_wizard {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery_item_wizard_1 {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  margin-bottom: 0px;
}

.gallery_item_wizard_2 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_wizard_3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
  margin-bottom: 0px;
}

.gallery_item_wizard_4 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 9;
  margin-bottom: 0px;
}
</style>