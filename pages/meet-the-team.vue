<script lang="ts" setup>
import IconMdiTimelineClock from '~icons/mdi/timeline-clock'
import IconMakiRacetrack from '~icons/maki/racetrack'

import type { IImage } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'Meet the Team',
  description:
    'With over 50 years of combined Volkswagen and Audi experience, Dubsquared has a professional team ready for anything that comes their way.',
})

const heroObserverName = ref('page-about-hero-section-observer')
const heroBackgroundImage: IImage = {
  path: '/images/dubsquared-employees-frontage.jpg',
  cloudinaryId: 'gnzqcm',
  alt: 'Group photo of Dubsquared employees in front of the shop',
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
        :image="heroBackgroundImage"
        :observer-key="heroObserverName"
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
              <TeamMemberCard
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
                  path: 'images/dubsquared-headshot-philip.jpg',
                  cloudinaryId: 'hyhomg',
                  alt: 'Photo of team member Philip W.',
                }"
              />
              <TeamMemberCard
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
                  path: 'images/dubsquared-headshot-tyler.jpg',
                  cloudinaryId: 'gxjspu',
                  alt: 'Photo of team member Tyler S.',
                }"
              />
              <TeamMemberCard
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
                  path: 'images/dubsquared-headshot-brandon.jpg',
                  cloudinaryId: 'ry9ulo',
                  alt: 'Photo of team member Brandon E.',
                }"
              />
              <TeamMemberCard
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
                  path: 'images/dubsquared-headshot-bryan.jpg',
                  cloudinaryId: 'qgry8x',
                  alt: 'Photo of team member Bryan H.',
                }"
              />
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
