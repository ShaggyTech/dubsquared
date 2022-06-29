<script lang="ts" setup>
import '@formkit/themes/genesis'

import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'

AppSetup()

const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const fontsHref = ref(
  'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap'
)
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
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
      <Link rel="preload" as="style" :href="fontsHref" />
      <Link rel="stylesheet" :href="fontsHref" defer="true" />
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
