importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
)

// Precache static assets
workbox.precaching.precacheAndRoute([])

// Cache CSS, JS, and Web Fonts
workbox.routing.registerRoute(
  new RegExp("\\.(?:css|js|woff|woff2|json)$"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "static-resources"
  })
)

// Cache pages
workbox.routing.registerRoute(
  new RegExp("/"),
  new workbox.strategies.NetworkFirst({
    cacheName: "pages-cache"
  })
)

workbox.routing.registerRoute(
  new RegExp("/styleguide"),
  new workbox.strategies.NetworkFirst({
    cacheName: "pages-cache"
  })
)

// Cache images
workbox.routing.registerRoute(
  new RegExp("\\.(?:png|jpg|jpeg|svg|gif)$"),
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
)
