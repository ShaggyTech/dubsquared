<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const container = ref<HTMLElement | null>(null)

// hero section obvserver
const heroObserverName = 'page-contact-hero-section-observer'
const heroObserverCallback: IntersectionObserverCallback = (
  element,
  observer
) => {
  element.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }
    target.classList.add('seen')
    observer.unobserve(target)
  })
}

const { observer: heroObserver, observerRef: heroObserverRef } =
  useIntersectionObserver({
    callback: heroObserverCallback,
    useStateKey: heroObserverName,
  })

onMounted(async () => {
  await nextTick(() => {
    heroObserverRef.value = heroObserver
    container.value = document.querySelector(`#${heroObserverName}`)
    console.log('heroObserverRef: ', heroObserverRef.value)
    console.log('hero container: ', container.value)
    if (container.value && heroObserverRef.value) {
      heroObserverRef.value.observe(container.value)
    }
  })
})
</script>

<script lang="ts">
export default { name: 'PageContact' }
</script>

<template>
  <PageWrapper class="contact-page">
    <PageHeader class="contact-page-header">
      <PageHero title="Get in Touch" :observer-key="heroObserverName" />
    </PageHeader>
    <PageBody class="mt-20 grid gap-14">
      <PageSection>
        <AppNavbarMenuSocialMedia
          id="social"
          class="max-w-4xl text-4xl lg:text-5xl mx-auto"
        />
      </PageSection>
      <PageSection>
        <div class="grid grid-rows-2 gap-10 lg:(grid-rows-1 grid-cols-2)">
          <PageContactCardAddress id="address" />
          <PageContactCardHours id="hours" />
        </div>
      </PageSection>
      <PageSection id="contact-form">
        <PageContactForm />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
.contact-page-header {
  .page-hero {
    display: grid;
    place-items: center;
    min-height: min(100vh, 900px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url('/images/hardpoint-r8/audi-r8-hardpoint-front-view-1080x720-loading.webp');

    filter: blur(100px);
    transition-property: filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @supports (-webkit-touch-callout: none) {
      background-attachment: scroll;
    }
    @supports not (-webkit-touch-callout: none) {
      background-attachment: fixed;
    }

    // different background images only fetched once .seen class is added via intersection observer
    &.seen {
      filter: blur(0px);
      background-image: url('/images/shop-frontage--meetup-multicar-1280x780.webp');

      @screen lg {
        background-image: url('/images/shop-frontage--meetup-multicar-2400x1460.webp');
      }
      @screen 2xl {
        background-image: url('/images/shop-frontage--meetup-multicar-4000x2430.webp');
      }
    }
  }
}
</style>
