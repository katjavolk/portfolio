<template>
<div style="margin-top:60px;">

<div class="gallery">
                
                <figure class="gallery__item gallery__item--2" style="background-color:red;">
                    <img src="..\assets\img\wizard_1.jpg" alt="Gallery image 2" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--3" style="background-color:green;">
                    <img src="..\assets\img\wizard_2.png" alt="Gallery image 3" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--4" style="background-color:purple;">
                    <img src="..\assets\img\wizard_2.png" alt="Gallery image 4" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--5" style="background-color:blue;">
                    <img src="..\assets\img\wizard_4.jpg" alt="Gallery image 5" class="gallery__img">
                </figure>
              
            </div>



</div>    
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
  grid-row-end: 4;
  margin-bottom: 0px;


}

.gallery__item--2 {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
   margin-bottom: 0px;

 
}

.gallery__item--3 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery__item--4 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery__item--5 {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 9;
   margin-bottom: 0px;

 
}

.gallery__item--6 {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
   margin-bottom: 0px;

  
}
</style>