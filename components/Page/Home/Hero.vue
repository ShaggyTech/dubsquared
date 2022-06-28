<script setup lang="ts">
interface Props {
  observerKey: string
  adjectives?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  observerKey: undefined,
  adjectives: () => ['Default Adjective'],
})

const adjectivesRef = ref(props.adjectives)
const { currentAdjective, showAdjective } = useHeroAdjectives({
  adjectives: adjectivesRef.value,
})

// used for lazy loading real hero background image
const observer = useState<IntersectionObserver>(props.observerKey)
const container = ref<HTMLElement>()
const seen = ref<boolean>(false)

onMounted(async () => {
  const heroObserverCallback: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!target || !isIntersecting) {
        return
      }
      seen.value = true
      observer.disconnect()
    })
  }
  await nextTick()
  observer.value = new IntersectionObserver(heroObserverCallback)
  if (container.value && observer.value) observer.value.observe(container.value)
})
</script>

<script lang="ts">
export default { name: 'PageHomeHero' }
</script>

<template>
  <div
    ref="container"
    :class="`
      hero__container backdrop-filter backdrop-brightness-80
      ${seen ? 'seen' : ''}
    `"
  >
    <!-- hero content wrapper -->
    <div
      :class="`
        grid place-items-center content-center gap-8 pt-10 pb-20 px-4
        bg-stone-900/95 text-stone-200 text-4xl
        md:(text-5xl) lg:(gap-20 pt-20 text-6xl min-h-[min(100vh,1000px)])
      `"
    >
      <!-- hero logo -->
      <LazySVGDubsquaredSquareLogo
        class="animate-swivel-in logo__dubsquared h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <!-- hero text -->
      <div
        class="grid gap-y-8 md:gap-y-10 text-stone-200 text-center text-shadow-xl tracking-wide"
      >
        <!-- hero brand logos -->
        <div class="grid grid-flow-col justify-between place-items-center px-8">
          <LazySVGLogoVolkswagen
            alt="Volkswagen logo"
            class="animate-swivel-in logo__volkswagen h-1.5em w-auto sm:pl-8"
          />
          <LazySVGLogoAudi
            alt="Audi logo"
            class="animate-swivel-in logo__audi h-1em w-auto"
          />
        </div>
        <!-- hero headings -->
        <h1
          class="hero__heading font-kanit font-bold tracking-wide leading-14 md:leading-16 lg:leading-24 animated animate-light-speed-in-right"
        >
          Volkswagen <span class="text-yellow-400/80">&</span> Audi
          <br />
          <span class="adjective-container font-lora">
            <Transition name="adjective">
              <div
                v-if="showAdjective"
                class="adjective font-lora text-stone-200 underline underline-offset-4 tracking-wider"
              >
                {{ currentAdjective }}
              </div>
            </Transition>
          </span>
        </h1>
        <hr class="hero__spacer animated animate-light-speed-in-right" />
        <h2
          class="hero__subheading font-teko text-stone-200 text-xl md:text-3xl animated animate-light-speed-in-left"
        >
          Serving Arlington, TX and the DFW Metroplex since 2009
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero__container {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% center;
  background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1080x720-loading.webp');

  filter: blur(100px);
  transition-property: filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }
  @supports not (-webkit-touch-callout: none) {
    background-attachment: fixed;
  }

  @screen sm {
    background-position: center center;
  }

  // different background images only fetched once .seen class is added via intersection observer
  &.seen {
    filter: blur(0px);
    background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1080x720.webp');

    @screen lg {
      background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1920x1278.webp');
    }
  }
}

.logo__dubsquared {
  animation-delay: 1500ms;
  animation-duration: 0.8s;
}
.logo__volkswagen {
  animation-delay: 2000ms;
  animation-duration: 0.8s;
}
.logo__audi {
  animation-delay: 2300ms;
  animation-duration: 0.8s;
}

.hero__heading {
  animation-delay: 2500ms;
  animation-duration: 0.8s;
}
.hero__spacer {
  animation-delay: 2800ms;
  animation-duration: 0.8s;
}
.hero__subheading {
  animation-delay: 3100ms;
  animation-duration: 0.8s;
}

.adjective-container {
  &:empty::before {
    content: '\200b'; // unicode zero width space character
  }
  .adjective {
    text-decoration-color: theme('colors.yellow.500');
    overflow: hidden;

    &-enter-active,
    &-leave-active {
      transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }
    &-enter-active {
      transform-origin: center top;
    }
    &-leave-active {
      transform-origin: left center;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      text-decoration: none;
      filter: blur(6px);
    }
    &-enter-from {
      transform: translateY(-30%) scaleY(0) scaleX(0);
      text-decoration-color: rgba(0, 0, 0, 0);
    }
    &-leave-to {
      transform: translateX(50%) translateY(-60%) scaleY(0) scaleX(0);
      text-decoration-color: rgba(0, 0, 0, 0);
    }
  }
}

.animate-swivel-in {
  opacity: 0;
  animation-name: swivel-in;
  animation-timing-function: cubic-bezier(0.36, 0.07, 0.19, 0.97);
  animation-fill-mode: forwards;
  transform: scale(0.1) rotate(30deg);
}

@keyframes swivel-in {
  from {
    opacity: 0;
    transform-origin: center center;
    transform: scale(0.1) rotate(30deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
