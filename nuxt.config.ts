// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  devtools: { enabled: true },
  app: {
    buildAssetsDir: "/nuxt/",
  },
  modules: ['nuxt-icons', 'nuxt-security', "@nuxt/image"],
  security: {
    headers: {
      contentSecurityPolicy: {
        'script-src': ["'self'", 'data:', 'https://silly-genie-cd642a.netlify.app'],
      },
    },
  },
})