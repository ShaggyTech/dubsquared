<script setup lang="ts">
interface Props {
  adjectives?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  adjectives: () => ['Default Adjective'],
})

const adjectivesRef = ref(props.adjectives)
const { currentAdjective, showAdjective } = useHeroAdjectives({
  adjectives: adjectivesRef.value,
})

// const heroObserverCallback: IntersectionObserverCallback = (
//   element,
//   observer
// ) => {
//   element.forEach(({ target, isIntersecting }) => {
//     if (!target || !isIntersecting) {
//       return
//     }
//     target.classList.add('seen')
//     observer.unobserve(target)
//   })
// }

const heroObserverName = useState<string>('heroObserverName')
const homeHeroElements = useState<Element[]>('homeHeroElements')
const heroObserver = useState<IntersectionObserver | undefined>(
  heroObserverName.value
)

onMounted(async () => {
  const elements = document ? document?.querySelectorAll('.page-hero') : []
  if (elements)
    elements.forEach((element) => {
      // element.classList.remove('seen')
      homeHeroElements.value.push(element)
    })
  await nextTick()
  if (homeHeroElements.value && heroObserver.value) {
    homeHeroElements.value.forEach((element) => {
      heroObserver?.value?.observe(element)
    })
  }

  console.log('from onMounted home hero -------')
  console.log('elements: ', elements)
  console.log('heroElements: ', homeHeroElements.value)
  console.log('observer: ', heroObserver.value)
})

// // used for lazy loading real hero background image
// const observer = useState<IntersectionObserver>(props.observerKey)
// const container = useState<HTMLElement | null>(`${props.observerKey}-container`)

// onMounted(async () => {
//   await nextTick(() => {
//     container.value = document.querySelectorAll('.page-hero')
//     if (container.value && observer.value)
//       observer.value.observe(container.value)
//   })
// })
</script>

<script lang="ts">
export default { name: 'PageHomeHero' }
</script>

<template>
  <div class="page-hero page-hero--home backdrop-filter backdrop-brightness-80">
    <!-- hero content wrapper -->
    <div
      :class="`
        grid place-items-center content-center gap-8 pt-10 pb-20 px-4
        bg-stone-900/95 text-stone-200 text-4xl
        md:(text-5xl) lg:(gap-20 pt-20 text-6xl min-h-[min(100vh,1000px)])
      `"
    >
      <!-- hero logo -->
      <SVGDubsquaredSquareLogo
        class="logo__dubsquared animate-swivel-in h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <!-- hero text -->
      <div
        class="grid gap-y-8 md:gap-y-10 text-stone-200 text-center text-shadow-xl tracking-wide"
      >
        <!-- hero brand logos -->
        <div class="grid grid-flow-col justify-between place-items-center px-8">
          <SVGLogoVolkswagen
            alt="Volkswagen logo"
            class="logo__volkswagen animate-swivel-in h-1.5em w-auto sm:pl-8"
          />
          <SVGLogoAudi
            alt="Audi logo"
            class="logo__audi animate-swivel-in h-1em w-auto"
          />
        </div>
        <!-- hero headings -->
        <h1
          class="hero__heading font-kanit font-bold tracking-wide leading-14 md:leading-16 lg:leading-24 animated animate-light-speed-in-right"
        >
          Volkswagen <span class="text-yellow-400/80">&</span> Audi
          <br />
          <span class="adjective-container font-lora">
            <transition name="adjective">
              <div
                v-if="showAdjective"
                class="adjective font-lora text-stone-200 underline underline-offset-4 tracking-wider"
              >
                {{ currentAdjective }}
              </div>
            </transition>
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
.animate-swivel-in {
  opacity: 0;
  animation: swivel-in 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.logo__dubsquared {
  animation-delay: 1500ms;
}
.logo__volkswagen {
  animation-delay: 2500ms;
  animation-duration: 0.8s;
}
.logo__audi {
  animation-delay: 3100ms;
  animation-duration: 0.8s;
}

.hero__heading {
  animation-delay: 3700ms;
  animation-duration: 0.5s;
}
.hero__spacer {
  animation-delay: 4000ms;
  animation-duration: 0.5s;
}
.hero__subheading {
  animation-delay: 4300ms;
  animation-duration: 0.6s;
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
