<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

const cardRef = ref<HTMLElement>()
const cardMotionVariants = ref<MotionVariants>({
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    backgroundImage: `url('/images/shop-frontage-SQ5.webp')`,
    transition: {
      duration: 500,
      delay: 100,
    },
  },
})

const iconRef = ref<HTMLElement>()
const iconMotionVariants = ref<MotionVariants>({
  initial: {
    x: -30,
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 400,
      delay: 300,
    },
  },
})

const textRef = ref<HTMLElement>()
const textMotionVariants = ref<MotionVariants>({
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 400,
      delay: 300,
    },
  },
})

const linkRef = ref<HTMLElement>()
const linkMotionVariants = ref<MotionVariants>({
  initial: {
    x: -40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 500,
      delay: 300,
    },
  },
})

onMounted(() => {
  useMotion(cardRef, cardMotionVariants)
  useMotion(iconRef, iconMotionVariants)
  useMotion(textRef, textMotionVariants)
  useMotion(linkRef, linkMotionVariants)
})
</script>

<script lang="ts">
export default { name: 'ContactCardAddress' }
</script>

<template>
  <div
    ref="cardRef"
    :class="`
      min-h-md lg:min-h-lg rounded shadow-xl text-center text-lg text-shadow-lg
      bg-no-repeat bg-cover bg-center md:(text-xl) lg:(text-2xl tracking-wide)
    `"
  >
    <a
      href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
      title="Google Maps"
      target="_blank"
      class="grid gap-y-8 w-full h-full py-18 px-4 bg-zinc-900/95 backdrop-filter backdrop-blur-sm rounded"
    >
      <address class="grid gap-y-8 place-items-center">
        <IconMdi:mapMarkerRadius
          ref="iconRef"
          class="h-[2.2em] w-[2.2em] text-yellow-500 animate-bounce animate-duration-2000"
        />
        <span
          ref="textRef"
          class="grid font-bold text-stone-100 text-shadow-xl"
        >
          <span>1223 Colorado Ln</span>
          <span>Suite 105</span>
          <span>Arlington, TX 76015</span>
        </span>
      </address>
      <span
        ref="linkRef"
        class="text-yellow-400 font-semibold font-nunito-sans tracking-wider underline underline-offset-3"
      >
        Get Directions
      </span>
    </a>
  </div>
</template>
