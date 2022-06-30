<script setup lang="ts">
// import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

definePageMeta({
  layout: 'page',
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
const heroObserverName = ref('page-home-hero-section-observer')
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <!-- Hero Banner -->
      <LazyPageHomeHero
        :adjectives="heroAdjectives"
        :observer-key="heroObserverName"
      />
    </PageHeader>
    <!-- CTA container-->
    <LazyPageSectionCallToAction id="get-in-touch" class="mobile-safe-area" />
    <!-- intro container-->
    <LazyPageSectionIntroduction id="introduction">
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
    </LazyPageSectionIntroduction>
    <!-- section business hours and location -->
    <section
      id="shop-hours-and-location"
      class="grid max-w-8xl mt-10 h-full w-full text-center mobile-safe-area"
    >
      <!-- container business hours and location -->
      <div
        class="grid grid-rows-2 gap-6 lg:(grid-rows-1 grid-cols-2 h-full w-full)"
      >
        <LazyPageContactCardHours />
        <LazyPageContactCardAddress />
      </div>
    </section>

    <!-- brands we use -->
    <section
      id="brands-we-use"
      class="flex flex-col justify-center gap-8 lg:gap-12 w-full h-full py-18 mt-14 bg-stone-100 dark:bg-zinc-900"
    >
      <div class="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
        Brands We Use
        <span class="mx-1 md:mx-2 text-yellow-500/80">&</span> Endorse
      </div>
      <LazyMarquee :duration="40" gradient />
    </section>

    <section id="services" class="mt-14">
      <div
        class="flex flex-row place-content-around flex-wrap gap-10 lg:(px-8)"
      >
        <PageServiceCard
          background-image="/images/service-oil-changes-2400x1800.webp"
          heading-style="bg-zinc-900/70"
          paragraph-style="bg-red-900"
          button-to="services"
          button-variant="secondary"
          variant="small"
        >
          <template #heading-icon><IconMdi:oilLevel /></template>
          <template #heading-text>Oil Changes</template>
          <template #paragraph>
            <p>
              Keeping the engine in your car well-lubricated with clean oil is
              vital to its performance and longevity. Dubsquared offers quick
              and easy oil changes using only the highest quality oil and
              filters.
            </p>
          </template>
        </PageServiceCard>
        <div
          href="#"
          class="flex flex-col items-center p-6 bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconMdi:oilLevel class="w-full text-5xl text-yellow-500" />
          <div class="flex flex-col justify-between px-6 mt-6 leading-normal">
            <h5
              class="text-3xl text-center font-bold font-nunito-sans tracking-wide text-gray-900 dark:text-white underline underline-2 underline-yellow-500 underline-offset-4"
            >
              Oil Changes
            </h5>
            <p
              class="mt-6 font-normal text-xl text-gray-700 dark:text-gray-400"
            >
              Keeping the engine in your car well-lubricated with clean oil is
              vital to its performance and longevity. Dubsquared offers quick
              and easy oil changes using only the highest quality oil.
            </p>
            <Button
              size="md"
              class="mt-8 shadow-lg w-fit mx-auto"
              to="/services"
              >+ Learn More</Button
            >
          </div>
        </div>

        <div
          href="#"
          class="flex flex-col items-center p-6 bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconMdi:carClock class="w-full text-5xl text-yellow-500" />
          <div class="flex flex-col justify-between px-6 mt-6 leading-normal">
            <h5
              class="text-3xl text-center font-bold font-nunito-sans tracking-wide text-gray-900 dark:text-white underline underline-2 underline-yellow-500 underline-offset-4"
            >
              Factory Maintenance
            </h5>
            <p
              class="mt-6 font-normal text-xl text-gray-700 dark:text-gray-400"
            >
              Dubsquared provides comprehensive automotive maintenance and
              tune-ups to keep your Volkswagen or Audi running smoothly and
              efficiently and increase longevity.
            </p>
            <Button
              size="md"
              class="mt-8 shadow-lg w-fit mx-auto"
              to="/services"
              >+ Learn More</Button
            >
          </div>
        </div>

        <div
          href="#"
          class="flex flex-col items-center p-6 bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconMdi:engineOffOutline class="w-full text-5xl text-yellow-500" />
          <div class="flex flex-col justify-between px-6 mt-6 leading-normal">
            <h5
              class="text-3xl text-center font-bold font-nunito-sans tracking-wide text-gray-900 dark:text-white underline underline-2 underline-yellow-500 underline-offset-4"
            >
              Diagnostics
            </h5>
            <p
              class="mt-6 font-normal text-xl text-gray-700 dark:text-gray-400"
            >
              Dubsquared offers state-of-the-art diagnostics services to get to
              the root of the problem so we can perform your Volkswagen or Audi
              repair quickly, efficiently, and right the first time.
            </p>
            <Button
              size="md"
              class="mt-8 shadow-lg w-fit mx-auto"
              to="/services"
              >+ Learn More</Button
            >
          </div>
        </div>

        <div
          href="#"
          class="flex flex-col items-center p-6 bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconMdi:carTurbocharger class="w-full text-5xl text-red-500" />
          <div class="flex flex-col justify-between px-6 mt-6 leading-normal">
            <h5
              class="text-3xl text-center font-bold font-nunito-sans tracking-wide text-gray-900 dark:text-white underline underline-2 underline-yellow-500 underline-offset-4"
            >
              Performance Upgrades
            </h5>
            <p
              class="mt-6 font-normal text-xl text-gray-700 dark:text-gray-400"
            >
              Dubsquared carries a wide variety of Volkswagen and Audi
              performance parts from industry-leading brands. We have the skill
              and experience necessary to assist you in finding the right part
              you need at the right price.
            </p>
            <Button
              size="md"
              class="mt-8 shadow-lg w-fit mx-auto"
              to="/services"
              >+ Learn More</Button
            >
          </div>
        </div>

        <div
          href="#"
          class="flex flex-col items-center p-6 bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <IconMdi:carInfo class="w-full text-5xl text-sky-400" />
          <div class="flex flex-col justify-between px-6 mt-6 leading-normal">
            <h5
              class="text-3xl text-center font-bold font-nunito-sans tracking-wide text-gray-900 dark:text-white underline underline-2 underline-yellow-500 underline-offset-4"
            >
              Pre-Purchase Inspections
            </h5>
            <p
              class="mt-6 font-normal text-xl text-gray-700 dark:text-gray-400"
            >
              Considering purchasing a used Volkswagen or Audi? We recommend a
              full inspection be performed by a party independent of the seller
              before any used vehicle purchase.
            </p>
            <Button size="md" class="mt-8 shadow-lg w-fit mx-auto" to="services"
              >+ Learn More</Button
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Services-->
    <section id="services" class="mt-14">
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
