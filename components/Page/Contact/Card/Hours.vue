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
      opacity: 0,
    }"
    :visible="{
      opacity: 1,
      transition: {
        duration: 300,
        delay: 100,
      },
    }"
    :class="`
      grid place-items-center content-around h-full w-full py-[1.5em] bg-zinc-900 rounded shadow-xl
      text-xl text-center text-white text-shadow-lg
      md:(text-2xl) lg:(text-2xl tracking-wide)
    `"
  >
    <IconIon:clock
      :class="[
        'h-[2.2em] w-[2.2em] animate-spin animate-duration-60s',
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
          delay: 300,
        },
      }"
      class="text-1.5em font-kanit"
    >
      Shop Hours
    </div>
    <hr
      v-motion
      :initial="{
        x: -50,
        opacity: 0,
      }"
      :visible="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 300,
        },
      }"
      class="hr w-12ch mx-auto border-red-900/90"
    />
    <div
      v-motion
      :initial="{
        x: -50,
        opacity: 0,
      }"
      :visible="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 300,
        },
      }"
      class="grid gap-1"
    >
      <span class="italic font-semibold">Monday - Friday</span>
      <span
        class="font-nunito-sans font-bold text-green-500 text-shadow-none tracking-wider"
      >
        9am - 6pm
      </span>
    </div>
    <hr
      v-motion
      :initial="{
        x: -50,
        opacity: 0,
      }"
      :visible="{
        x: 0,
        opacity: 1,
        transition: {
          duration: 500,
          delay: 300,
        },
      }"
      class="hr w-12ch mx-auto border-red-900/90"
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
          delay: 300,
        },
      }"
      class="grid gap-1"
    >
      <span class="italic font-semibold">Saturday & Sunday</span>
      <span
        class="font-nunito-sans font-bold text-red-600 text-shadow-none tracking-wider"
        >CLOSED</span
      >
    </div>
  </div>
</template>
