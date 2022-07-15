<script setup lang="ts">
type Props = {
  error?: {
    statusCode: string
    statusMessage: string
    message: string
  }
}
const props = withDefaults(defineProps<Props>(), {
  error: undefined,
})

definePageMeta({
  layout: 'page',
  title: `Error ${props.error?.statusCode}`,
  description: `An error occured: ${props.error?.statusMessage}`,
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center px-4 py-16"
  >
    <div class="flex flex-col items-center gap-6">
      <h1
        class="title bg-gradient text-gradient !mb-0 !text-7xl font-semibold md:!text-9xl"
      >
        Oops! An error has occured.
      </h1>
      <h2 class="mb-12 text-lg text-gray-200 md:text-xl">
        Error Message: {{ error?.message }}
      </h2>
      <button type="button" class="flex space-x-2" @click="handleError">
        <IconMdi:arrowLeft class="h-6 w-6" />
        <span>Home page</span>
      </button>
    </div>
  </div>
</template>
