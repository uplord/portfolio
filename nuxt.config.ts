// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  devtools: { enabled: true },
  app: {
    buildAssetsDir: "/nuxt/",
  },
  modules: ['nuxt-icons', '@nuxt/image', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'DA Sans': true,
    }
  }
})