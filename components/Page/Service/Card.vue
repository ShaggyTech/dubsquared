<template>
  <div
    :class="{
      [`${defaultStyle}`]: true,
    }"
  >
    <div :class="`${defaultHeadingStyle} ${headingStyle}`">
      <div :class="`${defaultIconStyle} ${iconStyle}`">
        <slot name="heading-icon" />
      </div>
      <h2><slot name="heading-text" /></h2>
    </div>
    <div :class="`${defaultParagraphStyle} ${paragraphStyle} mobile-safe-area`">
      <slot name="paragraph" />
      <Button
        size="lg"
        class="mt-[2em] shadow-lg"
        :href="buttonHref"
        :to="buttonTo"
        >{{ buttonText }}</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headingStyle?: string
  paragraphStyle?: string
  iconStyle?: string
  buttonText?: string
  buttonTo?: string
  buttonHref?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  headingStyle: '',
  paragraphStyle: '',
  iconStyle: '',
  buttonText: '+ Learn More',
  buttonTo: undefined,
  buttonHref: '',
})

const defaultStyle = `
  flex flex-col items-center h-full w-full text-stone-100
  not-prose bg-no-repeat bg-contain z-[50]
`
const defaultHeadingStyle = `
  flex flex-col items-center gap-y-[0.7em] min-w-[50%]
  -mb-24 md:-mb-28 lg:-mb-52 mt-36 sm:mt-[19rem] md:mt-[22rem] lg:mt-[37rem] xl:mt-[49rem]
  border-8 p-6 sm:p-[1.5em]
  font-bold text-2xl sm:text-3xl lg:text-4xl sm:tracking-wider text-center
  backdrop-blur rounded-md shadow-xl z-[52]
`
const defaultParagraphStyle = `
  flex flex-col items-center gap-y-[1.5em] backdrop-blur-md
  h-full w-full pt-38 md:pt-46 lg:pt-72 pb-30
  font-semibold text-lg lg:text-xl leading-8 lg:leading-9 z-[51]
`

const defaultIconStyle = `text-5xl lg:text-6xl text-yellow-500`
</script>

<style lang="scss" scoped>
.mobile-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(1.5rem, env(safe-area-inset-left));
    padding-right: max(1.5rem, env(safe-area-inset-right));
  }
  @screen md {
    @supports (padding: max(0px)) {
      padding-left: max(2rem, env(safe-area-inset-left));
      padding-right: max(2rem, env(safe-area-inset-right));
    }
  }
  @screen lg {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
