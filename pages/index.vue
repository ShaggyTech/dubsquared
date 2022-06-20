<script setup lang="ts">
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

definePageMeta({
  layout: 'page',
  // required to keep intersection observer active after page navigation
  keepalive: true,
})

const heroAdjectives = ref([
  'Garage',
  'Specialists',
  'Experts',
  'Shop',
  'Connoisseurs',
  'Proffessionals',
  'Gurus',
  'Fanatics',
])

// hero section obvserver
const heroObserverName = 'hero-section.observer'
const heroObserverCallback: IntersectionObserverCallback = (element) => {
  element.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }

    target.classList.add('seen')
  })
}

const { observer: heroObserver, observerRef: heroObserverRef } =
  useIntersectionObserver({
    callback: heroObserverCallback,
    useStateKey: heroObserverName,
  })

onMounted(() => {
  heroObserverRef.value = heroObserver
})
</script>

<template>
  <PageWrapper class="pt-0">
    <!-- Hero Banner -->
    <PageHomeHero
      :adjectives="heroAdjectives"
      :observer-key="heroObserverName"
    />
    <!-- CTA container-->
    <PageSectionCallToAction id="get-in-touch" class="mobile-safe-area" />
    <!-- intro container-->
    <PageSectionIntroduction id="introduction">
      <template #heading>Welcome to Dubsquared</template>
      <template #content>
        <p>
          Dubsquared is an established, full service Volkswagen and Audi repair
          shop located in the heart of the DFW metroplex (Arlington, Texas). We
          strive to provide complete customer satisfaction, service and
          reliability through the highest quality workmanship and through the
          most superior products possible. We offer competitive quotes and carry
          only OEM, OES or custom-built parts.
          <NuxtLink to="about">
            Learn more about Dubsquared's history.
          </NuxtLink>
        </p>
        <p>
          Our dedicated technicians are factory trained and have a combined 50+
          years of experience in VW & Audi repair, maintenance, and performance.
          They have the knowledge, expertise, and enthusiasm to provide the
          highest quality repair and maintenance services available in the area.
          <NuxtLink to="meet-the-team">Meet the Team</NuxtLink>
          who'll be responsible for your vehicle.
        </p>
        <p>
          We provide a variety of services, including Volkswagen repair,
          Volkswagen maintenance, Audi Repair, Audi Maintenance, oil changes,
          tire rotations, timing belt services, timing chain services, brake
          services, chip tuning, ECU tuning, and many more.
        </p>
        <p>
          We possess the skill and experience necessary to serve as your
          full-service auto shop offering Audi and Volkswagen owners the highest
          quality services and customer care in the area.
          <NuxtLink to="services">
            Learn more about the services we offer.
          </NuxtLink>
        </p>
      </template>
    </PageSectionIntroduction>
    <!-- section business hours and location -->
    <section
      id="shop-hours-and-location"
      class="grid max-w-8xl mt-10 h-full w-full text-center"
    >
      <!-- container business hours and location -->
      <div class="grid grid-rows-2 lg:(grid-rows-1 grid-cols-2 h-full w-full)">
        <PageContactCardHours />
        <PageContactCardAddress />
      </div>
    </section>

    <!-- brands we use -->
    <section
      id="brands-we-use"
      class="flex flex-col justify-center gap-8 lg:gap-12 w-full h-full pt-36 pb-48 bg-stone-100 dark:bg-zinc-900"
    >
      <div class="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
        Brands We Use
        <span class="mx-1 md:mx-2 text-yellow-500/80">&</span> Endorse
      </div>
      <Marquee :duration="40" gradient />
    </section>

    <!-- Services-->
    <section id="services">
      <LazyPageServiceCardGroup />
    </section>

    <!-- Authorized Dealer for -->
    <div class="w-full h-full flex space-around items-center my-16">
      <div
        :class="`
          flex flex-col lg:flex-row gap-8 items-center flex-around
           max-h-[clamp(10em,50vh,400px)] w-[80%] rounded-md px-5 py-5 mb-4 mx-auto
          bg-gray-300 dark:bg-zinc-800 rounded-md
        `"
      >
        <SVGAuthorizedAPR
          alt="Authorized APR Dealer"
          class="authorized-logs__apr w-full h-full"
          height="100px"
          width="100px"
        />
        <SVGAuthorized034
          alt="Authorized 034-Motorsport Dealer"
          class="authorized-logs__034 w-full h-full"
          height="100px"
          width="100px"
        />
        <SVGAuthorizedMotul
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
  @screen lg {
    padding-left: 5em;
    padding-right: 5em;
  }
}
</style>
