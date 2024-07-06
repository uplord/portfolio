<template>
  <main>Test</main>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  setup() {
    useHead({
      title: "Title",
      htmlAttrs: {
        lang: "en"
      }
    })
  },
}
</script>
