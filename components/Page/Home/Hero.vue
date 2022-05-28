<template>
  <div class="hero__container relative h-full w-full">
    <div
      class="h-full w-full grid place-items-center min-h-800px lg:min-h-screen backdrop-filter backdrop-brightness-40 text-gray-200 bg-zinc-900/50"
    >
      <!-- headline logos -->

      <SVGDubsquaredSquareLogo
        class="relative h-40 w-40 backdrop-filter backdrop-blur bg-zinc-800/90 rounded"
      />

      <div
        :class="`
          grid place-content-center place-items-center
          gap-x-4 gap-y-4
          min-w-[80%] w-auto max-w-[1200px]
          
        `"
      >
        <!-- headline text -->
        <div
          class="flex flex-col gap-y-6 lg:gap-y-14 text-center text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
        >
          <div class="grid grid-flow-col space-around place-items-center">
            <SVGLogoVolkswagen alt="volkswagen logo" class="h-1.5em w-auto" />
            <SVGLogoAudi alt="audi logo" class="h-1em w-auto" />
          </div>
          <h1 class="font-bold tracking-wide">
            Volkswagen <span class="text-yellow-400/80">&</span> Audi
            <br />
            <span
              class="block text-neutral-300 underline underline-offset-4 decoration-yellow-400/80 tracking-wider md:mt-2 lg:mt-6"
            >
              Specialists
            </span>
          </h1>
          <hr class="hr" />
          <h2 class="font-teko text-lg sm:text-xl md:text-2xl xl:text-3xl">
            Serving Arlington, TX and the DFW Metroplex since 2009
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero__container {
  background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view--original.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% center;
  background-blend-mode: lighten;

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }

  @supports not (-webkit-touch-callout: none) {
    background-attachment: fixed;
  }
}
</style>
