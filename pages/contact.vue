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
  src: '/images/shop-frontage--meetup-multicar-1280x780.webp',
  cloudinaryId: 'x142wq',
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
    <PageBody class="grid gap-14">
      <PageSection
        :class="`
          grid place-items-center gap-10 w-full max-w-8xl mx-auto py-20
          text-center bg-zinc-200 prose lg:(py-24) dark:bg-zinc-900
        `"
      >
        <h2 class="max-w-4xl text-center font-bold">
          Give us a ring, send a message, or come by and check out the shop!
        </h2>
        <div class="flex flex-col items-center text-center font-semibold">
          <Anchor to="/about#our-story" class="!font-bold"
            >Read our Story</Anchor
          >
          to learn more about our history and our mission.
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
