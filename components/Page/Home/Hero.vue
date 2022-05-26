<template>
  <div class="relative h-full w-full z-29">
    <!-- banner background container -->
    <div
      class="absolute inset-0 w-auto h-auto z-30 bg-zinc-900 brightness-[0.4] dark:brightness-[0.35] blur-[0.5px]"
    >
      <!-- banner background image -->
      <img
        src="/images/dubsquared_hardpoint_r8.jpg"
        alt="Audi R8 LMS"
        :class="`
          relative h-full w-full object-cover aspect-video
          object-[-5vw_calc((-5vw_+_-40vh)_/_2)]
          sm:object-[0_calc((-5vw_+_-40vh)_/_2)]
          md:object-[0_calc((-50vw_+_20vh)_/_2)]
          lg:object-[0_calc((-5vw_+_-5vh)_/_2)]]
        `"
      />
    </div>
    <!-- banner main container-->
    <div
      ref="headerBanner"
      class="relative w-full h-full grid place-items-center gap-10 z-30"
    >
      <!-- banner logo -->
      <div
        class="relative bg-red-800/20 dark:bg-red-400/30 backdrop-blur-sm backdrop-brightness-[0.5] dark:backdrop-brightness-[0.6]"
      >
        <!-- <div class="absolute inset-0 z-100 max-h-[100%] max-w-[100%]">
          <SVGAnimatedGears height="12rem" />
        </div> -->
        <SVGDubsquaredSquareLogo class="relative h-40 w-40 z-31" />
      </div>
      <!-- banner headline container -->
      <div
        :class="`
          headline sm:rounded
          grid place-content-center place-items-center
          gap-x-4 gap-y-4
          min-w-[80%] w-auto max-w-[1200px]
          p-6 lg:py-10
          backdrop-blur backdrop-brightness-[0.5] dark:backdrop-brightness-[0.7]
          text-gray-200 bg-red-800/50 dark:bg-red-900/60
        `"
      >
        <!-- headline logos -->
        <SVGLogoVolkswagen
          alt="volkswagen logo"
          class="[grid-area:logo-vw] h-5em w-auto"
          height="20"
          width="20"
        />
        <SVGLogoAudi
          alt="audi logo"
          class="[grid-area:logo-audi] h-4em w-auto"
          height="20"
          width="57"
        />
        <!-- headline text -->
        <div
          class="[grid-area:headline-text] flex flex-col gap-y-6 lg:gap-y-14 text-center"
        >
          <h1
            :class="`
              three-d-text font-teko [font-variant:small-caps] font-bold tracking-wide
              text-3xl md:text-4xl lg:text-6xl xl:text-7xl
            `"
          >
            Volkswagen <span class="text-zinc-400/80">/</span> Audi
            <br />
            <span
              class="block text-neutral-300 underline underline-offset-4 decoration-yellow-400/80 tracking-wider md:mt-2 lg:mt-6"
            >
              Specialists
            </span>
          </h1>
          <hr class="hr" />
          <h2
            :class="`font-alatsi font-medium text-lg sm:text-xl md:text-2xl xl:text-3xl`"
          >
            Serving Arlington, TX and the DFW Metroplex since 2009
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headline {
  grid:
    'logo-vw logo-audi' auto
    'headline-text headline-text' auto
    / auto auto;
  @media (min-width: theme('screens.lg')) {
    grid:
      'logo-vw headline-text logo-audi' auto
      / 1fr 4fr 1fr;
  }
}
</style>
