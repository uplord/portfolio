// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/nuxt/",
    head: {
      title: 'Michael Allen',
      link: [
        {
          rel: 'icon',
          href: '/favicon.png'
        }
      ],
      htmlAttrs: {
        lang: "en"
      },
      script: [
        {
          src: "/assets/scripts/script.js"
        }
      ],
    }
  },
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/scss/globals.scss',
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700]
    },
    display: "swap"
  },
  modules: ["nuxt-icons", '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image', "@nuxtjs/google-fonts",],
  srcDir: "src/",
  ssr: true,
})