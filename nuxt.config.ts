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
    ssg: {
      hashScripts: true,
      hashStyles: false
    },
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "https://silly-genie-cd642a.netlify.app"
        ],
        'style-src': [
          "'self'",
          "https:",
          "'unsafe-inline'"
        ],
        'img-src': ["'self'", "data:"],
        'font-src': ["'self'", "https:", "data:"],
        'base-uri': ["'none'"],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'", "https://silly-genie-cd642a.netlify.app"],
        'upgrade-insecure-requests': true
      }
    },
    sri: true
  }
})