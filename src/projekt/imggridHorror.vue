<template>
<div style="margin-top:60px;">

<div class="gallery_horror">
                
                <figure class="gallery_item_horror_1" >
                    <img src="..\assets\img\horror_2.jpg" alt="Gallery image 1" class="gallery_img_horror">
                </figure>
                <figure class="gallery_item_horror_2" >
                    <img src="..\assets\img\horror_5.jpg" alt="Gallery image 2" class="gallery_img_horror">
                </figure>
                <figure class="gallery_item_horror_3" >
                    <img src="..\assets\img\horror_1.jpg" alt="Gallery image 3" class="gallery_img_horror">
                </figure>
                <figure class="gallery_item_horror_4" >
                    <img src="..\assets\img\horror_10.jpg" alt="Gallery image 4" class="gallery_img_horror">
                </figure>
                 <figure class="gallery_item_horror_5" >
                    <img src="..\assets\img\horror_4.jpg" alt="Gallery image 5" class="gallery_img_horror">
                </figure>
                 <figure class="gallery_item_horror_6" >
                    <img src="..\assets\img\horror_3.jpg" alt="Gallery image 6" class="gallery_img_horror">
                </figure>
                 <figure class="gallery_item_horror_7" >
                    <img src="..\assets\img\horror_6.jpg" alt="Gallery image 7" class="gallery_img_horror">
                </figure>
                <figure class="gallery_item_horror_8" >
                    <img src="..\assets\img\horror_10.jpg" alt="Gallery image 8" class="gallery_img_horror">
                </figure>
              
            </div>



</div>    
</template>

<style>









.gallery_horror {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem; 
  
}

.gallery_img_horror {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; 
}


.gallery_item_horror_1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
   margin-bottom: 0px;

 
}

.gallery_item_horror_2 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
   margin-bottom: 0px;

 
}

.gallery_item_horror_3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 5;
   margin-bottom: 0px;

 
}

.gallery_item_horror_4 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 5;
   margin-bottom: 0px;

 
}

.gallery_item_horror_5 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 8;
   margin-bottom: 0px;

 
}

.gallery_item_horror_6 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 7;
   margin-bottom: 0px;

 
}

.gallery_item_horror_7 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 9;
   margin-bottom: 0px;

 
}

.gallery_item_horror_8 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 8;
  grid-row-end: 9;
   margin-bottom: 0px;

 
}



  

</style>