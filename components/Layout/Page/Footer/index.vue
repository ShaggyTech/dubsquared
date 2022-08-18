<script lang="ts" setup>
import { useAppStore } from '~/stores/app'

const { appAuthor, appName } = storeToRefs(useAppStore())

const footerObjectData =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107441.24127096374!2d-97.19730196382534!3d32.6983079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d2df9e608cb%3A0x7cd9aab902cff64b!2sDubsquared!5e0!3m2!1sen!2sus!4v1645761293912!5m2!1sen!2sus'
</script>

<script lang="ts">
export default { name: 'LayoutPageFooter' }
</script>

<template>
  <footer
    ref="container"
    class="relative w-full h-fit bg-true-gray-100 border-t border-zinc-900/20 dark:(bg-zinc-900 border-gray-50/20)"
  >
    <section
      class="flex flex-col h-fit w-full max-w-8xl mx-auto apple-safe-area"
    >
      <LazySVGDubsquaredTextLogo class="max-w-lg mx-auto mt-14" />
      <LazyLayoutPageFooterCardGroup />
      <LazyObject
        :data="footerObjectData"
        height="800"
        width="800"
        name="Google Maps Dubsquared"
        type="text/html"
        :lazy="true"
        observer-key="page-layout-footer-object"
        class="h-64 w-full mt-12 mx-auto px-4 border-none lg:(mt-20 px-8)"
      />
      <div
        class="flex flex-col gap-y-3 w-full mt-10 mb-10 py-4 px-4 text-center lg:(mt-20 px-8)"
      >
        <div class="mb-1">{{ appName }}</div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          <div>
            Website by
            <a
              :href="appAuthor.link"
              class="underline underline-2 underline-offset-2 underline-red-700"
              >{{ appAuthor.name }}
            </a>
          </div>
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2022 Dubsquared, LLC. All rights reserved.
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Dubsquared, LLC is not affiliated with any automobile manufacturers.
          Manufacturer names are used only for identification and informational
          purposes.
        </div>
      </div>
    </section>
  </footer>
</template>
