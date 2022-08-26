<script setup lang="ts">
interface Props {
  variant?: 'success' | 'error'
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'success',
})

// styles
const rootStyles = ref(
  'grid gap-4 place-items-center px-8 py-12 text-center font-semibold dark:bg-zinc-900'
)
const iconStyles = ref('text-4xl lg:text-5xl')
const headingStyles = ref('text-2xl lg:text-3xl')
const paragraphStyles = ref(
  'grid place-items-center gap-4 text-xl lg:text-2xl text-gray-300'
)
</script>

<script lang="ts">
export default { name: 'ContactFormSubmissionMessage' }
</script>

<template>
  <div v-if="variant === 'success'" :class="`${rootStyles} text-green-500`">
    <IconIconParkOutline:message-success :class="iconStyles" />
    <h2 :class="headingStyles">Submission successful!</h2>
    <div :class="paragraphStyles">
      Help is on the way, we'll reply via email ASAP.
    </div>
  </div>
  <div v-if="variant === 'error'" :class="`${rootStyles} text-red-600`">
    <IconIconParkOutline:message-failed :class="iconStyles" />
    <h2 :class="headingStyles">Submission Error!</h2>
    <div :class="paragraphStyles">
      <span
        >Oops! Something went wrong trying to submit the form. Please try again
        or contact us directly at:
      </span>
      <Anchor
        href="mailto:info@dubsquared.com"
        class="underline underline-2 underline-offset-6 underline-red-600"
      >
        info@dubsquared.com
      </Anchor>
    </div>
  </div>
</template>
