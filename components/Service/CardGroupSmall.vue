<script lang="ts">
export default { name: 'ServiceCardGroupSmall' }
</script>

<template>
  <div class="flex flex-wrap gap-x-8 gap-y-20 place-content-around mt-28">
    <!-- Oil Changes -->
    <ServiceCard
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
          Keeping the engine in your car well-lubricated with clean oil is vital
          to its performance and longevity. Dubsquared offers quick and easy oil
          changes using only the highest quality oil and filters.
        </p>
      </template>
    </ServiceCard>

    <!-- Maintenance / Tune-ups -->
    <ServiceCard
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
          Dubsquared provides comprehensive automotive maintenance and tune-ups
          to keep your Volkswagen or Audi running smoothly and efficiently.
          Regular maintenance is critical to the longevity of your vehicle.
        </p>
      </template>
    </ServiceCard>
    <!-- Diagnostics -->
    <ServiceCard
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
          Dubsquared offers state-of-the-art diagnostics services to get to the
          root of the problem so we can perform your Volkswagen or Audi repair
          quickly, efficiently, and right the first time.
        </p>
      </template>
    </ServiceCard>
    <!-- Performance Upgrades -->
    <ServiceCard
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
          Dubsquared carries a wide variety of Volkswagen and Audi performance
          parts from industry-leading brands. We have the skill and experience
          necessary to assist you in finding the right part.
        </p>
      </template>
    </ServiceCard>
    <!-- Pre-purchase Inspections-->
    <ServiceCard
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
    </ServiceCard>
  </div>
</template>
