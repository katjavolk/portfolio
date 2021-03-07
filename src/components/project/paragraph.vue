<template>
  <div>
    <b-row>
      <b-col lg="8" md="6" sm="12">
        <blockquote class="blockqoute description">
          <p class="mb-0">
            <slot v-html="paragraph"></slot>
          </p>
        </blockquote>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "@/assets/paragraph.css";
export default {
  props: {
    paragraph: String,
  },
};
</script>