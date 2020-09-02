<template>
<div style="margin-top:60px;">

<div class="gallery_geometry">
                
                <figure class="gallery_item_geometry_1" >
                    <img src="..\assets\img\geometryplus_1.jpg" alt="Gallery image 1" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_2" >
                    <img src="..\assets\img\geometryplus_2.jpg" alt="Gallery image 2" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_3" >
                    <img src="..\assets\img\geometryplus_3.jpg" alt="Gallery image 3" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_4" >
                    <img src="..\assets\img\geometryplus_4.jpg" alt="Gallery image 4" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_5" >
                    <img src="..\assets\img\geometryplus_5.jpg" alt="Gallery image 5" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_6" >
                    <img src="..\assets\img\geometryplus_6.jpg" alt="Gallery image 6" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_7" >
                    <img src="" alt="Gallery image 7" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_8" >
                    <img src="" alt="Gallery image 8" class="gallery_img_geometry">
                </figure>
              
            </div>



</div>    
</template>

<style>









.gallery_geometry {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1rem; 
  
}

.gallery_img_geometry {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; 
}


.gallery_item_geometry_1 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_2 {
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 2;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_3 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_4 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start:3;
  grid-row-end: 4;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_5 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_6 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 5;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_7 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 9;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_8 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 8;
  grid-row-end: 9;
   margin-bottom: 0px;

 
}



  

</style>