<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

interface Props {
  headingStyle?: string
  paragraphStyle?: string
  iconStyle?: string
  dividerStyle?: string
  buttonText?: string
  buttonTo?: string
  buttonHref?: string
  backgroundImage?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  headingStyle: '',
  paragraphStyle: '',
  iconStyle: '',
  dividerStyle: '',
  buttonText: '+ Learn More',
  buttonTo: undefined,
  buttonHref: '',
  backgroundImage: '',
})

const defaultStyle = `
  flex flex-col items-center text-stone-100
  bg-no-repeat bg-contain z-10
`
const defaultHeadingStyle = `
  flex flex-col items-center gap-y-[0.7em] min-w-[40%] lg:(max-w-500px)
  -mb-7rem mt-[calc(12rem+4vw)] p-6 font-bold text-2xl text-center
  backdrop-blur rounded-md shadow-xl z-12
  sm:(mt-19rem p-1.5em text-3xl tracking-wider) md:(mt-[calc(28rem+2vw)]) lg:(mt-[calc(39rem+2vw)]) xl:(mt-48rem)
`
const defaultParagraphStyle = `
  flex flex-col items-center gap-y-1.5em backdrop-blur-md
  pb-30 font-semibold text-lg leading-8 z-11
  lg:(leading-9 text-xl)
`
const defaultIconStyle = `text-yellow-500 text-5xl lg:(text-6xl)`
const defaultDividerStyle = `
  w-[66%] mx-auto mt-[calc(9rem+2vw)] mb-[calc(1rem+1vw)] border-t-2 border-t-yellow-500/60
`

const cardRef = ref<HTMLElement>()
const cardMotionVariants = ref<MotionVariants>({
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    backgroundImage: `url('${props.backgroundImage}')`,
    transition: {
      duration: 500,
      delay: 100,
    },
  },
})

const dividerRef = ref<HTMLElement>()
const dividerMotionVariants = ref<MotionVariants>({
  initial: {
    x: -75,
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

const iconRef = ref<HTMLElement>()
const iconMotionVariants = ref<MotionVariants>({
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.8,
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

const buttonRef = ref<HTMLElement>()
const buttonMotionVariants = ref<MotionVariants>({
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 300,
      delay: 200,
    },
  },
})

onMounted(() => {
  useMotion(cardRef, cardMotionVariants)
  useMotion(dividerRef, dividerMotionVariants)
  useMotion(iconRef, iconMotionVariants)
  useMotion(buttonRef, buttonMotionVariants)
})
</script>

<script lang="ts">
export default { name: 'PageServiceCard' }
</script>

<template>
  <div
    ref="cardRef"
    :class="{
      [`${defaultStyle}`]: true,
    }"
  >
    <div :class="`${defaultHeadingStyle} ${headingStyle}`">
      <div ref="iconRef" :class="`${defaultIconStyle} ${iconStyle}`">
        <slot name="heading-icon" />
      </div>
      <h2><slot name="heading-text" /></h2>
    </div>
    <div :class="`${defaultParagraphStyle} ${paragraphStyle} mobile-safe-area`">
      <hr ref="dividerRef" :class="`${defaultDividerStyle} ${dividerStyle}`" />
      <slot name="paragraph" />
      <Button
        ref="buttonRef"
        size="lg"
        class="mt-[3.5em] shadow-lg"
        :href="buttonHref"
        :to="buttonTo"
        >{{ buttonText }}</Button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(2.2rem, env(safe-area-inset-left));
    padding-right: max(2.2rem, env(safe-area-inset-right));
  }
  @screen md {
    @supports (padding: max(0px)) {
      padding-left: max(10%, env(safe-area-inset-left));
      padding-right: max(10%, env(safe-area-inset-right));
    }
  }
  @screen lg {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
