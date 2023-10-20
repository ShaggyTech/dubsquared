import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  // failing on Nuxt RC.10 cloudflare build with sourcemap set to true, revisit when fixed
  sourcemap: {
    server: false,
    client: false,
  },
  imports: {
    dirs: [
      // scan composables nested one level deep
      'composables/*/index.{ts,js,mjs,mts}',
    ],
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
    public: {
      companyEmail: '',
      companyPhone: '',
    },
  },
  modules: [
    '@formkit/nuxt',
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-windicss',
    'unplugin-icons/nuxt',
    'nuxt-gtag',
    '~/modules/sitemap',
  ],
  app: {
    head: {
      script: [{ src: '/stats/js/script.js', defer: true, 'data-api': '/stats/api/event', 'data-domain': 'dubsquared.com' }],
    },
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  gtag: {
    id: 'G-WMN6B7B8LQ'
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
