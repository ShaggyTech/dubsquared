<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  observerKey: {
    type: String,
    required: true,
  },
})

const observer = useState<IntersectionObserver>(props.observerKey)
const container = ref<Element | null>()

onMounted(async () => {
  await nextTick(() => {
    container.value = document.querySelector('.hero__container')
    if (container.value) observer.value.observe(container.value)
  })
})
</script>

<script lang="ts">
export default { name: 'PageHomeHero' }
</script>

<template>
  <div class="hero__container relative h-full w-full">
    <!-- hero content wrapper -->
    <div
      :class="`
        min-h-800px lg:min-h-[max(100vh,1000px)]
        grid place-items-center gap-10 py-18 px-4
        text-4xl md:text-5xl lg:text-6xl text-warm-gray-200
        bg-warm-gray-900/85 backdrop-filter backdrop-brightness-70
      `"
    >
      <!-- hero logos -->
      <SVGDubsquaredSquareLogo
        class="h-36 w-36 md:(h-40 w-40) rounded backdrop-filter backdrop-blur-sm bg-zinc-800/50"
      />
      <!-- hero text container -->
      <div class="grid place-content-center place-items-center gap-x-4 gap-y-4">
        <!-- hero text -->
        <div
          class="grid gap-y-6 lg:gap-y-14 text-warm-gray-200 text-center text-shadow-xl tracking-wide"
        >
          <!-- hero brand logos -->
          <div
            class="grid grid-flow-col justify-between place-items-center px-8"
          >
            <SVGLogoVolkswagen
              alt="Volkswagen logo"
              class="h-1.5em w-auto sm:pl-8"
            />
            <SVGLogoAudi alt="Audi logo" class="h-1em w-auto" />
          </div>
          <!-- hero headings -->
          <h1
            class="font-kanit font-bold tracking-wide leading-12 md:leading-20"
          >
            Volkswagen <span class="text-yellow-400/80">&</span> Audi
            <br />
            <span
              class="font-lora block text-warm-gray-200 underline underline-offset-4 decoration-yellow-400/70 tracking-wider"
            >
              Specialists
            </span>
          </h1>
          <hr class="hr" />
          <h2 class="font-teko text-warm-gray-200 text-xl md:text-3xl">
            Serving Arlington, TX and the DFW Metroplex since 2009
          </h2>
        </div>
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
  background-blend-mode: lighten;
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
</style>
