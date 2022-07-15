<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

const textRef = ref<HTMLElement>()
const textMotionVariants = ref<MotionVariants>({
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
      delay: 300,
    },
  },
})

const buttonARef = ref<HTMLElement>()
const buttonBRef = ref<HTMLElement>()
const buttonMotionVariants = ref<MotionVariants>({
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 500,
      delay: 400,
    },
  },
})

onMounted(() => {
  useMotion(textRef, textMotionVariants)
  useMotion(buttonARef, buttonMotionVariants)
  useMotion(buttonBRef, buttonMotionVariants)
})
</script>

<script lang="ts">
export default { name: 'PageHomeCallToAction' }
</script>

<template>
  <section
    :class="`
      grid justify-center gap-14 py-14 bg-stone-200 text-center shadow-md transition duration-300
      sm:(gap-12 px-4) md:(gap-16 py-18) lg:(gap-20 py-20) dark:(bg-stone-800 text-gray-100)
    `"
  >
    <h2
      ref="textRef"
      class="max-w-6xl px-6 text-lg font-semibold sm:text-2xl lg:px-16"
    >
      We're here to help get you back on the road and dedicated to keeping you
      there.
    </h2>
    <div
      :class="`
        grid place-self-center grid-rows-2 gap-6
        w-full max-w-8/12 transition-colors duration-300
        sm:(max-w-6/12) md:(grid-rows-1 grid-cols-2 gap-14 max-w-8/12)
      `"
    >
      <Button
        ref="buttonARef"
        size="none"
        text="Schedule Service"
        to="/contact"
        title="Contact us to schedule service"
        class="h-10 px-4 shadow-sm leading-4 whitespace-pre-wrap hover:shadow-md sm:(h-11 leading-normal) md:(h-12)"
      />
      <Button
        ref="buttonBRef"
        size="none"
        text="Our Services"
        variant="secondary"
        to="services"
        title="See all of our Services"
        class="h-10 px-4 shadow-sm leading-4 whitespace-pre-wrap hover:shadow-md sm:(h-11 leading-normal) md:(h-12)"
      />
    </div>
  </section>
</template>
