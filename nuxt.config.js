import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sumagai-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'fnoormat-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: "https://keiryosoken.microcms.io/api/v1/",
      apiKey: "b5c983ce3cb64eaebec51f2ac50a37497f42",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      // Simple usage
      'nuxt-buefy',
      'vue-social-sharing/nuxt',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    async routes() {
      const pages = await axios
        .get('https://keiryosoken.microcms.io/api/v1/articles?limit=100', {
          headers: { 'X-MICROCMS-API-KEY': 'b5c983ce3cb64eaebec51f2ac50a37497f42' }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
