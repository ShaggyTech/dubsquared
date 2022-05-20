<template>
  <section class="flex flex-col items-center justify-center">
    <!-- Oil Changes -->
    <LazyPageServiceCard
      class="service-card service-card__oil-changes bg-placeholder"
      heading-style="bg-zinc-900/80 border-8 border-red-700/60"
      paragraph-style="bg-red-900"
      button-to="services"
    >
      <template #heading-icon><IconMdi:oilLevel /></template>
      <template #heading-text>Oil Changes</template>
      <template #paragraph>
        <div>
          Keeping the engine in your car well-lubricated with clean oil is vital
          to its performance and longevity. Dubsquared offers quick and easy oil
          changes using only the highest quality oil from
          <a
            href="https://www.motul.com/us/en-us"
            text="MOTUL"
            target="_blank"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
            >MOTUL</a
          >.
        </div>
        <div>
          At each oil change we top-off all regular fluids and take a quick
          glance under the hood to check for any additional preventative
          maintenance services you might need. Our goal is to keep your car at
          optimal performance for years to come.
        </div>
      </template>
    </LazyPageServiceCard>
    <!-- Maintenance / Tune-ups -->
    <LazyPageServiceCard
      class="service-card service-card__maintenance bg-placeholder text-zinc-900"
      heading-style="bg-zinc-900/80 text-neutral-100 border-8 border-neutral-200/90"
      paragraph-style="bg-neutral-200"
      button-to="services"
    >
      <template #heading-icon><IconMdi:carClock /></template>
      <template #heading-text>Factory Maintenance</template>
      <template #paragraph>
        <div>
          Dubsquared provides comprehensive automotive maintenance and tune-ups
          to keep your Volkswagen or Audi running smoothly and efficiently and
          increase longevity. Typical maintenance items include engine air
          filter, cabin/pollen filter, spark plugs, fuel filter, DSG service,
          differential service, brake fluid flush, and more.
        </div>
        <div>
          Each vehicle has specific maintenance needs according to manufacturer
          guidelines. We're here to help keep your vehicle up to date with these
          factory recommended maintenance intervals. Not sure what the intervals
          are for your vehicle?
          <NuxtLink
            to="contact"
            class="px-1 font-bold text-red-700 dark:text-red-700 tracking-wider underline underline-offset-2"
          >
            Get in touch
          </NuxtLink>
          and we'll happily assist.
        </div>
      </template>
    </LazyPageServiceCard>
    <!-- Diagnostics -->
    <LazyPageServiceCard
      class="service-card service-card__diagnostic bg-placeholder"
      heading-style="bg-zinc-900/80 border-8 border-slate-600/90"
      paragraph-style="bg-slate-900"
      button-to="services"
    >
      <template #heading-icon><IconMdi:engineOffOutline /></template>
      <template #heading-text>Diagnostics</template>
      <template #paragraph>
        <div>
          Dubsquared offers state-of-the-art diagnostics services to get to the
          root of the problem so we can perform your VW or Audi repair quickly,
          efficiently, and right the first time. With over 50 years of combined
          experience, our management and professional technicians are well
          qualified to diagnose and solve any problem you might have. If you're
          looking to dive in on your own, we use and can recommend the
          <a
            href="https://www.ross-tech.com/vag-com/"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
          >
            VCDS Scan Tool and Software
          </a>
          by Ross-Tech for all Volkswagen and Audi diagnostic needs.
        </div>
        <div>
          Our current diagnostic fee is
          <span class="font-teko font-bold text-green-400">$130/hr</span>
          with a minimum of
          <span class="font-teko font-bold">1</span> hour required. If repairs
          based on the diagnosis are authorized and performed within 30 days,
          then the diagnostic fee will be credited towards the price of
          recommended repairs.
          <NuxtLink
            to="meet-the-team"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
          >
            Meet the team
          </NuxtLink>
          to learn more about our credentials.
        </div>
      </template>
    </LazyPageServiceCard>
    <!-- Performance Upgrades -->
    <LazyPageServiceCard
      class="service-card service-card__performance-upgrades bg-placeholder"
      heading-style="bg-neutral-200/80 text-zinc-800 border-8 border-zinc-900/90 mx-8"
      paragraph-style="bg-zinc-900"
      button-to="services"
    >
      <template #heading-icon
        ><IconMdi:carTurbocharger class="text-red-500"
      /></template>
      <template #heading-text>Performance Upgrades</template>
      <template #paragraph>
        <div>
          Dubsquared carries a wide variety of VW and Audi performance parts
          from industry-leading brands. We have the skill and experience
          necessary to assist you in finding the right part you need at the
          right price. We're an authorized dealer for
          <a
            href="https://www.goapr.com/"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
          >
            APR
          </a>
          and
          <a
            href="https://store.034motorsport.com/"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
          >
            034 Motorsport
          </a>
          . We offer their hardware and ECU / TCU flashes to unlock hidden
          performance in your vehicle. We also offer installation of lowering
          springs, coilovers, upgraded turbos, and many other performance
          hardware.
        </div>
        <div>
          We're staffed by lifelong VW and Audi enthusiasts who are passionate
          about performance, quality parts, and attention to detail. Customer
          satisfaction is our top priority and we will work hard to get you
          exactly what you want.
          <NuxtLink
            to="contact"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
          >
            Get in touch
          </NuxtLink>
          and we'll help you unlock some hidden fun in your vehicle.
        </div>
      </template>
    </LazyPageServiceCard>
    <!-- Pre-purchase Inspections-->
    <LazyPageServiceCard
      class="service-card service-card__pre-purchase-inspections bg-placeholder"
      heading-style="bg-zinc-900/80 border-8 border-red-700/60"
      paragraph-style="bg-red-900"
      button-to="services"
    >
      <template #heading-icon><IconMdi:carInfo /></template>
      <template #heading-text>Pre-purchase Inspections</template>
      <template #paragraph>
        <div>
          Considering purchasing a used Volkswagen or Audi? We recommend a full
          inspection be performed by a party independent of the seller before
          any used vehicle purchase. We offer pre-purchase inspections that
          provide you with a full and unbiased overview of the vehicle's
          condition + any needed repairs. Dubsquared offers this service for a
          flat fee of
          <span class="font-teko font-bold text-green-400">$130</span>.
        </div>
        <div>
          You'll receive a full report with pictures, notes on what was found,
          and a full vehicle fault scan. Clients typically use this report as
          leverage in purchase negotiations or to plan for future repairs.
          You'll need to bring the vehicle to our shop but most reputable used
          car dealers and individual sellers will allow third party inspections
          before purchase.
          <NuxtLink
            to="contact"
            class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
          >
            Schedule a pre-purchase inspection
          </NuxtLink>
          with Dubsquared so you don't get stuck with a 🍋.
        </div>
      </template>
    </LazyPageServiceCard>
  </section>
