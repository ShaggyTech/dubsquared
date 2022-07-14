<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Contact Us',
  description:
    'Contact Dubsquared today to schedule service, make an appointment, or inquire about performance upgrades for your Volkswagen or Audi.',
})

const heroObserverName = ref('page-contact-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Car meetup at Dubsquared',
  height: '1080',
  width: '720',
  src: '/images/shop-frontage--meetup-multicar-1080x720.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/shop-frontage--meetup-multicar-1080x720.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/shop-frontage--meetup-multicar-1280x780.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1536px)',
      srcSet: '/images/shop-frontage--meetup-multicar-1920x1280.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholder-1080x720.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesContact' }
</script>

<template>
  <PageWrapper class="contact-page">
    <PageHeader class="contact-page-header">
      <PageHero
        title="Contact Us"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody class="mt-20 grid gap-14">
      <PageSection
        :class="`
          grid place-items-center text-center mx-auto max-w-8xl py-20 rounded
          prose prose-lg bg-gray-100 lg:(py-24 prose-xl) dark:bg-zinc-900
        `"
      >
        <p class="text-center max-w-4xl">
          Give us a ring, send a message, or come by and check out the shop!
        </p>
        <div class="flex flex-col items-center text-center mt-4 font-bold">
          <Anchor to="/meet-the-team" class="!font-bold">Read our Story</Anchor>
          to learn more about the shop.
        </div>
      </PageSection>
      <PageSection class="py-8 lg:(py-12)">
        <LazyContactSocialMedia
          id="social"
          class="max-w-4xl text-4xl mx-auto lg:(text-5xl)"
        />
      </PageSection>
      <PageSection>
        <div class="grid grid-rows-2 gap-10 lg:(grid-rows-1 grid-cols-2)">
          <LazyContactCardAddress id="address" />
          <LazyContactCardHours id="hours" />
        </div>
      </PageSection>
      <PageSection id="contact-form">
        <LazyContactForm />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
