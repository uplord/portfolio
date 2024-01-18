/* eslint-disable quotes */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  devtools: { enabled: true },
  app: {
    buildAssetsDir: '/nuxt/'
  },
  modules: [
    'nuxt-icons',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/eslint-module',
      {
        fix: true
      }
    ],
    'nuxt-security'
  ],
  security: {
    nonce: true, // Enables HTML nonce support in SSR mode
    ssg: {
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false // Disables CSP hash support for styles in SSG mode (recommended)
    },
    headers: {
      contentSecurityPolicy: {
        'frame-ancestors': false,
        'script-src': ["'nonce-{{nonce}}'", "'strict-dynamic'"]
      }
    },
    sri: true
  },
  googleFonts: {
    families: {
      'DM Sans': [400, 500, 600, 700]
    },
    display: 'swap'
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  }
})
