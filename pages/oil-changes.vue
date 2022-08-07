<script lang="ts" setup>
import type { IImage } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Oil Changes',
  description:
    'Dubsquared offers quick and easy oil changes for Volkswagen and Audi owners, using only the highest quality oil and filters.',
})

const heroObserverName = ref('page-oil-changes-hero-section-observer')
const heroBackgroundImage: IImage = {
  path: '/images/service-oil-changes-2400x1800.webp',
  cloudinaryId: 'vbasbm',
  alt: 'Technician performing an oil change on a Volkswagen',
}
</script>

<script lang="ts">
export default { name: 'PagesOilChanges' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="Oil Changes"
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
            Keeping the engine in your car well-lubricated with clean oil is
            vital to its performance and longevity. Dubsquared offers quick and
            easy oil changes using only the highest quality oil from
            <a
              href="https://www.motul.com/us/en-us"
              target="_blank"
              title="Motul"
              >MOTUL</a
            >.
          </p>
          <p>
            At each oil change we top-off all regular fluids and take a quick
            glance under the hood to check for any additional preventative
            maintenance services you might need. Our goal is to keep your car at
            optimal performance for years to come.
          </p>
          <div class="flex flex-col mt-14 text-center">
            <Anchor to="contact" class="mx-auto" title="Contact Us">
              Schedule an appointment
            </Anchor>
            to keep your engine happy!
          </div>
        </div>
        <LazyServiceButtonGroup />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
