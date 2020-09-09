<template>
<div style="margin-top:60px;">

<div class="gallery_geometry">
                
                <figure class="gallery_item_geometry_1" >
                    <img src="..\assets\img\geometry_1.jpg" alt="Gallery image 1" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_2" >
                    <img src="..\assets\img\geometry_2.jpg" alt="Gallery image 2" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_3" >
                    <img src="..\assets\img\geometry_3.jpg" alt="Gallery image 3" class="gallery_img_geometry">
                </figure>
                <figure class="gallery_item_geometry_4" >
                    <img src="..\assets\img\geometry_4.jpg" alt="Gallery image 4" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_5" >
                    <img src="..\assets\img\geometry_5.jpg" alt="Gallery image 5" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_6" >
                    <img src="..\assets\img\geometry_6.jpg" alt="Gallery image 6" class="gallery_img_geometry">
                </figure>


                 <figure class="gallery_item_geometry_7" >
                    <img src="..\assets\img\geometry_7.jpg" alt="Gallery image 7" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_8" >
                    <img src="..\assets\img\geometry_8.jpg" alt="Gallery image 8" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_9" >
                    <img src="..\assets\img\geometry_9.jpg" alt="Gallery image 9" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_10" >
                    <img src="..\assets\img\geometry_10.jpg" alt="Gallery image 10" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_11" >
                    <img src="..\assets\img\geometry_11.jpg" alt="Gallery image 11" class="gallery_img_geometry">
                </figure>

                 <figure class="gallery_item_geometry_12" >
                    <img src="..\assets\img\geometry_12.jpg" alt="Gallery image 12" class="gallery_img_geometry">
                </figure>

                 <figure class="gallery_item_geometry_13" >
                    <img src="..\assets\img\geometry_13.jpg" alt="Gallery image 13" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_14" >
                    <img src="..\assets\img\geometry_14.jpg" alt="Gallery image 14" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_15" >
                    <img src="..\assets\img\geometry_15.jpg" alt="Gallery image 15" class="gallery_img_geometry">
                </figure>
                 <figure class="gallery_item_geometry_16" >
                    <img src="..\assets\img\geometry_16.jpg" alt="Gallery image 16" class="gallery_img_geometry">
                </figure>
         
              
            </div>



</div>    
</template>

<style>









.gallery_geometry {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(32, 0,25fr);
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
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_2 {
  grid-column-start: 3;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 4;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_3 {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_4 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_5 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_6 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 8;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_7 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 8;
  grid-row-end: 13;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_8 {
  grid-column-start: 1;
  grid-column-end:4;
  grid-row-start: 8;
  grid-row-end: 11;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_9 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 11;
  grid-row-end: 14;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_10 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 14;
  grid-row-end: 17;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_11 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 13;
  grid-row-end: 17;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_12 {
  grid-column-start: 2;
  grid-column-end: 8;
  grid-row-start: 17;
  grid-row-end: 23;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_13 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 23;
  grid-row-end: 27;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_14 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 23;
  grid-row-end: 27;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_15 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 27;
  grid-row-end: 30;
   margin-bottom: 0px;

 
}

.gallery_item_geometry_16 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 27;
  grid-row-end: 30;
   margin-bottom: 0px;

 
}



  

</style>