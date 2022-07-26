<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

const logo = {
  height: 40,
  width: 125,
  lazy: true,
}

const logoCollection = [
  {
    src: '/images/logos/brands/logo-apr-250x80.webp',
    cloudinaryId: 'lfqyli',
    alt: 'APR',
  },
  {
    src: '/images/logos/brands/logo-034-motorsport-250x80.webp',
    cloudinaryId: 'qgsxn9',
    alt: '034 Motorsport',
  },
  {
    src: '/images/logos/brands/logo-bosch-250x80.webp',
    cloudinaryId: 'jbnlev',
    alt: 'Bosch Automotive',
  },
  {
    src: '/images/logos/brands/logo-hengst-250x80.webp',
    cloudinaryId: 'uva5cc',
    alt: 'Hengst Filters',
  },
  {
    src: '/images/logos/brands/logo-hr-250x80.webp',
    cloudinaryId: 'r7elmc',
    alt: 'H&R Suspension',
  },
  {
    src: '/images/logos/brands/logo-integrated-engineering-250x80.webp',
    cloudinaryId: 'tbplwt',
    alt: 'Integrated Engineering',
  },
  {
    src: '/images/logos/brands/logo-motul-250x80.webp',
    cloudinaryId: 'c7uhgd',
    alt: 'Motul',
  },
  {
    src: '/images/logos/brands/logo-ngk-250x80.webp',
    cloudinaryId: 'kfaovj',
    alt: 'NGK Spark Plugs',
  },
  {
    src: '/images/logos/brands/logo-p3-gauges-250x80.webp',
    cloudinaryId: 'ckkbw6',
    alt: 'P3 Gauges',
  },
  {
    src: '/images/logos/brands/logo-south-bend-250x80.webp',
    cloudinaryId: 'qr92ev',
    alt: 'South Bend Clutch',
  },
  {
    src: '/images/logos/brands/logo-textar-250x80.webp',
    cloudinaryId: 'rjze8j',
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
      class="flex gap-x-32 items-center h-[100px] px-16 bg-gray-100 dark:bg-gray-100"
    >
      <Image
        v-for="(item, i) in logoCollection"
        :key="i"
        :src="
          useCloudinary({
            path: item.src,
            id: item.cloudinaryId,
            height: logo.height,
            width: logo.width,
          })
        "
        :alt="item.alt"
        v-bind="logo"
      />
    </div>
  </Vue3Marquee>
</template>
