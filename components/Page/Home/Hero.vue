<script setup lang="ts">
interface Props {
  observerKey: string
  adjectives?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  observerKey: undefined,
  adjectives: () => ['Default Adjective'],
})

const observer = useState<IntersectionObserver>(props.observerKey)
const container = ref<Element | null>(null)

const adjectivesRef = ref(props.adjectives)
const { currentAdjective, showAdjective } = useAdjectives({
  adjectives: adjectivesRef.value,
})

onActivated(async () => {
  await nextTick(() => {
    container.value = document.querySelector('.hero__container')
    if (container.value && observer.value)
      observer.value.observe(container.value)
  })
})
</script>

<script lang="ts">
export default { name: 'PageHomeHero' }
</script>

<template>
  <div
    class="hero__container relative h-full w-full backdrop-filter backdrop-brightness-80 transition-all duration-600"
  >
    <!-- hero content wrapper -->
    <div
      class="min-h-[min(100vh,1000px)] grid place-items-center content-center gap-8 py-10 lg:py-16 px-4 bg-warm-gray-900/95 text-4xl md:text-5xl lg:text-6xl text-warm-gray-200"
    >
      <!-- hero logo -->
      <SVGDubsquaredSquareLogo
        class="animate-swivel-in logo__dubsquared h-36 w-36 md:(h-40 w-40) rounded backdrop-filter backdrop-blur-sm bg-zinc-800/50"
      />
      <!-- hero text -->
      <div
        class="grid gap-y-8 md:gap-y-10 lg:gap-y-14 text-warm-gray-200 text-center text-shadow-xl tracking-wide"
      >
        <!-- hero brand logos -->
        <div class="grid grid-flow-col justify-between place-items-center px-8">
          <SVGLogoVolkswagen
            alt="Volkswagen logo"
            class="h-1.5em w-auto sm:pl-8 animate-swivel-in logo__volkswagen"
          />
          <SVGLogoAudi
            alt="Audi logo"
            class="h-1em w-auto animate-swivel-in logo__audi"
          />
        </div>
        <!-- hero headings -->
        <h1
          class="animated animate-light-speed-in-right hero__heading relative font-kanit font-bold tracking-wide leading-14 md:leading-16 lg:leading-24"
        >
          Volkswagen <span class="text-yellow-400/80">&</span> Audi
          <br />
          <span class="adjective-container font-lora">
            <transition name="adjective">
              <div
                v-if="showAdjective"
                class="adjective font-lora text-warm-gray-200 underline underline-offset-4 tracking-wider"
              >
                {{ currentAdjective }}
              </div>
            </transition>
          </span>
        </h1>
        <hr class="hr" />
        <h2
          class="animated animate-light-speed-in-left hero__subheading font-teko text-warm-gray-200 text-xl md:text-3xl"
        >
          Serving Arlington, TX and the DFW Metroplex since 2009
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animate-swivel-in {
  opacity: 0;
  animation: swivel-in 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.hero__container {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% center;
  filter: blur(100px);
  background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1080x720-loading.webp');

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }
  @supports not (-webkit-touch-callout: none) {
    background-attachment: fixed;
  }

  @screen sm {
    background-position: center center;
  }
  @screen lg {
    background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1920x1278-loading.webp');
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
}
.logo__volkswagen {
  animation-delay: 2500ms;
  animation-duration: 0.8s;
}
.logo__audi {
  animation-delay: 3000ms;
  animation-duration: 0.8s;
}

.hero__heading {
  animation-delay: 3800ms;
  animation-duration: 0.5s;
}
.hero__subheading {
  animation-delay: 3800ms;
  animation-duration: 0.6s;
}

.adjective-container {
  &:empty::before {
    content: '\200b'; // unicode zero width space character
  }
  .adjective {
    text-decoration-color: theme('colors.yellow.500');
    animation-delay: 1500ms;

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
