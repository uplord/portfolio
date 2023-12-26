<template>
  <div id="page">
    <Header />
    <NuxtPage />
    <Footer animate="true" />
  </div>
</template>

<script>
export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'aaa'
    }
  },
}
</script>