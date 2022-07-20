<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Factory Maintenance',
  description:
    'Dubsquared provides comprehensive factory maintenance to keep your Volkswagen or Audi running smoothly and efficiently and increase longevity.',
})

const heroObserverName = ref('page-factory-maintenance-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Maintenance Parts',
  height: '1080',
  width: '810',
  src: '/images/service-tune-ups-1080x810.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/service-tune-ups-1080x810.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/service-tune-ups-2400x1800.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholders/placeholder-1080x810.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesFactoryMaintenance' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="Factory Maintenance"
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
            Dubsquared provides comprehensive automotive maintenance and
            tune-ups to keep your Volkswagen or Audi running smoothly and
            efficiently and increase longevity.
          </p>
          <p>
            Typical maintenance items include engine air filter, cabin/pollen
            filter, spark plugs, fuel filter, DSG service, differential service,
            brake fluid flush, and more.
          </p>
          <p>
            Each vehicle has specific maintenance needs according to
            manufacturer guidelines. We're here to help keep your vehicle up to
            date with these factory recommended maintenance intervals.
          </p>
          <div class="flex flex-col mt-14 text-center">
            Not sure what the intervals are for your vehicle?
            <NuxtLink
              to="contact"
              class="text-red-700 dark:text-red-700"
              title="Contact Us"
            >
              Get in touch
            </NuxtLink>
            and we'll happily assist.
          </div>
        </div>
        <LazyServiceButtonGroup />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
