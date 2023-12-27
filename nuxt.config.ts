// https://nuxt.com/docs/api/configuration/nuxt-config

const contentSecurityPolicy = {
  'script-src': [
    "'self'",
    "https:",
    "'unsafe-inline'",
    "'strict-dynamic'",
    "'nonce-{{nonce}}'",
    'silly-genie-cd642a.netlify.app'
  ]
}

export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  devtools: { enabled: true },
  app: {
    buildAssetsDir: "/nuxt/",
  },
  modules: ['nuxt-icons', 'nuxt-security', '@nuxt/image', '@nuxtjs/google-fonts'],
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      contentSecurityPolicy: contentSecurityPolicy,
    },
  },
  googleFonts: {
    families: {
      'DA Sans': true,
    }
  }
})