// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  devtools: { enabled: true },
  //experimental: { inlineSSRStyles: false },
  app: {
    buildAssetsDir: "/nuxt/",
    //baseURL: '/projects/main',
  },
  modules: [
    'nuxt-icons',
  ],
})
