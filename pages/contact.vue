<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const heroObserverName = ref('page-contact-hero-section-observer')
const heroBackgroundImage = {
  alt: 'Car meetup at Dubsquared',
  height: '1280',
  width: '780',
  src: '/images/shop-frontage--meetup-multicar-1280x780.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/shop-frontage--meetup-multicar-1280x780.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/shop-frontage--meetup-multicar-2400x1460.webp',
      type: 'image/webp',
    },
  ],
  placeholderSrc: '/images/placeholder-1280x720.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesContact' }
</script>

<template>
  <PageWrapper class="contact-page">
    <PageHeader class="contact-page-header">
      <PageHero
        title="Get in Touch"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody class="mt-20 grid gap-14">
      <PageSection>
        <LazyAppNavbarMenuSocialMedia
          id="social"
          class="max-w-4xl text-4xl lg:text-5xl mx-auto"
        />
      </PageSection>
      <PageSection>
        <div class="grid grid-rows-2 gap-10 lg:(grid-rows-1 grid-cols-2)">
          <LazyPageContactCardAddress id="address" />
          <LazyPageContactCardHours id="hours" />
        </div>
      </PageSection>
      <PageSection id="contact-form">
        <LazyPageContactForm />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
