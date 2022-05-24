<template>
  <section class="flex flex-col items-center justify-center">
    <!-- Oil Changes -->
    <PageServiceCard
      class="service-card service-card__oil-changes"
      heading-style="bg-zinc-900/60 border-red-800/70"
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
            target="_blank"
            class="link"
            title="Motul"
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
    </PageServiceCard>
    <!-- Maintenance / Tune-ups -->
    <PageServiceCard
      class="service-card service-card__maintenance"
      heading-style="bg-warm-gray-900/60 border-warm-gray-100/70"
      paragraph-style="bg-warm-gray-200 text-zinc-900"
      button-to="services"
    >
      <template #heading-icon><IconMdi:carClock /></template>
      <template #heading-text>Factory Maintenance</template>
      <template #paragraph>
        <div>
          Dubsquared provides comprehensive automotive maintenance and tune-ups
          to keep your Volkswagen or Audi running smoothly and efficiently and
          increase longevity.
        </div>
        <div>
          Typical maintenance items include engine air filter, cabin/pollen
          filter, spark plugs, fuel filter, DSG service, differential service,
          brake fluid flush, and more.
        </div>
        <div>
          Each vehicle has specific maintenance needs according to manufacturer
          guidelines. We're here to help keep your vehicle up to date with these
          factory recommended maintenance intervals.
        </div>
        <div>
          Not sure what the intervals are for your vehicle?
          <NuxtLink
            to="contact"
            class="text-red-700 dark:text-red-700"
            title="Contact"
          >
            Get in touch
          </NuxtLink>
          and we'll happily assist.
        </div>
      </template>
    </PageServiceCard>
    <!-- Diagnostics -->
    <PageServiceCard
      class="service-card service-card__diagnostic"
      heading-style="bg-neutral-200/60 text-zinc-900 border-zinc-800/90"
      paragraph-style="bg-zinc-900"
      button-to="services"
    >
      <template #heading-icon><IconMdi:engineOffOutline /></template>
      <template #heading-text>Diagnostics</template>
      <template #paragraph>
        <div>
          Dubsquared offers state-of-the-art diagnostics services to get to the
          root of the problem so we can perform your Volkswagen or Audi repair
          quickly, efficiently, and right the first time. With over 50 years of
          combined experience, our management and professional technicians are
          well qualified to diagnose and solve any problem you might have.
        </div>
        <div>
          Our current diagnostic fee is
          <span class="font-bold text-green-400">$130/hr</span>
          with a minimum of
          <span class="font-bold">1</span> hour required. If repairs based on
          the diagnosis are authorized and performed within 30 days, then the
          diagnostic fee will be credited towards the price of recommended
          repairs.
          <NuxtLink to="meet-the-team" class="link" title="Meet the Team">
            Meet the team
          </NuxtLink>
          to learn more about our credentials.
        </div>
        <div>
          If you're looking to dive in on your own, we use and can recommend the
          <a
            href="https://www.ross-tech.com/vag-com/"
            class="link"
            title="Ross-tech VAG-COM"
            target="_blank"
          >
            VCDS Scan Tool and Software
          </a>
          by Ross-Tech for all Volkswagen and Audi diagnostic needs.
        </div>
      </template>
    </PageServiceCard>
    <!-- Performance Upgrades -->
    <PageServiceCard
      class="service-card service-card__performance-upgrades"
      heading-style="bg-sky-900/60 border-sky-800/90 mx-8"
      paragraph-style="bg-sky-900"
      button-to="services"
    >
      <template #heading-icon
        ><IconMdi:carTurbocharger class="text-red-500"
      /></template>
      <template #heading-text>Performance Upgrades</template>
      <template #paragraph>
        <div>
          Dubsquared carries a wide variety of Volkswagen and Audi performance
          parts from industry-leading brands. We have the skill and experience
          necessary to assist you in finding the right part you need at the
          right price.
        </div>
        <div>
          We're an authorized dealer for
          <a
            href="https://www.goapr.com/"
            class="link"
            title="APR"
            target="_blank"
          >
            APR
          </a>
          and
          <a
            href="https://store.034motorsport.com/"
            class="link"
            title="034 Motorsport"
            target="_blank"
          >
            034 Motorsport</a
          >
          and offer their hardware + ECU / TCU flashes to unlock hidden
          performance in your vehicle. We also offer installation of lowering
          springs, coilovers, upgraded turbos, and many other performance
          hardware.
        </div>
        <div>
          Dubsquared is staffed by lifelong Volkswagen and Audi enthusiasts who
          are passionate about performance, quality parts, and attention to
          detail. Customer satisfaction is our top priority and we will work
          hard to get you exactly what you want.
          <NuxtLink to="contact" class="link" title="Contact">
            Get in touch
          </NuxtLink>
          and we'll help you unlock some hidden fun in your vehicle.
        </div>
      </template>
    </PageServiceCard>
    <!-- Pre-purchase Inspections-->
    <PageServiceCard
      class="service-card service-card__pre-purchase-inspections"
      heading-style="bg-warm-gray-100/60 text-zinc-900 border-blue-gray-800/90"
      paragraph-style="bg-blue-gray-900"
      button-to="services"
    >
      <template #heading-icon
        ><IconMdi:carInfo class="text-sky-600"
      /></template>
      <template #heading-text>Pre-purchase Inspections</template>
      <template #paragraph>
        <div>
          Considering purchasing a used Volkswagen or Audi? We recommend a full
          inspection be performed by a party independent of the seller before
          any used vehicle purchase.
        </div>
        <div>
          We offer pre-purchase inspections that provide you with a full and
          unbiased overview of the vehicle's condition + any needed repairs.
          Dubsquared offers this service for a flat fee of
          <span class="font-bold text-green-400">$130</span>.
        </div>
        <div>
          You'll receive a full report with pictures, notes on what was found,
          and a full vehicle fault scan. Clients typically use this report as
          leverage in purchase negotiations or to plan for future repairs.
        </div>
        <div>
          The vehicle will need to be brought to our shop but most reputable
          used car dealers and individual sellers will allow third party
          inspections before purchase.
        </div>
        <div>
          <NuxtLink to="contact" class="link" title="Pre Purchase Inspections">
            Schedule a pre-purchase inspection
          </NuxtLink>
          with Dubsquared so you don't get stuck with a 🍋.
        </div>
      </template>
    </PageServiceCard>
  </section>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  observerKey: {
    type: String,
    default: '',
  },
})
const cardObserver = useState<IntersectionObserver>(props.observerKey)
const cards = ref<NodeListOf<Element>>()

