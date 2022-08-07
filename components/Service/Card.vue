<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

type Variant = 'default' | 'small'
type Variants = { [key in Variant]: string }
type ButtonVariant = 'primary' | 'secondary'

interface Props {
  headingStyle?: string
  paragraphStyle?: string
  iconStyle?: string
  dividerStyle?: string
  buttonText?: string
  buttonTo?: string
  buttonVariant?: ButtonVariant
  backgroundImage?: { src: string; cloudinaryId: string; alt: string }
  variant?: Variant
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  headingStyle: '',
  paragraphStyle: '',
  iconStyle: '',
  dividerStyle: '',
  buttonText: '+ Learn More',
  buttonTo: undefined,
  buttonVariant: 'primary',
  backgroundImage: undefined,
  variant: 'default',
})

// styles based on props.variant
const sharedRootStyles =
  'flex flex-col items-center text-stone-100 bg-no-repeat bg-contain z-10'
const rootStyles = reactive<Variants>({
  default: sharedRootStyles,
  small: `${sharedRootStyles} w-fit rounded-t-lg sm:mx-0`,
})

const sharedHeadingStyles =
  'flex flex-col items-center text-center gap-y-[0.7em] p-6 font-bold rounded-md shadow-xl backdrop-blur z-12'
const headingStyles = reactive<Variants>({
  default: `
    ${sharedHeadingStyles}
    min-w-[40%] -mb-7rem mt-[calc(12rem+4vw)] text-2xl
    sm:(mt-19rem p-1.5em text-3xl tracking-wider)
    md:(mt-[calc(28rem+2vw)])
    lg:(max-w-500px mt-[calc(39rem+2vw)])
    xl:(mt-48rem)
  `,
  small: `
    ${sharedHeadingStyles}
    -mb-24 mt-[calc(1rem+35vw)] text-xl
    sm:(mt-60)
  `,
})

const sharedParagraphStyles =
  'flex flex-col items-center font-semibold backdrop-blur-md z-11'
const paragraphStyles = reactive<Variants>({
  default: `
    ${sharedParagraphStyles}
    gap-y-2.5em pb-30 text-lg leading-8 mobile-safe-area
    lg:(leading-9 text-xl)
  `,
  small: `
    ${sharedParagraphStyles}
    gap-y-1em pb-14 px-10 text-md leading-7 rounded-b-lg
  `,
})

const iconStyles = reactive<Variants>({
  default: `text-yellow-500 text-5xl lg:(text-6xl)`,
  small: `text-yellow-500 text-4xl`,
})

const sharedDividerStyles = 'w-[66%] mx-auto border-t-2 border-t-yellow-500/60'
const dividerStyles = reactive<Variants>({
  default: `${sharedDividerStyles} mt-[calc(9rem+2vw)] mb-[calc(1rem+1vw)]`,
  small: `${sharedDividerStyles} mt-36 mb-10`,
})

// style state based on props.variant
const selectedStyle = computed(() => rootStyles[props.variant])
const selectedHeadingStyle = computed(() => headingStyles[props.variant])
const selectedParagraphStyle = computed(() => paragraphStyles[props.variant])
const selectedIconStyle = computed(() => iconStyles[props.variant])
const selectedDividerStyle = computed(() => dividerStyles[props.variant])
const selectedButtonSize = computed(() =>
  props.variant === 'default' ? 'lg' : 'md'
)

// image state
const imgHeight = computed(() => {
  if (props.variant === 'small') {
    return 640
  } else {
    return 810
  }
})

const cardBackgroundImage = computed(() => ({
  initial: useCloudinaryPlaceholder({
    height: imgHeight.value,
  }),
  visibile: useCloudinary({
    path: props.backgroundImage.src,
    id: props.backgroundImage.cloudinaryId,
    height: imgHeight.value,
  }),
}))

// vueuse motion state
const cardRef = ref<HTMLElement>()
const cardMotionVariants = ref<MotionVariants>({
  initial: {
    opacity: 0,
    scale: 0.98,
    backgroundImage: `url('${cardBackgroundImage.value.initial}')`,
  },
  visible: {
    opacity: 1,
    scale: 1,
    backgroundImage: `url('${cardBackgroundImage.value.visibile}')`,
    transition: {
      duration: 500,
      delay: 100,
    },
  },
})

const iconRef = ref<HTMLElement>()
const iconMotionVariants = ref<MotionVariants>({
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.95,
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

const dividerRef = ref<HTMLElement>()
const dividerMotionVariants = ref<MotionVariants>({
  initial: {
    x: -50,
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

const buttonRef = ref<HTMLElement>()
const buttonMotionVariants = ref<MotionVariants>({
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
export default { name: 'ServiceCard' }
</script>

<template>
  <div ref="cardRef" :class="`${selectedStyle}`">
    <div :class="`${selectedHeadingStyle} ${headingStyle}`">
      <div ref="iconRef" :class="`${selectedIconStyle} ${iconStyle}`">
        <slot name="heading-icon" />
      </div>
      <h3><slot name="heading-text" /></h3>
    </div>
    <div :class="`${selectedParagraphStyle} ${paragraphStyle}`">
      <hr ref="dividerRef" :class="`${selectedDividerStyle} ${dividerStyle}`" />
      <slot name="paragraph" />
      <Button
        v-if="variant === 'small' && buttonTo"
        ref="buttonRef"
        :size="selectedButtonSize"
        class="mt-[3.5em] shadow-lg"
        :to="buttonTo"
        :variant="buttonVariant"
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
