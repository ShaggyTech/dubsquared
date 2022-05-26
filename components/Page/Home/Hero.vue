<template>
  <div class="relative h-full w-full">
    <!-- banner background container -->
    <div
      :class="`
        absolute inset-0 overflow-hidden w-auto z-[97]
        brightness-[0.4] dark:brightness-[0.35] blur-[0.5px]
      `"
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
      :class="`
        relative flex flex-col justify-around place-items-center
        gap-2 lg:gap-8 h-full max-h-[100%]
        mx-auto pb-[min(60vh,_164px)] lg:pb-48
        overlflow-hidden z-[99]
      `"
    >
      <!-- banner logo -->
      <div
        :class="`
          relative min-h-[0] h-[max-content] max-h-[24vh] w-[max-content] max-w-[40%]
          mt-6 lg:mt-10
        bg-red-800/20 dark:bg-red-400/10
          backdrop-blur-sm backdrop-brightness-[0.5] dark:backdrop-brightness-[0.6]
        `"
      >
        <div class="absolute inset-0 z-[100] max-h-[100%] max-w-[100%]">
          <SVGAnimatedGears />
        </div>
        <SVGDubsquaredSquareLogo class="relative h-full w-full z-[101]" />
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
          class="[grid-area:logo-vw] h-[calc((8vh_+_6vw)_/_2)] w-auto"
          height="20"
          width="20"
        />
        <SVGLogoAudi
          alt="audi logo"
          class="[grid-area:logo-audi] h-[calc((8vh_+_4vw)_/_2)] w-auto"
          height="20"
          width="57"
        />
        <!-- headline text -->
        <div
          :class="`
            [grid-area:headline-text]
            flex flex-col gap-y-6 lg:gap-y-14 text-center
          `"
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
