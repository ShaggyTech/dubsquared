<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
})

const heroObserverName = ref(
  'page-pre-purchase-inspections-hero-section-observer'
)
const heroBackgroundImage: IImageProps = {
  alt: 'Inspecting a vehicle before purchase',
  height: '1080',
  width: '810',
  src: '/images/service-audi-dashboard-1080x810.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/service-audi-dashboard-1080x810.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/service-audi-dashboard-2400x1800.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholder-1080x810.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesPrePurchaseInspections' }
</script>

<template>
  <PageWrapper>
    <PageHeader class="pre-purchase-inspections-page-header">
      <PageHero
        title="Pre-purchase Inspections"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody>
      <PageSection
        :class="`
          section-about grid place-items-center mx-auto max-w-8xl py-20 lg:py-24
          bg-zinc-300 dark:bg-zinc-900
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
            <span class="font-bold text-green-400">$130</span>.
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
          <div class="text-center flex flex-col mt-14">
            <NuxtLink to="contact" class="link" title="Contact Us">
              Schedule a pre-purchase inspection
            </NuxtLink>
            with Dubsquared so you don't get stuck with a 🍋.
          </div>
        </div>
        <div
          class="flex flex-wrap w-full gap-x-8 gap-y-6 sm:gap-y-12 mt-12 px-4 sm:px-10 py-16 place-content-center dark:bg-zinc-800/30 rounded-md shadow-lg"
        >
          <Button
            role="menuitem"
            to="/oil-changes"
            text="Oil Changes"
            size="md"
            class="flex-1 whitespace-nowrap"
          />
          <Button
            role="menuitem"
            to="/factory-maintenance"
            text="Factory Maintenance"
            size="md"
            class="flex-1 whitespace-nowrap"
          />
          <Button
            role="menuitem"
            to="/diagnostics"
            text="Diagnostics"
            size="md"
            class="flex-1 whitespace-nowrap"
          />
          <Button
            role="menuitem"
            to="/performance-upgrades"
            text="Performance Upgrades"
            size="md"
            class="flex-1 whitespace-nowrap"
          />
          <Button
            role="menuitem"
            to="/pre-purchase-inspections"
            text="Pre-purchase Inspections"
            size="md"
            class="flex-1 whitespace-nowrap"
          />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>