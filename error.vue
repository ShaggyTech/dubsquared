<script setup lang="ts">
type Props = {
  error?: {
    statusCode: string
    statusMessage: string
    message: string
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  error: undefined,
})

const goHome = () => {
  clearError({ redirect: '/' })
}

const goBack = () => {
  clearError()
  useRouter().back()
}
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center px-4 py-16"
  >
    <div class="flex flex-col items-center gap-6">
      <h1
        class="title bg-gradient text-gradient !mb-0 !text-5xl font-semibold md:!text-9xl"
      >
        Oops! An error has occurred.
      </h1>
      <h2 v-if="error?.message" class="mb-12 text-3xl text-gray-500 md:text-xl">
        Error Message: {{ error?.message }}
      </h2>
      <button type="button" class="flex space-x-2" @click="goHome">
        <IconMdi:garage class="text-3xl text-red-500 dark:text-yellow-500" />
        <span class="text-3xl">Go to Home page</span>
      </button>
      <button type="button" class="flex space-x-2" @click="goBack">
        <IconMdi:arrowLeft
          class="text-3xl text-yellow-500 dark:text-yellow-500"
        />
        <span class="text-3xl">Back to Previous page</span>
      </button>
    </div>
  </div>
</template>
