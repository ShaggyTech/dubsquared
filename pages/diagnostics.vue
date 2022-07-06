<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
})

const heroObserverName = ref('page-diagnostics-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Engine Diagnostic Procedure',
  height: '1080',
  width: '810',
  src: '/images/service-diagnostic-1080x810.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/service-diagnostic-1080x810.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/service-diagnostic-2400x1800.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholder-1080x810.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesDiagnostics' }
</script>

<template>
  <PageWrapper>
    <PageHeader class="diagnostics-page-header">
      <PageHero
        title="Diagnostics"
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
            Dubsquared offers state-of-the-art diagnostics services to get to
            the root of the problem so we can perform your Volkswagen or Audi
            repair quickly, efficiently, and right the first time. With over 50
            years of combined experience, our management and professional
            technicians are well qualified to diagnose and solve any problem you
            might have.
          </p>
          <p>
            Our current diagnostic fee is
            <span class="font-bold text-green-400">$130/hr</span>
            with a minimum of
            <span class="font-bold">1</span> hour required. If repairs based on
            the diagnosis are authorized and performed within 30 days, then the
            diagnostic fee will be credited towards the price of recommended
            repairs.
            <NuxtLink to="/meet-the-team" class="link" title="Meet the Team">
              Meet the team
            </NuxtLink>
            to learn more about our credentials.
          </p>
          <p>
            If you're looking to dive in on your own, we use and can recommend
            the
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
          <div class="text-center flex flex-col mt-14">
            <NuxtLink to="contact" class="link" title="Contact Us">
              Contact us
            </NuxtLink>
            to setup a diagnostic appointment!
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