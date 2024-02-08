/* eslint-disable quotes */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/less/style.less'],
  ssr: false,
  devtools: { enabled: true },
  app: {
    buildAssetsDir: '/nuxt/',
    head: {
      script: [
        {
          src: '/assets/js/script.js'
        }
      ]
    }
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
    ]
    'nuxt-security'
  ],
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
