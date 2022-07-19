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
    '@kevinmarrec/nuxt-pwa',
    '~/modules/sitemap',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  pwa: {
    meta: {
      // nativeUI: false,
      theme_color: '#7c0000',
      ogHost: 'dubsquared.com',
    },
    manifest: {
      name: 'Dubsquared',
      short_name: 'Dubsquared',
      description:
        'Independent Volkswagen and Audi shop located in Arlington, TX',
    },
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
