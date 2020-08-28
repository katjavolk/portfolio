<template>
<div style="margin-top:60px;">

<div class="gallery_optipessi">
                
                <figure class="gallery_item_optipessi_1" style="background-color:red;">
                    <img src="..\assets\img\optipessi_1.jpg" alt="Gallery image 2" class="gallery_img_optipessi">
                </figure>
                <figure class="gallery_item_optipessi_2" style="background-color:green;">
                    <img src="..\assets\img\optipessi_7.jpg" alt="Gallery image 3" class="gallery_img_optipessi">
                </figure>
                <figure class="gallery_item_optipessi_3" style="background-color:purple;">
                    <img src="..\assets\img\optipessi_2.jpg" alt="Gallery image 4" class="gallery_img_optipessi">
                </figure>
                <figure class="gallery_item_optipessi_4" style="background-color:blue;">
                    <img src="..\assets\img\optipessi_6.jpg" alt="Gallery image 5" class="gallery_img_optipessi">
                </figure>
         
              
            </div>



</div>    
</template>

<style>









.gallery_optipessi {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 1rem; 
  
}

.gallery_img_optipessi {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; 
}


.gallery_item_optipessi_1 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery_item_optipessi_2 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 3;
   margin-bottom: 0px;

 
}

.gallery_item_optipessi_3 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 3;
  grid-row-end: 6;
   margin-bottom: 0px;

 
}

.gallery_item_optipessi_4 {
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 8;
   margin-bottom: 0px;

 
}





  

</style>