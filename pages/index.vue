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
      class="mobile-safe-area py-24 bg-stone-100 dark:bg-zinc-900/60 lg:py-32"
    >
      <PageSectionHeader
        title="Services"
        :paragraph="`
          Dubsquared provides a wide variety of automotive services for Audi
          and Volkswagen vehicles.
        `"
        anchor-text="See all of our offered services"
        anchor-to="/services"
      >
        <template #icon>
          <IconMdi:carCog class="text-6xl lg:text-7xl text-yellow-500" />
        </template>
      </PageSectionHeader>
      <div
        class="flex flex-wrap gap-x-8 gap-y-20 place-content-around mt-8 pt-20"
      >
        <!-- Oil Changes -->
        <PageServiceCard
          background-image="/images/service-oil-changes-1080x810.webp"
          heading-style="bg-zinc-900/70"
          paragraph-style="bg-red-900"
          button-to="/oil-changes"
          button-variant="secondary"
          variant="small"
        >
          <template #heading-icon><IconMdi:oilLevel /></template>
          <template #heading-text>Oil Changes</template>
          <template #paragraph>
            <p class="max-w-md">
              Keeping the engine in your car well-lubricated with clean oil is
              vital to its performance and longevity. Dubsquared offers quick
              and easy oil changes using only the highest quality oil and
              filters.
            </p>
          </template>
        </PageServiceCard>

        <!-- Maintenance / Tune-ups -->
        <PageServiceCard
          background-image="/images/service-tune-ups-1080x810.webp"
          heading-style="bg-stone-900/70"
          paragraph-style="bg-stone-200 text-zinc-900"
          button-to="/factory-maintenance"
          variant="small"
        >
          <template #heading-icon><IconMdi:carClock /></template>
          <template #heading-text>Factory Maintenance</template>
          <template #paragraph>
            <p class="max-w-md">
              Dubsquared provides comprehensive automotive maintenance and
              tune-ups to keep your Volkswagen or Audi running smoothly and
              efficiently. Regular maintenance is critical to the longevity of
              your vehicle.
            </p>
          </template>
        </PageServiceCard>
        <!-- Diagnostics -->
        <PageServiceCard
          background-image="/images/service-diagnostic-1080x810.webp"
          heading-style="bg-neutral-200/70 text-zinc-900"
          paragraph-style="bg-zinc-900"
          button-to="/diagnostics"
          variant="small"
        >
          <template #heading-icon><IconMdi:engineOffOutline /></template>
          <template #heading-text>Diagnostics</template>
          <template #paragraph>
            <p class="max-w-md">
              Dubsquared offers state-of-the-art diagnostics services to get to
              the root of the problem so we can perform your Volkswagen or Audi
              repair quickly, efficiently, and right the first time.
            </p>
          </template>
        </PageServiceCard>
        <!-- Performance Upgrades -->
        <PageServiceCard
          background-image="/images/service-performance-upgrades-1080x810.webp"
          heading-style="mx-8 bg-sky-900/70"
          paragraph-style="bg-sky-900"
          button-to="/performance-upgrades"
          variant="small"
        >
          <template #heading-icon
            ><IconMdi:carTurbocharger class="text-red-500"
          /></template>
          <template #heading-text>Performance Upgrades</template>
          <template #paragraph>
            <p class="max-w-md">
              Dubsquared carries a wide variety of Volkswagen and Audi
              performance parts from industry-leading brands. We have the skill
              and experience necessary to assist you in finding the right part.
            </p>
          </template>
        </PageServiceCard>
        <!-- Pre-purchase Inspections-->
        <PageServiceCard
          background-image="/images/service-audi-dashboard-1080x810.webp"
          heading-style="bg-stone-100/70 text-zinc-900"
          paragraph-style="bg-blue-gray-900"
          button-to="/pre-purchase-inspections"
          variant="small"
        >
          <template #heading-icon
            ><IconMdi:carInfo class="text-sky-900"
          /></template>
          <template #heading-text>Pre-purchase Inspections</template>
          <template #paragraph>
            <p class="max-w-md">
              Considering purchasing a used Volkswagen or Audi? We offer
              pre-purchase inspections that provide you with a full and unbiased
              overview of the vehicle's condition + any needed repairs.
            </p>
          </template>
        </PageServiceCard>
      </div>
    </section>

    <section
      id="testimonials"
      class="mobile-safe-area py-24 bg-stone-200 dark:bg-zinc-900 lg:py-32"
    >
      <PageSectionHeader
        title="Testimonials"
        paragraph="See what our clients have to say about our work."
        anchor-text="Read all of our reviews on Google"
        anchor-to="https://goo.gl/maps/PGKJBqnGrKajR7En7"
      >
        <template #icon>
          <TestimonialStars
            star-class="h-6 w-6 sm:(h-7 w-7) lg:(h-8 w-8)"
            class="gap-2"
          />
        </template>
      </PageSectionHeader>

      <div
        class="flex flex-wrap gap-x-8 gap-y-20 place-content-around mt-8 pt-20"
      >
        <TestimonialCard
          by="Reid D."
          date="July 2022"
          :num-stars="5"
          :paragraph="`
            The best place in the Metroplex for all your VW and Audi
            needs. Honest, friendly, helpful staff, excellent mechanics.
            You can trust them completely! They send status updates with
            photos to show the progress of their work. I guarantee that
            not many places do that.
          `"
        />
        <TestimonialCard
          by="Pamela C."
          date="June 2022"
          :num-stars="5"
          :paragraph="`
            Wow, great service. Very honest repair shop and reasonably
            priced. They did an inspection on a vehicle for me.
          `"
        />
        <TestimonialCard
          by="Mitchel B."
          date="June 2022"
          :num-stars="5"
          :paragraph="`
            I would recommend this place to anyone, but especially
            Vw/Audi/ European car owners. Every time I've been called or
            emailed, they respond quickly. I have even called or brought
            my car in, and they have always been honest in giving me
            advice on what could be wrong, and tips on things that I want
            to do myself. They want the best for their customers, and it
            really shows. If there is work I need done on a vehicle, this
            is the first place I call.
          `"
        />
        <TestimonialCard
          by="Darrion S."
          date="May 2022"
          :num-stars="5"
          :paragraph="`
            I have been taking my daughter's car to Dub for several years
            and and Tyler has been awesome. Very transparent and
            reasonable. Thanks felllas
          `"
        />
        <TestimonialCard
          by="Austin H."
          date="April 2022"
          :num-stars="5"
          :paragraph="`
            Bryan has been putting up with all of my dumb questions with
            honesty and professionalism. It's like having a personal
            mechanic who knows your exact car and has owned similar cars
            in the past. They've transformed my vehicle to something
            special and opened my eyes to vehicle modifications. Guys
            around town I've met also say great things about them so they
            have a positive presence in the area.
          `"
        />
        <TestimonialCard
          by="Minh N."
          date="February 2022"
          :num-stars="5"
          :paragraph="`
            Good people, I know they are busy but they are car guys, they
            understand that their customers are passionate about their
            cars. They will spend time answering addressing your concerns.
            Business building is more than just knowledge, it is also
            about listening to your customers. Seems like Dubsquared has a
            dedicated customer service department empowered with knowledge
            and empathy.
          `"
        />
      </div>
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
