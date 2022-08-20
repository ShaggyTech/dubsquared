import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  autoImports: {
    dirs: [
      // scan composables nested one level deep
      'composables/*/index.{ts,js,mjs,mts}',
    ],
  },
  nitro: {
    rollupConfig: {
      output: {
        generatedCode: {
          symbols: true,
        },
      },
    },
  },
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    'virtual:windi-devtools',
    '~/assets/sass/vendor.scss',
  ],
  runtimeConfig: {
    sendgridApiKey: '',
    sendgridFromEmail: '',
    sendgridFromName: '',
    sendgridToEmail: '',
    sendgridToName: '',
    companyEmail: '',
  },
  modules: [
    '@formkit/nuxt',
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'acceptHMRUpdate',
          'defineStore',
          'getActivePinia',
          'skipHydrate',
          'storeToRefs',
        ],
      },
    ],
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-windicss',
    'unplugin-icons/nuxt',
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
