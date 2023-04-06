<script setup lang="ts">
interface Props {
  observerKey: string
  adjective?: string
}
const props = withDefaults(defineProps<Props>(), {
  observerKey: undefined,
  adjective: '',
})

const container = ref<HTMLElement>()

const observer = props.observerKey
  ? useState<IntersectionObserver>(props.observerKey)
  : undefined

const seen = props.observerKey
  ? useState(`${props.observerKey}-seen`, () => false)
  : undefined

const observerCallback: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }
    if (seen) seen.value = true
    observer.disconnect()
  })
}

onMounted(async () => {
  await nextTick()
  if (observer && container) {
    observer.value = new IntersectionObserver(observerCallback)
    if (container.value && observer.value) {
      observer.value.observe(container.value)
    }
  }
})
</script>

<script lang="ts">
export default { name: 'PageHomeHero' }
</script>

<template>
  <div
    ref="container"
    :class="`
      hero__container ${seen ? 'seen' : ''}
      overflow-hidden bg-no-repeat bg-cover bg-center-35 sm:bg-center min-w-full
    `"
  >
    <!-- hero content wrapper -->
    <div
      :class="`
        grid place-items-center content-center w-full min-h-screen gap-8 pt-10 pb-20 px-4
        bg-stone-900/80 text-stone-200 text-4xl
        md:(text-5xl) lg:(min-h-[min(100vh,1000px)] gap-20 pt-20 text-6xl)
      `"
    >
      <!-- hero logo -->
      <SVGDubsquaredSquareLogo
        class="logo__dubsquared h-36 w-36 rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm md:(h-40 w-40)"
      />
      <!-- hero text -->
      <div
        class="grid gap-y-10 text-stone-200 text-center text-shadow-xl tracking-wide"
      >
        <!-- hero brand logos -->
        <div class="grid grid-flow-col justify-between place-items-center px-8">
          <SVGLogoVolkswagen
            alt="Volkswagen logo"
            class="logo__volkswagen h-1.5em w-auto sm:pl-8"
          />
          <SVGLogoAudi alt="Audi logo" class="logo__audi h-1em w-auto" />
        </div>
        <!-- hero headings -->
        <h1
          class="hero__heading font-kanit font-bold tracking-wide leading-14 md:leading-16 lg:leading-24"
        >
          Volkswagen <span class="text-yellow-400/80">&</span> Audi
          <br />
          <span
            class="text-stone-200 font-lora tracking-wider underline underline-offset-4 underline-yellow-500"
          >
            Specialists
          </span>
        </h1>
        <hr class="hero__spacer" />
        <h2
          class="hero__subheading font-teko text-stone-200 text-xl md:text-3xl"
        >
          Serving Arlington, TX and the DFW Metroplex since 2009
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero__container {
  background-image: url('/images/placeholders/placeholder-1080x720.webp');

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }
  @supports not (-webkit-touch-callout: none) {
    background-attachment: fixed;
  }

  &.seen {
    background-image: url('/images/audi-r8-hardpoint-front-1080x720.webp');

    @screen lg {
      background-image: url('/images/audi-r8-hardpoint-front-1920x1278.webp');
    }
  }
}

.logo__dubsquared {
  animation-duration: 0.6s;
}
.logo__volkswagen {
  animation-duration: 0.6s;
}
.logo__audi {
  animation-duration: 0.6s;
}

.hero__heading {
  animation-duration: 0.6s;
}
.hero__spacer {
  animation-duration: 0.6s;
}
.hero__subheading {
  animation-duration: 0.6s;
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
