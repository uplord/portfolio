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
  },
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }
})