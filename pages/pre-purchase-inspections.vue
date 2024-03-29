<script lang="ts" setup>
import type { IImage } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Pre-purchase Inspections',
  description:
    'Considering purchasing a used Volkswagen or Audi? We provide pre-purchase inspections to catch any potential problems before committing to the vehicle.',
})

const heroObserverName = ref(
  'page-pre-purchase-inspections-hero-section-observer'
)
const heroBackgroundImage: IImage = {
  path: '/images/service-audi-dashboard-2400x1800.webp',
  cloudinaryId: 'zebgjd',
  alt: 'Technician performing a pre-purchase inspection',
}
</script>

<script lang="ts">
export default { name: 'PagesPrePurchaseInspections' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="Pre-purchase Inspections"
        :image="heroBackgroundImage"
        :observer-key="heroObserverName"
      />
    </PageHeader>
    <PageBody>
      <PageSection
        :class="`
          grid place-items-center mx-auto max-w-8xl py-20
          bg-zinc-300 lg:py-24 dark:bg-zinc-900
        `"
      >
        <div class="prose prose-lg lg:prose-xl">
          <p>
            Considering purchasing a used Volkswagen or Audi? We recommend a
            full inspection be performed by a party independent of the seller
            before any used vehicle purchase.
          </p>
          <p>
            We offer pre-purchase inspections that provide you with a full and
            unbiased overview of the vehicle's condition + any needed repairs.
            Dubsquared offers this service for a flat fee of
            <span class="font-bold text-green-500">$135</span>.
          </p>
          <p>
            You'll receive a full report with pictures, notes on what was found,
            and a full vehicle fault scan. Clients typically use this report as
            leverage in purchase negotiations or to plan for future repairs.
          </p>
          <p>
            The vehicle will need to be brought to our shop but most reputable
            used car dealers and individual sellers will allow third party
            inspections before purchase.
          </p>
          <div class="flex flex-col mt-14 text-center">
            <NuxtLink to="contact" class="link" title="Contact Us">
              Schedule a pre-purchase inspection
            </NuxtLink>
            with Dubsquared so you don't get stuck with a 🍋.
          </div>
        </div>
        <LazyServiceButtonGroup />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
