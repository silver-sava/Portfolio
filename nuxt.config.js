
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type:"text/css", href: "css/pluginss.css" },
      { rel: "stylesheet", type: "text/css", href: "css/stylex.css" }
    ],

    script: [

      { type:"text/javascript", src: "js/modernizr.custom.js"},
      { type:"text/javascript", src:"js/jquery.js"},
      { type:"text/javascript", src: "js/ie8.js"},
      { type:"text/javascript", src: "js/pluginso.js"},
      { type:"text/javascript", src:"js/inito.js"}

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
