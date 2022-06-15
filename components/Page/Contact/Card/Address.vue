<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
    }"
    :visible="{
      opacity: 1,
      backgroundImage: `url('/images/shop-frontage-SQ5.webp')`,
      transition: {
        duration: 500,
        delay: 200,
      },
    }"
    class="grid content-center bg-no-repeat bg-cover bg-center py-4em text-center text-xl rounded lg:(text-2xl tracking-wide)"
  >
    <a
      v-motion
      :initial="{
        y: 20,
        opacity: 0,
      }"
      :visible="{
        y: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 500,
        },
      }"
      href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
      title="Google Maps"
      target="_blank"
      class="grid gap-y-8 p-2em mx-auto bg-zinc-900/90 backdrop-filter backdrop-blur-sm rounded"
    >
      <address class="grid gap-y-8 place-items-center">
        <IconMdi:mapMarkerRadius
          class="h-[2em] w-[2em] text-yellow-500 animate-bounce animate-duration-2000"
        />
        <span
          v-motion
          :initial="{
            y: 20,
            opacity: 0,
          }"
          :visible="{
            y: 0,
            opacity: 1,
            transition: {
              duration: 500,
              delay: 600,
            },
          }"
          class="flex flex-col font-bold text-stone-100 text-shadow-xl"
        >
          <span
            v-motion
            :initial="{
              x: -50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 600,
              },
            }"
            >1223 Colorado Ln</span
          >
          <span
            v-motion
            :initial="{
              x: -50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 600,
              },
            }"
            >Suite 105</span
          >
          <span
            v-motion
            :initial="{
              x: -50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 600,
                delay: 600,
              },
            }"
            >Arlington, TX 76015</span
          >
        </span>
      </address>
      <div class="text-yellow-400 underline underline-offset-4">
        Click for Google Maps Directions
      </div>
    </a>
  </div>
</template>