</template>

<script lang="ts" setup>
// const onObserve = ([{ isIntersecting }]) => {
//   console.log('isIntersecting:', isIntersecting)
// }
</script>

<script lang="ts">
export default { name: 'PageServiceCardGroup' }
// if (entry.isIntersecting) {
//   entry.target.classList.add("visible");
//   lazyBackgroundObserver.unobserve(entry.target);
// }
</script>

<style lang="scss" scoped>
.service-card {
  background-repeat: no-repeat;
  background-size: contain;

  // has higher specificity, later .lazy will be removed via intersection observer so real image will load
  &.bg-placeholder {
    background-image: url('/images/placeholder-1080x810.webp');
  }

  // different card background images only loaded once .bg-placeholder is removed
  &__oil-changes {
    background-image: url('service-oil-changes-1080x810.webp');
  }
  &__maintenance {
    background-image: url('/images/service-tune-ups-1080x810.webp');
  }
  &__diagnostic {
    background-image: url('/images/service-diagnostic-1080x810.webp');
  }
  &__performance-upgrades {
    background-image: url('/images/service-performance-upgrades-1080x810.webp');
  }
  // TODO: Find suitable image for this card
  &__pre-purchase-inspections {
    background-image: url('/images/placeholder-1080x810.webp');
  }
}
</style>
