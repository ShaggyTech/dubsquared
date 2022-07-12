<script lang="ts" setup>
import { IApp } from '~/utils/app'

const app = useState<IApp>('app')

const footerObjectData =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107441.24127096374!2d-97.19730196382534!3d32.6983079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d2df9e608cb%3A0x7cd9aab902cff64b!2sDubsquared!5e0!3m2!1sen!2sus!4v1645761293912!5m2!1sen!2sus'
</script>

<script lang="ts">
export default { name: 'LayoutPageFooter' }
</script>

<template>
  <footer
    ref="container"
    class="relative w-full h-fit border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <section
      class="flex flex-col h-fit w-full max-w-8xl mx-auto apple-safe-area"
    >
      <LazyObject
        :data="footerObjectData"
        height="800"
        width="800"
        name="Google Maps Dubsquared"
        type="text/html"
        :lazy="true"
        observer-key="page-layout-footer-object"
        class="h-64 w-full mx-auto py-8 px-4 border-none lg:px-8"
      />
      <div class="w-full py-4 px-4 text-center md:text-left lg:px-8">
        <div class="mb-1">
          {{ app.name }}
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2022 <a :href="app.author.link">{{ app.author.name }}</a
          >. All rights reserved. Original template design by
          <a href="https://github.com/viandwi24">viandwi24</a>
        </div>
      </div>
    </section>
  </footer>
</template>
