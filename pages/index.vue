<script setup lang="ts">
definePageMeta({
  layout: 'page',
  title: 'Home',
  description:
    'Dubsquared is an independent Volkswagen and Audi shop located in Arlington, TX providing complete repair, maintenance, and performance services.',
})

const heroObserverName = ref('page-home-hero-section-observer')
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <!-- Hero Banner -->
      <PageHomeHero :observer-key="heroObserverName" />
    </PageHeader>

    <PageHomeCallToAction id="get-in-touch" class="mobile-safe-area" />
    <PageHomeIntroduction id="introduction" />

    <!-- section business hours and location -->
    <section
      id="shop-hours-and-location"
      class="grid max-w-8xl mt-10 h-full w-full text-center mobile-safe-area"
    >
      <!-- container business hours and location -->
      <div class="grid grid-rows-2 gap-6 md:(grid-rows-1 grid-cols-2)">
        <ContactCardHours />
        <ContactCardAddress />
      </div>
    </section>

    <!-- brands we use -->
    <section
      id="brands-we-use"
      class="flex flex-col justify-center gap-8 lg:gap-12 w-full h-full py-18 my-20 bg-stone-100 dark:bg-zinc-900"
    >
      <div class="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
        Brands We Use
        <span class="mx-1 md:mx-2 text-yellow-500/80">&</span> Endorse
      </div>
      <LazyMarquee :duration="40" gradient />
    </section>

    <section
      id="services"
      class="py-24 bg-stone-100 lg:py-32 dark:bg-zinc-900/60 mobile-safe-area"
    >
      <PageSectionHeader
        title="Services"
        paragraph="Dubsquared provides a wide variety of automotive services for Audi and Volkswagen vehicles."
        anchor-text="See all of our offered services"
        anchor-to="/services"
      >
        <template #icon>
          <IconMdi:carCog class="text-6xl lg:text-7xl text-yellow-500" />
        </template>
      </PageSectionHeader>

      <ServiceCardGroupSmall />
    </section>

    <section
      id="testimonials"
      class="py-24 bg-stone-200 lg:py-32 dark:bg-zinc-900 mobile-safe-area"
    >
      <PageSectionHeader
        title="Testimonials"
        paragraph="See what our clients have to say about our work"
        anchor-text="Read all of our reviews on Google"
        anchor-to="https://g.page/r/CUv2zwK5qtl8EAE"
        anchor-target="_blank"
      >
        <template #icon>
          <LazyTestimonialStars
            star-class="h-6 w-6 sm:(h-7 w-7) lg:(h-8 w-8)"
            class="gap-2"
          />
        </template>
        <Anchor
          to="https://g.page/r/CUv2zwK5qtl8EAg/review"
          class="!mt-10 !text-2xl !font-bold !text-xl"
          target="_blank"
        >
          Leave us a review and let us know how we did
        </Anchor>
      </PageSectionHeader>

      <TestimonialCardGroup />
    </section>

    <!-- Authorized Dealer for -->
    <div class="w-full h-full flex space-around items-center my-16">
      <div
        :class="`
          flex flex-col gap-10 items-center flex-around px-5 py-5 mb-4 mx-auto
          max-h-[clamp(10em,50vh,400px)] w-[80%] rounded-md lg:flex-row
        `"
      >
        <LazySVGAuthorizedAPR
          alt="Authorized APR Dealer"
          class="authorized-logs__apr w-full h-full"
          height="100px"
          width="100px"
        />
        <LazySVGAuthorized034
          alt="Authorized 034-Motorsport Dealer"
          class="authorized-logs__034 w-full h-full"
          height="100px"
          width="100px"
        />
        <LazySVGAuthorizedMotul
          alt="Authorized Motul Distributor"
          class="authorized-logs__motul w-full h-full"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.mobile-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(1.5rem, env(safe-area-inset-left));
    padding-right: max(1.5rem, env(safe-area-inset-right));
  }
  @screen md {
    @supports (padding: max(0px)) {
      padding-left: max(2rem, env(safe-area-inset-left));
      padding-right: max(2rem, env(safe-area-inset-right));
    }
  }
}
</style>
