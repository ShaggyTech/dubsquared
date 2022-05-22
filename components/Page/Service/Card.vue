<template>
  <div
    :class="{
      [`${defaultStyle}`]: true,
      seen,
    }"
  >
    <div :class="`${defaultHeadingStyle} ${headingStyle}`">
      <div :class="`${defaultIconStyle} ${iconStyle}`">
        <slot name="heading-icon" />
      </div>
      <h2><slot name="heading-text" /></h2>
    </div>
    <div :class="`${defaultParagraphStyle} ${paragraphStyle}`">
      <slot name="paragraph" />
      <Button
        size="lg"
        class="w-fit mt-[2em] md:ml-[2em]"
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

const seen = useState<boolean>('service-card.seen')

const defaultStyle = `
  flex flex-col items-center h-full w-full text-gray-200
  not-prose bg-no-repeat bg-contain lg:bg-[length:100%_55%] z-[50] bg-red-900
`
const defaultHeadingStyle = `
  flex flex-col items-center gap-y-[0.8em] min-w-[50%]
  -mb-24 md:-mb-28 lg:-mb-[12.5rem] mt-[6em] sm:mt-[12em] md:mt-[14em] p-8 sm:p-[2em]
  font-bold text-2xl sm:text-3xl lg:text-5xl sm:tracking-wider text-center
  backdrop-blur rounded-md shadow-xl z-[52]
`
const defaultParagraphStyle = `
  flex flex-col gap-y-[2em] backdrop-blur-md
  h-full w-full px-[2.5em] lg:px-[15%] pt-[7em] lg:pt-[11em] pb-[3em]
  text-xl md:text-2xl leading-8 lg:leading-10 z-[51]
`

const defaultIconStyle = `text-5xl lg:text-6xl text-yellow-500`
</script>
