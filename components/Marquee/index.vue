<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

const logoCollection = [
  {
    src: '/images/logos/logo-apr-250x80.webp',
    alt: 'APR',
  },
  {
    src: '/images/logos/logo-034-motorsport-250x80.webp',
    alt: '034 Motorsport',
  },
  {
    src: '/images/logos/logo-bosch-250x80.webp',
    alt: 'Bosch Automotive',
  },
  {
    src: '/images/logos/logo-hengst-250x80.webp',
    alt: 'Hengst Filters',
  },
  {
    src: '/images/logos/logo-hr-250x80.webp',
    alt: 'H&R Suspension',
  },
  {
    src: '/images/logos/logo-integrated-engineering-250x80.webp',
    alt: 'Integrated Engineering',
  },
  {
    src: '/images/logos/logo-motul-250x80.webp',
    alt: 'Motul',
  },
  {
    src: '/images/logos/logo-ngk-250x80.webp',
    alt: 'NGK Spark Plugs',
  },
  {
    src: '/images/logos/logo-p3-gauges-250x80.webp',
    alt: 'P3 Gauges',
  },
  {
    src: '/images/logos/logo-south-bend-250x80.webp',
    alt: 'South Bend Clutch',
  },
  {
    src: '/images/logos/logo-textar-250x80.webp',
    alt: 'Textar Brakes',
  },
]
</script>

<script lang="ts">
export default { name: 'Marquee' }
</script>

<template>
  <Vue3Marquee>
    <div
      class="flex gap-x-32 items-center h-[100px] w-full px-16 bg-gray-100 dark:bg-gray-100"
    >
      <img
        v-for="(item, i) in logoCollection"
        :key="i"
        :src="item.src"
        :alt="item.alt"
        loading="lazy"
        height="40"
        width="125"
      />
    </div>
  </Vue3Marquee>
</template>
