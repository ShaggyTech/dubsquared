<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Diagnostics',
  description:
    'Dubsquared offers professional Volkswagen and Audi diagnostic services.',
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
  placeholder: '/images/placeholders/placeholder-1080x810.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesDiagnostics' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="Diagnostics"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
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
            Dubsquared offers state-of-the-art diagnostics services to get to
            the root of the problem so we can perform your Volkswagen or Audi
            repair quickly, efficiently, and right the first time. With over 50
            years of combined experience, our management and professional
            technicians are well qualified to diagnose and solve any problem you
            might have.
          </p>
          <div class="text-center flex flex-col my-10">
            <Anchor to="/meet-the-team" class="mx-auto" title="Meet the Team">
              Meet the team
            </Anchor>
            to learn more about our credentials.
          </div>
          <p>
            Our current diagnostic fee is
            <span class="font-bold text-green-500">$130/hr</span>
            with a minimum of
            <span class="font-bold">1</span> hour required. If repairs based on
            the diagnosis are authorized and performed within 30 days, then the
            diagnostic fee will be credited towards the price of recommended
            repairs.
          </p>
          <p>
            If you're looking to dive in on your own, we use and can recommend
            the
            <a
              href="https://www.ross-tech.com/vag-com/"
              title="Ross-tech VAG-COM"
              target="_blank"
            >
              VCDS Scan Tool and Software
            </a>
            by Ross-Tech for all Volkswagen and Audi diagnostic needs.
          </p>
          <div class="flex flex-col mt-10 text-center">
            <Anchor to="/contact" class="mx-auto" title="Contact Us">
              Contact us
            </Anchor>
            to setup a diagnostic appointment!
          </div>
        </div>
        <LazyServiceButtonGroup />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
