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
        'script-src': [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          'https:', // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        'style-src': [
          "'self'", // Enables loading of stylesheets hosted on same origin
          'https:', // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'" // Recommended default for most Nuxt apps
        ],
        'img-src': ["'self'", 'data:'], // Add relevant https://... sources if you load images from external sources
        'font-src': ["'self'", 'https:', 'data:'], //  For increased security, replace by the specific sources for fonts
        'base-uri': ["'none'"],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'form-action': ["'self'"],
        'frame-ancestors': false,
        'upgrade-insecure-requests': true
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
