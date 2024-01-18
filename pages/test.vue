<template>
  <main>Test</main>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Title',
      script: [
        {
          src: '/assets/js/script.js'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    })
  },
  data() {}
}
</script>
