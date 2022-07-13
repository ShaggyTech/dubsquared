<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

interface Props {
  by?: string
  date?: string
  paragraph?: string
  numStars?: 0 | 1 | 2 | 3 | 4 | 5
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  by: '',
  date: '',
  paragraph: '',
  numStars: 5,
})

const cardRef = ref<HTMLElement>()
const cardMotionVariants = ref<MotionVariants>({
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 500,
      delay: 100,
    },
  },
})

const nameRef = ref<HTMLElement>()
const nameMotionVariants = ref<MotionVariants>({
  initial: {
    x: -20,
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

const dividerRef = ref<HTMLElement>()
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

const paragraphRef = ref<HTMLElement>()
const paragraphMotionVariants = ref<MotionVariants>({
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
  useMotion(nameRef, nameMotionVariants)
  useMotion(iconRef, iconMotionVariants)
  useMotion(dividerRef, dividerMotionVariants)
  useMotion(paragraphRef, paragraphMotionVariants)
})
</script>

<script lang="ts">
export default { name: 'TestimonialCard' }
</script>

<template>
  <div
    ref="cardRef"
    :class="`
      w-fit p-10 rounded-lg shadow-lg bg-neutral-200/50 border border-red-900/40
      dark:(bg-zinc-800/90 border-red-900/20)
    `"
  >
    <div class="flex flex-col gap-4 text-left">
      <div class="flex justify-between px-1">
        <div ref="iconRef" class="flex items-center">
          <SVGStar
            v-for="i in numStars"
            :key="i"
            :filled="true"
            class="w-4 h-4"
          />
          <SVGStar v-for="i in 5 - numStars" :key="i" class="h-4 w-4" />
        </div>
        <span class="text-stone-500 text-sm dark:text-stone-300">
          {{ date }}
        </span>
      </div>

      <hr
        ref="dividerRef"
        class="mt-2 border-t-2 border-t-red-900 dark:border-t-red-900/50"
      />
      <p
        ref="paragraphRef"
        class="mt-4 max-w-md sm:max-w-xs px-2 text-lg dark:text-white"
      >
        "{{ paragraph }}"
      </p>
      <p ref="nameRef" class="flex justify-end gap-2 w-full mt-6">
        <span
          class="mr-4 text-stone-600 text-lg font-lora font-semibold dark:text-stone-200"
        >
          - {{ by }}
        </span>
      </p>
    </div>
  </div>
</template>
