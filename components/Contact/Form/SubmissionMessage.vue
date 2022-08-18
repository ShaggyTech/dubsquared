<script lang="ts">
export default { name: 'ContactFormSubmissionMessage' }
</script>

<template>
  <div
    class="grid gap-4 place-items-center px-8 py-12 text-center font-semibold text-green-800 dark:text-green-500 dark:bg-zinc-900"
  >
    <IconIconParkOutline:message-success class="text-4xl lg:text-5xl" />
    <h2 class="text-2xl lg:text-3xl">Submission successful!</h2>
    <p class="text-xl lg:text-2xl">
      Help is on the way, we'll reply via email ASAP.
    </p>
  </div>
</template>
