// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    css: [
      'vuetify/lib/styles/main.sass',
      '@mdi/font/css/materialdesignicons.min.css',
    ],

    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },

    apollo: {
        clients: {
          default: {
            httpEndpoint: 'http://localhost:5000/graphql'
          }
        },
      },

      image: {
        domains: ['rickandmortyapi.com/']
      },
      vuetify: {
        theme: {
          dark: false,
          themes: {
            dark: {
                
            }
          }
        }
      },
      components: true,
})
