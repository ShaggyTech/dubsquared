<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

const isBusinessOpen = ref<boolean>(true)

onMounted(() => {
  const date = new Date()
  // Set business timezone
  const timezone = -6
  const timezoneOffset = (date.getTimezoneOffset() + timezone * 60) * 60 * 1000
  // set date to account for actual business timezone
  date.setTime(date.getTime() + timezoneOffset)
  const day = date.getDay()
  const hour = date.getHours()

  // open M-F 9am-6pm, closed saturday and sunday
  if (day < 1 || day > 5 || hour < 9 || hour > 18) isBusinessOpen.value = false
  else isBusinessOpen.value = true
})

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

const headingRef = ref<HTMLElement>()
const headingMotionVariants = ref<MotionVariants>({
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

const dividerARef = ref<HTMLElement>()
const dividerBRef = ref<HTMLElement>()
const dividerMotionVariants = ref<MotionVariants>({
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

const openSectionRef = ref<HTMLElement>()
const closedSectionRef = ref<HTMLElement>()
const sectionMotionVariants = ref<MotionVariants>({
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

onMounted(() => {
  useMotion(cardRef, cardMotionVariants)
  useMotion(iconRef, iconMotionVariants)
  useMotion(headingRef, headingMotionVariants)
  useMotion(dividerARef, dividerMotionVariants)
  useMotion(openSectionRef, sectionMotionVariants)
  useMotion(dividerBRef, dividerMotionVariants)
  useMotion(closedSectionRef, sectionMotionVariants)
})
</script>

<script lang="ts">
export default { name: 'ContactCardHours' }
</script>

<template>
  <div
    ref="cardRef"
    :class="`
      grid gap-y-1.5em place-items-center content-around min-h-md py-12 px-4
      text-lg text-center text-white text-shadow-lg bg-zinc-900 rounded shadow-xl
      md:(text-xl) lg:(text-2xl min-h-lg tracking-wide)
    `"
  >
    <IconIon:clock
      ref="iconRef"
      :class="[
        'h-[2.2em] w-[2.2em] animate-spin animate-duration-60s',
        isBusinessOpen ? 'text-green-500' : 'text-red-500',
      ]"
    />
    <div ref="headingRef" class="text-1.5em font-kanit">Shop Hours</div>
    <hr ref="dividerARef" class="hr w-12ch mx-auto border-red-900/90" />
    <div ref="openSectionRef" class="grid gap-1">
      <span class="italic font-semibold">Monday - Friday</span>
      <span
        class="font-nunito-sans font-bold text-green-500 text-shadow-none tracking-wider"
      >
        9am - 6pm
      </span>
    </div>
    <hr ref="dividerBRef" class="hr w-12ch mx-auto border-red-900/90" />
    <div ref="closedSectionRef" class="grid gap-1">
      <span class="italic font-semibold">Saturday & Sunday</span>
      <span
        class="font-nunito-sans font-bold text-red-600 text-shadow-none tracking-wider"
        >CLOSED</span
      >
    </div>
  </div>
</template>
