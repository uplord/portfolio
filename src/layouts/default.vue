<template>
  <div id="page">
    <Header />
    <NuxtPage />
    <Footer animate="true" />
  </div>
</template>

<script>
export default {
  setup() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
    }
  }
}
</script>
