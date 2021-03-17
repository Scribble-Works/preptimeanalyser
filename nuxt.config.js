export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'preptime_analyser',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~layouts/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],
  //google fonts impleemntation
  googleFonts: {
    families: {
      Roboto: true,
      Squada_One: true,
      PT_Sans: true
    },
    display: 'swap',
    subsets: 'cyrillic',
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: false,
    download: true,
    base64: false,
    inject: true,
    overwriting: false,
    //outputDir: this.options.dir.assets,
    stylePath: 'css/fonts.css',
    fontsDir: 'fonts',
    fontsPath: '~assets/fonts'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
