<template>
  <Html
    :class="`${theme === 'dark' ? 'dark' : ''} ${'apple-safe-area'}`"
    :lang="locale"
  >
    <Head>
      <Title>Dubsquared - VW & Audi Specialists - Arlington, TX</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1 viewport-fit=cover"
      />
      <Meta
        name="description"
        content="Dubsquared - Volkswagen & Audi Shop located in Arlington, TX"
      />
      <Link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-zinc-800"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
</script>

<style lang="scss">
.apple-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(0vmin, env(safe-area-inset-left));
    padding-right: max(0vmin, env(safe-area-inset-right));
  }
}
</style>
