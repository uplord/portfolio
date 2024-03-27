<template>
  <NuxtLayout />
</template>

<script>
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  setup() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
      })
    }
  }
})
</script>
