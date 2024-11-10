<template>
  <div id="page">
    <NuxtPage />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
router.afterEach((to, from) => {
  if (to.fullPath === from.fullPath && to.fullPath === '/') {
    window.scrollTo(0, 0)
  }
})
</script>