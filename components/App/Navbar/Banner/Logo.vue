<template>
  <div
    :class="`
          relative mt-6 lg:mt-10
          min-h-[0] h-[max-content] max-h-[24vh] w-[max-content] max-w-[40%]
        bg-red-800/20 dark:bg-red-400/10
          backdrop-blur-sm backdrop-brightness-[0.5] dark:backdrop-brightness-[0.6]
        `"
  >
    <div
      class="absolute inset-0 mx-auto z-[100] h-full w-full max-w-[100%] max-h-[100%]"
    >
      <SVGAnimatedGears />
    </div>
    <SVGDubsquaredSquareLogo class="relative h-full w-full z-[101]" />
  </div>
</template>
