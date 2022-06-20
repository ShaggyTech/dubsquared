<script setup lang="ts">
const isBusinessOpen = ref<boolean>(true)

onMounted(() => {
  const date = new Date()
  // Set business timezone
  const timezone = -6
  const timezoneOffset = (date.getTimezoneOffset() + timezone * 60) * 60 * 1000
  // set date to account for actual business timezone
  date.setTime(date.getTime() + timezoneOffset)
  const day = date.getDay()
  const hour = date.getHours()

  // open M-F 9am-6pm, closed saturday and sunday
  if (day < 1 || day > 5 || hour < 9 || hour > 18) isBusinessOpen.value = false
  else isBusinessOpen.value = true
})
</script>

<template>
  <div
    v-motion
    :initial="{
      y: 50,
      opacity: 0,
    }"
    :visible="{
      y: 0,
      opacity: 1,
      transition: {
        duration: 500,
        delay: 500,
      },
    }"
    :class="`
      grid gap-6 sm:gap-8 place-items-center h-full w-full py-[2em]
      shadow-xl bg-zinc-900 text-center text-lg text-white text-shadow-xl
      md:text-xl rounded lg:(gap-10 text-2xl tracking-wide)
    `"
  >
    <IconIon:clock
      :class="[
        'h-[2.5em] w-[2.5em] animate-spin animate-duration-60s',
        isBusinessOpen ? 'text-green-500' : 'text-red-500',
      ]"
    />
    <div
      v-motion
      :initial="{
        x: 50,
        opacity: 0,
      }"
      :visible="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 500,
        },
      }"
      class="text-1.5em"
    >
      Shop Hours
      <hr
        v-motion
        :initial="{
          x: 50,
          opacity: 0,
        }"
        :visible="{
          x: 0,
          opacity: 1,
          transition: {
            duration: 500,
            delay: 500,
          },
        }"
        class="hr w-10ch mx-auto mt-3"
      />
    </div>

    <div
      v-motion
      :initial="{
        x: 50,
        opacity: 0,
      }"
      :visible="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 500,
        },
      }"
      class="grid gap-[0.5em]"
    >
      <span class="italic">Monday - Friday</span>
      <span class="font-bold text-green-500"> 9am - 6pm </span>
    </div>
    <hr class="hr w-8ch mx-auto" />
    <div
      v-motion
      :initial="{
        x: 50,
        opacity: 0,
      }"
      :visible="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 500,
        },
      }"
      class="grid gap-[0.5em]"
    >
      <span class="italic">Saturday & Sunday</span>
      <span class="font-bold text-red-500">CLOSED</span>
    </div>
  </div>
</template>
