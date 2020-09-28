<template>
  <div>
    <b-container>
      <titel headline="Why are there so many pigs on instagram?" />
      <kVideo :video="videoid" />
      <paragraph />
      <template>
        <div style="margin-top:60px;">
          <div class="gallery_pigs">
            <figure class="gallery_item_pigs_1" style="background-color:red;">
              <img
                src="@/assets/img/pigsoninstagram_1.png"
                alt="Gallery image 1"
                class="gallery_img_pigs"
              />
            </figure>
            <figure class="gallery_item_pigs_2" style="background-color:green;">
              <img
                src="@/assets/img/pigsoninstagram_2.png"
                alt="Gallery image 2"
                class="gallery_img_pigs"
              />
            </figure>
            <figure class="gallery_item_pigs_3" style="background-color:purple;">
              <img
                src="@/assets/img/pigsoninstagram_3.png"
                alt="Gallery image 3"
                class="gallery_img_pigs"
              />
            </figure>
            <figure class="gallery_item_pigs_4" style="background-color:blue;">
              <img
                src="@/assets/img/pigsoninstagram_4.png"
                alt="Gallery image 4"
                class="gallery_img_pigs"
              />
            </figure>
            <figure class="gallery_item_pigs_5" style="background-color:blue;">
              <img
                src="@/assets/img/pigsoninstagram_5.png"
                alt="Gallery image 5"
                class="gallery_img_pigs"
              />
            </figure>
            <figure class="gallery_item_pigs_6" style="background-color:blue;">
              <img
                src="@/assets/img/pigsoninstagram_6.png"
                alt="Gallery image 6"
                class="gallery_img_pigs"
              />
            </figure>
          </div>
        </div>
      </template>
    </b-container>
  </div>
</template>
   


<script>
import titel from "@/components/project/titel.vue";
import kVideo from "@/components/project/video.vue";
import paragraph from "@/components/project/paragraph.vue";

export default {
  name: "Pigs",
  components: {
    titel,
    kVideo,
    paragraph,
  },
  data() {
    return {
      videoid: 349456126,
    };
  },
};
</script>
