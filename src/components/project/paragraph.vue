<template>
  <div>
    <blockquote class="blockqoute description">
      <p class="mb-0">
        <slot v-html="paragraph"></slot>
      </p>
    </blockquote>
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