onMounted(async () => {
  await nextTick(() => {
    cards.value = document.querySelectorAll('.service-card')
    cards.value.forEach((card) => {
      cardObserver.value.observe(card)
    })
  })
})
</script>

<script lang="ts">
export default { name: 'PageServiceCardGroup' }
</script>

<style lang="scss" scoped>
.link {
  @apply px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2;
}
.service-card {
  background-image: url('/images/placeholder-1080x810.webp');

  // different card background images only loaded once .seen is added via intersection observer
  &__oil-changes.seen {
    background-image: url('/images/service-oil-changes-1080x810.webp');
    @screen lg {
      background-image: url('/images/service-oil-changes-2400x1800.webp');
    }
  }
  &__maintenance.seen {
    background-image: url('/images/service-tune-ups-1080x810.webp');
    @screen lg {
      background-image: url('/images/service-tune-ups-2400x1800.webp');
    }
  }
  &__diagnostic.seen {
    background-image: url('/images/service-diagnostic-1080x810.webp');
    @screen lg {
      background-image: url('/images/service-diagnostic-2400x1800.webp');
    }
  }
  &__performance-upgrades.seen {
    background-image: url('/images/service-performance-upgrades-1080x810.webp');
    @screen lg {
      background-image: url('/images/service-performance-upgrades-2400x1800.webp');
    }
  }
  // TODO: Find suitable image for this card
  &__pre-purchase-inspections.seen {
    background-image: url('/images/service-audi-dashboard-1080x810.webp');
  }
}
</style>
