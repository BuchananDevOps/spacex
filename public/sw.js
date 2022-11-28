if (!self.define) {
  let e,
    s = {}
  const c = (c, a) => (
    (c = new URL(c + ".js", a).href),
    s[c] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = c), (e.onload = s), document.head.appendChild(e)
        } else (e = c), importScripts(c), s()
      }).then(() => {
        let e = s[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href
    if (s[i]) return
    let t = {}
    const r = e => c(e, i),
      d = { module: { uri: i }, exports: t, require: r }
    s[i] = Promise.all(a.map(e => d[e] || r(e))).then(e => (n(...e), t))
  }
}
define(["./workbox-588899ac"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/AEVzipuvUEXiDVks17TAI/_buildManifest.js",
          revision: "e505fd57c5a495b258bfa2a4c1120093",
        },
        {
          url: "/_next/static/AEVzipuvUEXiDVks17TAI/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1316.50a56f506317615f.js",
          revision: "50a56f506317615f",
        },
        {
          url: "/_next/static/chunks/1649.6a6571bf4e48b60d.js",
          revision: "6a6571bf4e48b60d",
        },
        {
          url: "/_next/static/chunks/1664.c03725dc981281ea.js",
          revision: "c03725dc981281ea",
        },
        {
          url: "/_next/static/chunks/3429.06dfb44cd86bb29f.js",
          revision: "06dfb44cd86bb29f",
        },
        {
          url: "/_next/static/chunks/3911.867bce6a835672fd.js",
          revision: "867bce6a835672fd",
        },
        {
          url: "/_next/static/chunks/4083.88d8f89f06c2a1da.js",
          revision: "88d8f89f06c2a1da",
        },
        {
          url: "/_next/static/chunks/4336.1c3149a663bcf151.js",
          revision: "1c3149a663bcf151",
        },
        {
          url: "/_next/static/chunks/4396.8eebb84cfb1f781c.js",
          revision: "8eebb84cfb1f781c",
        },
        {
          url: "/_next/static/chunks/4529.a9d0f5a2e0982daa.js",
          revision: "a9d0f5a2e0982daa",
        },
        {
          url: "/_next/static/chunks/492.cde4b681fd849b14.js",
          revision: "cde4b681fd849b14",
        },
        {
          url: "/_next/static/chunks/5675-535705f5ecf9200c.js",
          revision: "535705f5ecf9200c",
        },
        {
          url: "/_next/static/chunks/5726.2b29a70a4e69f9cf.js",
          revision: "2b29a70a4e69f9cf",
        },
        {
          url: "/_next/static/chunks/5921.33b1fd28202e8efb.js",
          revision: "33b1fd28202e8efb",
        },
        {
          url: "/_next/static/chunks/6185.754ffe9ba8fdaa65.js",
          revision: "754ffe9ba8fdaa65",
        },
        {
          url: "/_next/static/chunks/6224.8bf8ad51bbf3fb5a.js",
          revision: "8bf8ad51bbf3fb5a",
        },
        {
          url: "/_next/static/chunks/6700.cf316b7d20b2cf0d.js",
          revision: "cf316b7d20b2cf0d",
        },
        {
          url: "/_next/static/chunks/7329.c42d88b1d56cabcf.js",
          revision: "c42d88b1d56cabcf",
        },
        {
          url: "/_next/static/chunks/7555.55d1fb2bd8d6c058.js",
          revision: "55d1fb2bd8d6c058",
        },
        {
          url: "/_next/static/chunks/8155.c06a3a6a6b506b80.js",
          revision: "c06a3a6a6b506b80",
        },
        {
          url: "/_next/static/chunks/825.8cd07522da908e3d.js",
          revision: "8cd07522da908e3d",
        },
        {
          url: "/_next/static/chunks/8328.4bc36caaa36169e2.js",
          revision: "4bc36caaa36169e2",
        },
        {
          url: "/_next/static/chunks/8684.2bd28596c81691d3.js",
          revision: "2bd28596c81691d3",
        },
        {
          url: "/_next/static/chunks/8808.b6e17c8a79f30178.js",
          revision: "b6e17c8a79f30178",
        },
        {
          url: "/_next/static/chunks/9123.dbc9556230f5fec5.js",
          revision: "dbc9556230f5fec5",
        },
        {
          url: "/_next/static/chunks/9414.9c2d66f601f01716.js",
          revision: "9c2d66f601f01716",
        },
        {
          url: "/_next/static/chunks/9512.cbebe7ccb228e0cf.js",
          revision: "cbebe7ccb228e0cf",
        },
        {
          url: "/_next/static/chunks/9709.b659885f1375eef8.js",
          revision: "b659885f1375eef8",
        },
        {
          url: "/_next/static/chunks/9882.3835d85cc2902273.js",
          revision: "3835d85cc2902273",
        },
        {
          url: "/_next/static/chunks/9888-2743cd6e9c5eae8c.js",
          revision: "2743cd6e9c5eae8c",
        },
        {
          url: "/_next/static/chunks/framework-695e56344d65da02.js",
          revision: "695e56344d65da02",
        },
        {
          url: "/_next/static/chunks/main-4dbe0f76e0986c44.js",
          revision: "4dbe0f76e0986c44",
        },
        {
          url: "/_next/static/chunks/pages/_app-b61595bad64f28d2.js",
          revision: "b61595bad64f28d2",
        },
        {
          url: "/_next/static/chunks/pages/_error-9222faf9ee4a01b4.js",
          revision: "9222faf9ee4a01b4",
        },
        {
          url: "/_next/static/chunks/pages/cores-534f863518b0e068.js",
          revision: "534f863518b0e068",
        },
        {
          url: "/_next/static/chunks/pages/crew-9af4ab55b887b507.js",
          revision: "9af4ab55b887b507",
        },
        {
          url: "/_next/static/chunks/pages/dragons-76094f5eea35a24c.js",
          revision: "76094f5eea35a24c",
        },
        {
          url: "/_next/static/chunks/pages/index-b8c64cf2b88f551a.js",
          revision: "b8c64cf2b88f551a",
        },
        {
          url: "/_next/static/chunks/pages/landpads-28f7f8ff1fdd0edb.js",
          revision: "28f7f8ff1fdd0edb",
        },
        {
          url: "/_next/static/chunks/pages/landpads/%5Bid%5D-807016ef5c5b8dfa.js",
          revision: "807016ef5c5b8dfa",
        },
        {
          url: "/_next/static/chunks/pages/launches-83f6a6aef9461ad4.js",
          revision: "83f6a6aef9461ad4",
        },
        {
          url: "/_next/static/chunks/pages/launches/%5Bid%5D-d858bfd305439682.js",
          revision: "d858bfd305439682",
        },
        {
          url: "/_next/static/chunks/pages/launches/latest-487fd50182507394.js",
          revision: "487fd50182507394",
        },
        {
          url: "/_next/static/chunks/pages/launches/next-e37835cece4642a9.js",
          revision: "e37835cece4642a9",
        },
        {
          url: "/_next/static/chunks/pages/launches/past-af5f5c5dd069bdf5.js",
          revision: "af5f5c5dd069bdf5",
        },
        {
          url: "/_next/static/chunks/pages/launches/upcoming-9d475eb3e1abea4f.js",
          revision: "9d475eb3e1abea4f",
        },
        {
          url: "/_next/static/chunks/pages/launchpads-7da28d390b46f699.js",
          revision: "7da28d390b46f699",
        },
        {
          url: "/_next/static/chunks/pages/launchpads/%5Bid%5D-978a06dfda3af4e4.js",
          revision: "978a06dfda3af4e4",
        },
        {
          url: "/_next/static/chunks/pages/payloads-9a3a6f458d19ef14.js",
          revision: "9a3a6f458d19ef14",
        },
        {
          url: "/_next/static/chunks/pages/payloads/%5Bid%5D-ebe4dcfa6519e637.js",
          revision: "ebe4dcfa6519e637",
        },
        {
          url: "/_next/static/chunks/pages/roadster-3f9c70d0d99c6057.js",
          revision: "3f9c70d0d99c6057",
        },
        {
          url: "/_next/static/chunks/pages/rockets-8d9d8463d386cbcc.js",
          revision: "8d9d8463d386cbcc",
        },
        {
          url: "/_next/static/chunks/pages/ships-ea2c34eeda446f5e.js",
          revision: "ea2c34eeda446f5e",
        },
        {
          url: "/_next/static/chunks/pages/ships/%5Bid%5D-3eb7e1363b01089d.js",
          revision: "3eb7e1363b01089d",
        },
        {
          url: "/_next/static/chunks/pages/ships/active-c8db9aa4dff59c5f.js",
          revision: "c8db9aa4dff59c5f",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-c7bf3c5ea2581c8d.js",
          revision: "c7bf3c5ea2581c8d",
        },
        {
          url: "/_next/static/css/3ee7edfcbeb0a54d.css",
          revision: "3ee7edfcbeb0a54d",
        },
        {
          url: "/bg-slate-100.svg",
          revision: "2c7c77db759583ed8cc2063f3fe46c35",
        },
        {
          url: "/bg-slate-700.svg",
          revision: "af5f4e77cf612f8ca1fab19cdba43bfa",
        },
        {
          url: "/grid-card-bgk.svg",
          revision: "0d44073e1482a1d961fa34043c896dfa",
        },
        { url: "/grid.svg", revision: "71270def81f286aab7209f04c762e1e6" },
        {
          url: "/icons/android-chrome-192x192.png",
          revision: "10aecdb24aba1b29c2a651041d1436b9",
        },
        {
          url: "/icons/android-chrome-512x512.png",
          revision: "d9c4ed2deb39f2e29697a8870c6cc9dc",
        },
        {
          url: "/icons/apple-touch-icon.png",
          revision: "d3c18c89480689d5fb887c874e4e930f",
        },
        {
          url: "/icons/browserconfig.xml",
          revision: "91489e9cf4a8c2844bc3dd24cb20e66a",
        },
        {
          url: "/icons/favicon-16x16.png",
          revision: "5840651f62d7f346ffb46edac3f7d994",
        },
        {
          url: "/icons/favicon-32x32.png",
          revision: "7c538901a25bb01f5ec3d31e5d8e90bf",
        },
        {
          url: "/icons/favicon.ico",
          revision: "7c538901a25bb01f5ec3d31e5d8e90bf",
        },
        {
          url: "/icons/mstile-150x150.png",
          revision: "d3c18c89480689d5fb887c874e4e930f",
        },
        {
          url: "/icons/safari-pinned-tab.svg",
          revision: "69c1336e02a934e7754ad37292f55a8d",
        },
        {
          url: "/icons/site.webmanifest",
          revision: "22a36b7df2717d75493d9174d28391be",
        },
        {
          url: "/icons/spacex-twitter-card.jpg",
          revision: "f2b1b847235119d0ae094a606c74fca4",
        },
        { url: "/manifest.json", revision: "86f028da29ea8e18f10a9121ba352e02" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    )
})
