<script lang="ts" setup>
import '@formkit/themes/genesis'

import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'

AppSetup()

const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
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
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap"
        defer="true"
      />
      <Link rel="preconnect" href="https://fonts.gstatic.com" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
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

<style lang="scss">
// padding for phone screen 'notches'
.apple-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(0vmin, env(safe-area-inset-left));
    padding-right: max(0vmin, env(safe-area-inset-right));
  }
  &--left {
    @supports (padding: max(0px)) {
      padding-left: max(0vmin, env(safe-area-inset-left));
    }
  }
  &--right {
    @supports (padding: max(0px)) {
      padding-right: max(0vmin, env(safe-area-inset-right));
    }
  }
  &--bottom {
    @supports (padding: max(0px)) {
      padding-bottom: max(0vmin, env(safe-area-inset-bottom));
    }
  }
  &--fixed-right {
    @supports (right: max(0px)) {
      right: max(1rem, env(safe-area-inset-right) - 8px);
    }
  }
}
</style>
