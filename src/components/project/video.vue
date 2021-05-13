 <template>
  <div>
    <vueVimeoPlayer
      ref="player"
      :video-id="video"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script>
import { vueVimeoPlayer } from "vue-vimeo-player";
// vue player docu: https://github.com/dobromir-hristov/vue-vimeo-player/tree/master
// vimeo player docu: https://github.com/vimeo/player.js/#embed-options
export default {
  name: "VimeoVideoPlayer",
  components: { vueVimeoPlayer },
  props: {
    video: Number,
  },
  data() {
    return {
      options: {
        muted: false,
        autoplay: false,
        controls: false,
        title: false,
        portrait: false,
        byline: false,
        responsive: true,
        //height: 1000,
      },
      playerReady: false,
    };
  },
  methods: {
    onReady() {
      this.playerReady = true;
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },
  },
};
</script>

