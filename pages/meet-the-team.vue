<script lang="ts" setup>
import IconMdiTimelineClock from '~icons/mdi/timeline-clock'
import IconMakiRacetrack from '~icons/maki/racetrack'
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Meet the Team',
  description:
    'With over 50 years of combined Volkswagen and Audi experience, Dubsquared has a professional team ready for anything that comes their way.',
})

const heroObserverName = ref('page-about-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Volkswagen R32 parked between two school buses',
  height: '1080',
  width: '720',
  src: '/images/r32-bus-yard-1080x720.webp',
  srcSets: [
    {
      media: '(max-width: 1023.9px)',
      srcSet: '/images/r32-bus-yard-1080x720.webp',
      type: 'image/webp',
    },
    {
      media: '(min-width: 1024px)',
      srcSet: '/images/r32-bus-yard-1920x1280.webp',
      type: 'image/webp',
    },
  ],
  placeholder: '/images/placeholders/placeholder-1080x720.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesMeetTheTeam' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="The Team"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div
          class="flex items-center justify-center min-h-screen py-20 bg-gray-200 dark:(bg-zinc-800)"
        >
          <div class="flex flex-col w-full mt-8 px-4">
            <div
              class="flex flex-col justify-center text-center w-full mx-auto px-4 sm:w-10/12 lg:w-8/12"
            >
              <h1
                class="text-stone-900 text-4xl font-bold font-lora lg:(text-5xl tracking-wide) dark:(text-stone-100)"
              >
                Meet the Team
              </h1>
              <p
                class="mt-10 text-stone-800 text-xl lg:(text-2xl) dark:(text-stone-300)"
              >
                With over 50 years of combined Volkswagen and Audi experience,
                we've got a well-seasoned team ready for anything that comes
                their way.
              </p>
            </div>

            <hr
              class="mt-24 mb-24 w-10/12 mx-auto border-t-3 border-t-red-900"
            />

            <div class="flex flex-wrap place-content-around gap-x-6 w-full">
              <LazyTeamMemberCard
                name="Philip W."
                title="Owner"
                email="philip@dubsquared.com"
                :biography="[
                  {
                    icon: IconMdiTimelineClock,
                    iconClass: 'text-blue-600',
                    text: '21 years Audi/VW experience',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Certified Volkswagen Technician',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    html: `Founder of PWM <span class='text-xs font-extralight'> - Philip Wight Motorsports</span>`,
                  },
                ]"
                observer-key="team-member-philip-w"
                :image="{
                  alt: 'Photo of team member Philip W.',
                  height: '450',
                  width: '375',
                  placeholder:
                    '/images/placeholders/person-placeholder-375x450.webp',
                }"
              />
              <LazyTeamMemberCard
                name="Tyler S."
                title="Technician"
                email="tyler@dubsquared.com"
                :biography="[
                  {
                    icon: IconMdiTimelineClock,
                    iconClass: 'text-blue-600',
                    text: '13 years Audi/VW experience',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Performance Specialist',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Electrical Guru',
                  },
                ]"
                observer-key="team-member-tyler-s"
                :image="{
                  alt: 'Photo of team member Tyler S.',
                  height: '450',
                  width: '375',
                  placeholder:
                    '/images/placeholders/person-placeholder-375x450.webp',
                }"
              />
              <LazyTeamMemberCard
                name="Brandon E."
                title="Technician"
                email="brandon@dubsquared.com"
                :biography="[
                  {
                    icon: IconMdiTimelineClock,
                    iconClass: 'text-blue-600',
                    text: '21 years Audi/VW experience',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Master Certified Volkswagen Technician',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Certified Audi Technician',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Volkswagen Academy Graduate',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    html: `UTI Graduate <span class='text-xs font-extralight'> - Universal Technical Institute</span>`,
                  },
                ]"
                observer-key="team-member-brandon-e"
                :image="{
                  alt: 'Photo of team member Brandon E.',
                  height: '450',
                  width: '375',
                  placeholder:
                    '/images/placeholders/person-placeholder-375x450.webp',
                }"
              />
              <LazyTeamMemberCard
                name="Bryan H."
                title="Customer Service Specialist"
                email="bryan@dubsquared.com"
                :biography="[
                  {
                    icon: IconMdiTimelineClock,
                    iconClass: 'text-blue-600',
                    text: 'Lifelong Audi/VW Enthusiast',
                  },
                  {
                    icon: IconMakiRacetrack,
                    iconClass: 'text-red-800',
                    text: 'Aftermarket Specialist',
                  },
                ]"
                observer-key="team-member-bryan-h"
                :image="{
                  alt: 'Photo of team member Bryan H.',
                  height: '450',
                  width: '375',
                  placeholder:
                    '/images/placeholders/person-placeholder-375x450.webp',
                }"
              />
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
