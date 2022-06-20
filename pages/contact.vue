<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

// header section obvserver
const container = ref<Element | null>(null)

const headerObserverName = 'contact-page__header.observer'
const headerObserverCallback: IntersectionObserverCallback = (
  element,
  observer
) => {
  element.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }
    setTimeout(() => {
      target.classList.add('seen')
      observer.unobserve(target)
    }, 500)
  })
}
const { observer: headerObserver, observerRef: headerObserverRef } =
  useIntersectionObserver({
    callback: headerObserverCallback,
    useStateKey: headerObserverName,
  })

onMounted(async () => {
  await nextTick(() => {
    headerObserverRef.value = headerObserver
    container.value = document.querySelector('.contact-page__header')
    if (container.value && headerObserverRef.value) {
      headerObserverRef.value.observe(container.value)
    }
  })
})

onBeforeUnmount(() => {
  headerObserverRef.value.disconnect()
})
</script>

<template>
  <PageWrapper class="contact-page">
    <PageHeader
      class="contact-page__header backdrop-filter backdrop-brightness-70"
    >
      <div class="grid place-items-center bg-stone-900/30 h-full w-full py-10">
        <SVGDubsquaredSquareLogo
          class="h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
        />
        <PageTitle
          :text="'Get in Touch'"
          class="capitalize text-center text-stone-100 text-shadow-xl bg-stone-900/90 py-8 w-full tracking-wider lg:text-5xl font-kanit border-y-4 border-red-900"
        />
      </div>
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

<style lang="scss" scoped>
.contact-page {
  &__header {
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
