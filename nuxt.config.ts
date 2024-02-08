// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/less/style.less"],
  ssr: false,
  devtools: { enabled: true },
  app: {
    buildAssetsDir: "/nuxt/",
    head: {
      meta: [
        {
          name: "apple-mobile-web-app-capable",
          content: "yes"
        }
      ],
      script: [
        {
          src: "/assets/js/script.js"
        }
      ]
    }
  },
  modules: [
    "nuxt-icons",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-security"
  ],
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700]
    },
    display: "swap"
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536
    }
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        "frame-ancestors": "'none'"
      }
    }
  },
  nitro: {
    prerender: {
      routes: [
        "/_ipx/f_webp&fit_outside&s_1100x1100/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_550x550/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_280x280/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_140x140/assets/images/me.jpeg",
        "/_ipx/f_webp&fit_outside&s_1320x1628/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_660x814/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_440x542/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_220x271/assets/images/about.png",
        "/_ipx/f_webp&fit_outside&s_652x434/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_326x217/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_272x182/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_136x91/assets/images/petervardy.png",
        "/_ipx/f_webp&fit_outside&s_652x434/assets/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_326x217/assets/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_272x182/assets/images/carmoney.png",
        "/_ipx/f_webp&fit_outside&s_136x91/assets/images/carmoney.png"
      ]
    }
  }
})
