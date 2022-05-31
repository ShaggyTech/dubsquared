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
    class="hero__container relative h-full w-full backdrop-filter backdrop-brightness-60"
  >
    <!-- hero content wrapper -->
    <div
      class="min-h-800px lg:min-h-[max(100vh,1278px)] grid place-items-center gap-10 py-18 px-4 text-4xl md:text-5xl lg:text-6xl text-warm-gray-200 bg-warm-gray-900/85"
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
          class="relative font-kanit font-bold tracking-wide leading-14 md:leading-18 lg:leading-24"
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
        <h2 class="font-teko text-warm-gray-200 text-xl md:text-3xl">
          Serving Arlington, TX and the DFW Metroplex since 2009
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero__container {
  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }
  @supports not (-webkit-touch-callout: none) {
    background-attachment: fixed;
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% center;
  background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1080x720-loading.webp');
  @screen sm {
    background-position: center center;
  }
  @screen lg {
    background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1920x1278-loading.webp');
  }

  // different background images only fetched once .seen class is added via intersection observer
  &.seen {
    background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1080x720.webp');
    @screen lg {
      background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1920x1278.webp');
    }
  }
}

.animate-float {
  animation: float 6s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}
.animate-swivel-in {
  opacity: 0;
  animation: swivel-in 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.logo__dubsquared {
  animation-delay: 500ms;
}
.logo__volkswagen {
  animation-delay: 2000ms;
  animation-duration: 1s;
}
.logo__audi {
  animation-delay: 2500ms;
  animation-duration: 1s;
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

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(30, 30, 30, 0.6);
    transform: translatey(-5px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(30, 30, 30, 0.6);
    transform: translatey(-5px);
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
