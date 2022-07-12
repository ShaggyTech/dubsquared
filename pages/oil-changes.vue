<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
})

const heroObserverName = ref('page-oil-changes-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Technician performing an oil change',
  height: '1080',
  width: '810',
  src: '/images/service-oil-changes-1080x810.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/service-oil-changes-1080x810.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/service-oil-changes-2400x1800.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholder-1080x810.webp',
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
