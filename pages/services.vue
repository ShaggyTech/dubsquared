<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Services',
  description:
    'Dubsquared provides a variety of services for Volkswagen and Audi vehicles. Whatever your vehicle needs we have you covered.',
})

const heroObserverName = ref('page-services-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Volkswagen R32 parked between two school buses',
  height: '1080',
  width: '720',
  src: '/images/r32-bus-yard-1080x720.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/r32-bus-yard-1080x720.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/r32-bus-yard-1920x1280.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholders/placeholder-1080x720.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesServices' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="Services"
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
          <p class="max-w-4xl">
            We possess the skill and experience necessary to serve as your
            full-service auto shop. We strive to provide Audi and Volkswagen
            owners the highest quality services and customer care in the area.
          </p>
          <div class="flex flex-col items-center text-center mt-10 font-bold">
            <Anchor to="/contact" class="!font-bold">Contact Us</Anchor>
            to get a quote, ask a question, or schedule service!
          </div>

          <hr class="w-10/12 mx-auto my-10 border-t-3 !border-t-red-900" />
          <p class="w-full max-w-4xl !mt-12 text-center">
            Here are just a few of the many automotive services we provide to
            Audi and Volkswagen owners...
          </p>
        </div>
        <LazyServiceButtonGroup variant="hash" />
      </PageSection>
      <section class="mt-40">
        <LazyServiceCardGroup />
      </section>
    </PageBody>
  </PageWrapper>
</template>
