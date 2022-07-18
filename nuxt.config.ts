import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  components: true,
  css: ['~/assets/sass/vendor.scss'],
  runtimeConfig: {
    sendgridApiKey: '',
  },
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@vueuse/motion/nuxt',
    'nuxt-windicss',
    'unplugin-icons/nuxt',
    '~/modules/sitemap',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  vite: {
    // @ts-ignore
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
  vueuse: {
    ssrHandlers: true,
  },
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
