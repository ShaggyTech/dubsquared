<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Performance Upgrades',
  description:
    'Dubsquared carries a wide variety of Volkswagen and Audi performance parts from industry leading brands like APR and 034 Motorsport',
})

const heroObserverName = ref('page-performance-upgrades-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Volkswagen Audi performance upgrades',
  height: '1080',
  width: '810',
  src: '/images/service-performance-upgrades-1080x810.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/service-performance-upgrades-1080x810.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/service-performance-upgrades-2400x1800.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholders/placeholder-1080x810.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesPerformanceUpgrades' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="Peformance Upgrades"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody>
      <PageSection
        :class="`
          grid place-items-center mx-auto max-w-8xl py-20
          bg-zinc-300 lg:py-24 dark:bg-zinc-900
        `"
      >
        <div class="prose prose-lg lg:prose-xl">
          <p>
            Dubsquared carries a wide variety of Volkswagen and Audi performance
            parts from industry-leading brands. We have the skill and experience
            necessary to assist you in finding the right part you need at the
            right price.
          </p>
          <p>
            We're an authorized dealer for
            <a href="https://www.goapr.com/" title="APR" target="_blank">
              APR
            </a>
            and
            <a
              href="https://store.034motorsport.com/"
              title="034 Motorsport"
              target="_blank"
            >
              034 Motorsport</a
            >
            and offer their hardware + ECU / TCU flashes to unlock hidden
            performance in your vehicle. We also offer installation of lowering
            springs, coilovers, upgraded turbos, and many other performance
            hardware.
          </p>
          <p>
            Dubsquared is staffed by lifelong Volkswagen and Audi enthusiasts
            who are passionate about performance, quality parts, and attention
            to detail. Customer satisfaction is our top priority and we will
            work hard to get you exactly what you want.
          </p>
          <div class="flex flex-col mt-14 text-center">
            <NuxtLink to="contact" class="link" title="Contact Us">
              Get in touch
            </NuxtLink>
            and we'll help you unlock some hidden fun in your vehicle.
          </div>
        </div>
        <LazyServiceButtonGroup />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
