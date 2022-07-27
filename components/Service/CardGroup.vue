<script lang="ts">
export default { name: 'ServiceCardGroup' }
</script>

<script setup lang="ts">
type Variant = 'default' | 'small'
type Variants = { [key in Variant]: string }

interface Props {
  variant?: Variant
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const isDefaultVariant = computed(() => props.variant === 'default')

const rootStyles = reactive<Variants>({
  default: `flex flex-col items-center justify-center`,
  small: `flex flex-wrap gap-x-8 gap-y-20 place-content-around mt-28`,
})
const selectedStyle = computed(() => rootStyles[props.variant])
</script>

<template>
  <div :class="`${selectedStyle}`">
    <!-- Oil Changes -->
    <ServiceCard
      id="oil-changes"
      :background-image="{
        src: '/images/service-oil-changes-1080x810.webp',
        cloudinaryId: 'fogvaw',
        alt: 'Oil Changes',
      }"
      heading-style="bg-zinc-900/70"
      paragraph-style="bg-red-900"
      button-to="/oil-changes"
      button-variant="secondary"
      :variant="variant"
    >
      <template #heading-icon><IconMdi:oilLevel /></template>
      <template #heading-text>Oil Changes</template>
      <template #paragraph>
        <p :class="{ 'max-w-md': !isDefaultVariant }">
          Keeping the engine in your car well-lubricated with clean oil is vital
          to its performance and longevity. Dubsquared offers quick and easy oil
          changes using only the highest quality oil and filters.
        </p>
        <p v-if="isDefaultVariant">
          At each oil change we top-off all regular fluids and take a quick
          glance under the hood to check for any additional preventative
          maintenance services you might need. Our goal is to keep your car at
          optimal performance for years to come.
        </p>
        <div v-if="isDefaultVariant" class="text-center flex flex-col mt-8">
          <NuxtLink to="/contact" class="link" title="Contact Us">
            Schedule an appointment
          </NuxtLink>
          to keep your engine happy!
        </div>
      </template>
    </ServiceCard>
    <!-- Maintenance / Tune-ups -->
    <ServiceCard
      id="factory-maintenance"
      :background-image="{
        src: '/images/service-tune-ups-1080x810.webp',
        cloudinaryId: 'mvev8b',
        alt: 'Factory Maintenance',
      }"
      heading-style="bg-stone-900/70"
      paragraph-style="bg-stone-200 text-zinc-900"
      button-to="/factory-maintenance"
      :variant="variant"
    >
      <template #heading-icon><IconMdi:carClock /></template>
      <template #heading-text>Factory Maintenance</template>
      <template #paragraph>
        <p :class="{ 'max-w-md': !isDefaultVariant }">
          Dubsquared provides comprehensive automotive maintenance and tune-ups
          to keep your Volkswagen or Audi running smoothly and efficiently.
          Regular maintenance is critical to the longevity of your vehicle.
        </p>
        <p v-if="isDefaultVariant">
          Typical maintenance items include engine air filter, cabin/pollen
          filter, spark plugs, fuel filter, DSG service, differential service,
          brake fluid flush, and more.
        </p>
        <p v-if="isDefaultVariant">
          Each vehicle has specific maintenance needs according to manufacturer
          guidelines. We're here to help keep your vehicle up to date with these
          factory recommended maintenance intervals.
        </p>
        <div v-if="isDefaultVariant" class="text-center flex flex-col mt-8">
          Not sure what the intervals are for your vehicle?
          <NuxtLink
            to="/contact"
            class="text-red-700 dark:text-red-700 underline underline-offset-2"
            title="Contact Us"
          >
            Get in touch
          </NuxtLink>
          and we'll happily assist.
        </div>
      </template>
    </ServiceCard>
    <!-- Diagnostics -->
    <ServiceCard
      id="diagnostics"
      :background-image="{
        src: '/images/service-diagnostic-1080x810.webp',
        cloudinaryId: 'u9wi5a',
        alt: 'Diagnostics',
      }"
      heading-style="bg-neutral-200/70 text-zinc-900"
      paragraph-style="bg-zinc-900"
      button-to="/diagnostics"
      :variant="variant"
    >
      <template #heading-icon><IconMdi:engineOffOutline /></template>
      <template #heading-text>Diagnostics</template>
      <template #paragraph>
        <p :class="{ 'max-w-md': !isDefaultVariant }">
          Dubsquared offers state-of-the-art diagnostics services to get to the
          root of the problem so we can perform your Volkswagen or Audi repair
          quickly, efficiently, and right the first time.
        </p>
        <p v-if="isDefaultVariant">
          With over 50 years of combined experience, our management and
          professional technicians are well qualified to diagnose and solve any
          problem you might have.
        </p>
        <div v-if="isDefaultVariant" class="text-center flex flex-col">
          <NuxtLink to="/meet-the-team" class="link" title="Meet the Team">
            Meet the team
          </NuxtLink>
          to learn more about our credentials.
        </div>
        <p v-if="isDefaultVariant">
          Our current diagnostic fee is
          <span class="font-bold text-green-500">$130/hr</span>
          with a minimum of
          <span class="font-bold">1</span> hour required. If repairs based on
          the diagnosis are authorized and performed within 30 days, then the
          diagnostic fee will be credited towards the price of recommended
          repairs.
        </p>
        <p v-if="isDefaultVariant">
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
        </p>

        <div v-if="isDefaultVariant" class="text-center flex flex-col mt-8">
          <NuxtLink to="/contact" class="link" title="Contact Us">
            Contact us
          </NuxtLink>
          to setup a diagnostic appointment!
        </div>
      </template>
    </ServiceCard>
    <!-- Performance Upgrades -->
    <ServiceCard
      id="performance-upgrades"
      :background-image="{
        src: '/images/service-performance-upgrades-1080x810.webp',
        cloudinaryId: 'erc6qw',
        alt: 'Performance Upgrades',
      }"
      heading-style="mx-8 bg-sky-900/70"
      paragraph-style="bg-sky-900"
      button-to="/performance-upgrades"
      :variant="variant"
    >
      <template #heading-icon
        ><IconMdi:carTurbocharger class="text-red-600"
      /></template>
      <template #heading-text>Performance Upgrades</template>
      <template #paragraph>
        <p :class="{ 'max-w-md': !isDefaultVariant }">
          Dubsquared carries a wide variety of Volkswagen and Audi performance
          parts from industry-leading brands. We have the skill and experience
          necessary to assist you in finding the right part you need at the
          right price.
        </p>
        <p v-if="isDefaultVariant">
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
        </p>
        <p v-if="isDefaultVariant">
          Dubsquared is staffed by lifelong Volkswagen and Audi enthusiasts who
          are passionate about performance, quality parts, and attention to
          detail. Customer satisfaction is our top priority and we will work
          hard to get you exactly what you want.
        </p>
        <div v-if="isDefaultVariant" class="text-center flex flex-col mt-8">
          <NuxtLink to="/contact" class="link" title="Contact Us">
            Get in touch
          </NuxtLink>
          and we'll help you unlock some hidden fun in your vehicle.
        </div>
      </template>
    </ServiceCard>
    <!-- Pre-purchase Inspections-->
    <ServiceCard
      id="pre-purchase-inspections"
      :background-image="{
        src: '/images/service-audi-dashboard-1080x810.webp',
        cloudinaryId: 'is4pwr',
        alt: 'Pre-purchase Inspections',
      }"
      heading-style="bg-stone-100/70 text-zinc-900"
      paragraph-style="bg-blue-gray-900"
      button-to="/pre-purchase-inspections"
      :variant="variant"
    >
      <template #heading-icon
        ><IconMdi:carInfo class="text-sky-900"
      /></template>
      <template #heading-text>Pre-purchase Inspections</template>
      <template #paragraph>
        <p :class="{ 'max-w-md': !isDefaultVariant }">
          Considering purchasing a used Volkswagen or Audi? We offer
          pre-purchase inspections that provide you with a full and unbiased
          overview of the vehicle's condition + any needed repairs.
        </p>
        <p v-if="isDefaultVariant">
          We recommend a full inspection be performed by a party independent of
          the seller before any used vehicle purchase. Dubsquared offers this
          service for a flat fee of
          <span class="font-bold text-green-400">$130</span>.
        </p>
        <p v-if="isDefaultVariant">
          You'll receive a full report with pictures, notes on what was found,
          and a full vehicle fault scan. Clients typically use this report as
          leverage in purchase negotiations or to plan for future repairs.
        </p>
        <p v-if="isDefaultVariant">
          The vehicle will need to be brought to our shop but most reputable
          used car dealers and individual sellers will allow third party
          inspections before purchase.
        </p>
        <div v-if="isDefaultVariant" class="text-center flex flex-col mt-8">
          <NuxtLink to="/contact" class="link" title="Contact Us">
            Schedule a pre-purchase inspection
          </NuxtLink>
          with Dubsquared so you don't get stuck with a 🍋.
        </div>
      </template>
    </ServiceCard>
  </div>
</template>

<style lang="scss" scoped>
.link {
  @apply px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2;
}
</style>
