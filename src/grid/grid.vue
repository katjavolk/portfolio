<template>
  <div>
    <b-container style="padding:0px;">
      <h3>Projekte</h3>
    </b-container>

    <b-container class="bv-example-row">
      <b-row>


        
        <b-col class="column" style="padding:0px;" lg="4" md="6" sm="12">
          <b-link  href="https://de.wikipedia.org/wiki/Katzen">
          <img 
            class="image"
            style="margin:0px;"
            src="https://img.welt.de/img/wissenschaft/mobile207683351/6692508197-ci102l-w1024/Hauskatze.jpg"
          />
          <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Clod, the weather wizard</div>
          
          </div>
          </b-link>
        </b-col>
        
        

        <b-col class="column" style="padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="https://img.welt.de/img/kmpkt/mobile191543787/8842508007-ci102l-w1024/Cat-lying-on-bed.jpg"
          />
          <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Why are there so many pigs on instagram?</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:blue; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="https://www.fressnapf.de/medias/katze-revieranspr-che-580-500.jpg?context=bWFzdGVyfHJvb3R8NTAzNTF8aW1hZ2UvanBlZ3xoZGIvaDNjLzk2NTgxNzIzNDIzMDIuanBnfGRiYTBkNGMwYWI0MWMzYjhmZGZiNmNiM2NlNGY4YzMwZGI4ODlhMTQ5NWU5YTBmNTQ2ZDFlZDU4NTQ4YmNlODk"
          />
           <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Silent Songs</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:blue; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="https://img.welt.de/img/kmpkt/mobile191543787/8842508007-ci102l-w1024/Cat-lying-on-bed.jpg"
          />
          <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Geschichte des Horrors</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:blue; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="https://www.fressnapf.de/medias/katze-revieranspr-che-580-500.jpg?context=bWFzdGVyfHJvb3R8NTAzNTF8aW1hZ2UvanBlZ3xoZGIvaDNjLzk2NTgxNzIzNDIzMDIuanBnfGRiYTBkNGMwYWI0MWMzYjhmZGZiNmNiM2NlNGY4YzMwZGI4ODlhMTQ5NWU5YTBmNTQ2ZDFlZDU4NTQ4YmNlODk"
          />
          <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Optimist:Pessismist</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:green; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%; height:auto; margin:0px;"
            src="https://img.welt.de/img/wissenschaft/mobile207683351/6692508197-ci102l-w1024/Hauskatze.jpg"
          />
          <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Wabi Phone</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:green; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%; height:auto; margin:0px;"
            src="https://img.welt.de/img/wissenschaft/mobile207683351/6692508197-ci102l-w1024/Hauskatze.jpg"
          />
         <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Tinkerfestival Würzburg</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:blue; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="https://img.welt.de/img/kmpkt/mobile191543787/8842508007-ci102l-w1024/Cat-lying-on-bed.jpg"
          />
         <div class="overlay">
          <div class="middlestuff" style="position:absolute;">Geometry+</div>
          </div>
        </b-col>

        <b-col class="column" style="background-color:blue; padding:0px;" lg="4" md="6" sm="12">
          <img
            class="image"
            style="width:100%;  margin:0px;"
            src="https://www.fressnapf.de/medias/katze-revieranspr-che-580-500.jpg?context=bWFzdGVyfHJvb3R8NTAzNTF8aW1hZ2UvanBlZ3xoZGIvaDNjLzk2NTgxNzIzNDIzMDIuanBnfGRiYTBkNGMwYWI0MWMzYjhmZGZiNmNiM2NlNGY4YzMwZGI4ODlhMTQ5NWU5YTBmNTQ2ZDFlZDU4NTQ4YmNlODk"
          />
          <div class="overlay">
          <div style="position:absolute; bottom:8px; left:16px;">hello</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<style >

.column {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color:black;
}

.column:hover .overlay {
  opacity: 0.8;
}



.middlestuff {
  font-family: Syne-Bold;
  line-height: 28px;
  color: white;
  font-size: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}


</style>