// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  devtools: { enabled: true },
  app: {
    buildAssetsDir: "/nuxt/",
  },
  modules: ['nuxt-icons', 'nuxt-security', "@nuxt/image"],
  security: {
    nonce: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "https://silly-genie-cd642a.netlify.app"
        ],
      }
    },
  }
})