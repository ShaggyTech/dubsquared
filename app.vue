<script lang="ts" setup>
import '@formkit/themes/genesis'

import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'

AppSetup()

const theme = useState<ITheme>('theme.current')

const fontsHref = ref(
  'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap'
)

const route = useRoute()

const routeTitle = computed(() =>
  route.meta.title !== 'Home' ? `${route.meta.title} -` : ''
)
const routeCanonical = computed(() => {
  if (route.meta.title?.includes('Error')) return undefined
  else
    return `https://dubsquared.com${route.path}${
      route.path.length > 1 ? '/' : ''
    }`
})
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" lang="en">
    <Head>
      <Title>{{ routeTitle }} Dubsquared - Volkswagen & Audi Specialists</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1 viewport-fit=cover"
      />
      <Meta name="description" :content="route.meta.description" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
      <Link rel="preconnect" href="https://res.cloudinary.com" crossorigin />
      <Link rel="preload" as="style" :href="fontsHref" />
      <Link rel="stylesheet" :href="fontsHref" defer="true" />
      <Link rel="icon" type="image/png" href="/favicon.png" />
      <Link v-if="routeCanonical" rel="canonical" :href="routeCanonical" />
    </Head>
    <Body
      class="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-nunito antialiased duration-300 transition-colors"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
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

// transitions
.page-enter-active {
  transition: all 0.3s ease-in;
}
.page-leave-active {
  transition: opacity 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.page-leave-to {
  opacity: 0;
}

.layout-enter-active {
  transition: all 0.1s ease-out;
}
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

// scrollbar
::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-track {
  background: theme('colors.zinc.100');
  border-left: 1px solid theme('colors.zinc.200');
}
::-webkit-scrollbar-thumb {
  border: 3px solid theme('colors.zinc.200');
  border-radius: 9999px;
  background-color: theme('colors.red.900');
}
::-webkit-scrollbar-thumb:hover {
  background-color: theme('colors.red.700');
}
html.dark {
  ::-webkit-scrollbar-track {
    background: theme('colors.zinc.800');
    border-left: 1px solid theme('colors.zinc.900');
  }
  ::-webkit-scrollbar-thumb {
    border-color: theme('colors.zinc.800');
    background-color: theme('colors.red.900');
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: theme('colors.red.700');
  }
}
</style>
