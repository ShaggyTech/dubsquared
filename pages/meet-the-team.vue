<script lang="ts" setup>
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
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
  placeholder: '/images/placeholder-1080x720.webp',
}
</script>

<script lang="ts">
export default { name: 'PagesMeetTheTeam' }
</script>

<template>
  <PageWrapper>
    <PageHeader class="meet-the-team-page-header">
      <PageHero
        title="Meet the Team"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody>
      <PageSection class="mt-20">
        <!-- Page Container -->
        <div
          class="flex items-center justify-center min-h-screen bg-gray-200 dark:(bg-zinc-800) py-20"
        >
          <div class="flex flex-col mt-8">
            <!-- Meet the Team -->
            <div class="container max-w-7xl px-4">
              <!-- Section Header -->
              <div class="flex flex-wrap justify-center text-center">
                <div class="w-full lg:w-10/12 px-4">
                  <!-- Header -->
                  <h1
                    class="text-stone-900 text-4xl font-bold mb-8 dark:(text-stone-100)"
                  >
                    Meet the Team
                  </h1>

                  <!-- Description -->
                  <p class="text-stone-800 text-lg dark:(text-stone-300)">
                    With over 50 years of combined Volkswagen and Audi
                    experience, we've got a well-seasoned team ready for
                    anything that comes their way.
                  </p>
                </div>
              </div>

              <hr
                class="border-t-3 border-t-red-900 mt-24 mb-24 w-10/12 mx-auto"
              />
              <!-- Team Members -->
              <div class="flex flex-wrap col-span-1">
                <!-- Member #1 -->
                <div
                  class="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 py-6 mb-10 px-6 sm:px-6 lg:px-4 shadow-lg rounded-lg"
                >
                  <div class="flex flex-col">
                    <!-- Avatar -->
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-sm hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                      />
                    </a>

                    <!-- Details -->
                    <div
                      class="flex flex-col mt-6 items-center w-full font-medium"
                    >
                      <div
                        class="grid gap-1 pl-6 py-6 border-l-2 border-stone-400/20 dark:(border-stone-600/20)"
                      >
                        <!-- Name -->
                        <h2
                          class="text-stone-900 text-3xl font-bold dark:(text-stone-100)"
                        >
                          Philip W.
                        </h2>
                        <!-- Title -->
                        <p class="pl-2 text-gray-700 dark:(text-stone-300)">
                          Owner
                        </p>

                        <hr
                          class="border-t-2 border-red-900/70 w-4/12 h-auto mt-2"
                        />

                        <Anchor
                          href="mailto:philip@dubsquared.com"
                          text="philip@dubsquared.com"
                          title="Email philip@dubsquared.com"
                          aria-label="Email philip@dubsquared.com"
                          class="flex items-center mt-2 text-base no-underline font-medium tracking-wider"
                        >
                          <template #icon>
                            <IconMdi:emailFast class="text-green-700" />
                          </template>
                        </Anchor>
                        <h3
                          class="text-stone-800 mt-8 text-xl dark:(text-stone-300)"
                        >
                          Biography:
                        </h3>
                        <div class="grid gap-2 pl-3 mt-3">
                          <div class="flex items-center">
                            <IconMdi:timelineClock
                              class="text-cyan-600 text-lg"
                            />
                            <span class="pl-2">23 Years Audi/VW</span>
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Certified Volkswagen Technician</span
                            >
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Founder of PWM -
                              <span class="text-sm">
                                Philip Wight Motorsport</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Member #2 -->
                <div
                  class="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 py-6 mb-10 px-6 sm:px-6 lg:px-4 shadow-lg rounded-lg"
                >
                  <div class="flex flex-col">
                    <!-- Avatar -->
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-sm hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                      />
                    </a>

                    <!-- Details -->
                    <div
                      class="flex flex-col mt-6 items-center w-full font-medium"
                    >
                      <div
                        class="grid gap-1 pl-6 py-6 border-l-2 border-stone-400/20 dark:(border-stone-600/20)"
                      >
                        <!-- Name -->
                        <h2
                          class="text-stone-900 text-3xl font-bold dark:(text-stone-100)"
                        >
                          Philip W.
                        </h2>
                        <!-- Title -->
                        <p class="pl-2 text-gray-700 dark:(text-stone-300)">
                          Owner
                        </p>

                        <hr
                          class="border-t-2 border-red-900/70 w-4/12 h-auto mt-2"
                        />

                        <Anchor
                          href="mailto:philip@dubsquared.com"
                          text="philip@dubsquared.com"
                          title="Email philip@dubsquared.com"
                          aria-label="Email philip@dubsquared.com"
                          class="flex items-center mt-2 text-base no-underline font-medium tracking-wider"
                        >
                          <template #icon>
                            <IconMdi:emailFast class="text-green-700" />
                          </template>
                        </Anchor>
                        <h3
                          class="text-stone-800 mt-8 text-xl dark:(text-stone-300)"
                        >
                          Biography:
                        </h3>
                        <div class="grid gap-2 pl-3 mt-3">
                          <div class="flex items-center">
                            <IconMdi:timelineClock
                              class="text-cyan-600 text-lg"
                            />
                            <span class="pl-2">23 Years Audi/VW</span>
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Certified Volkswagen Technician</span
                            >
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Founder of PWM -
                              <span class="text-sm">
                                Philip Wight Motorsport</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Member #3 -->
                <div
                  class="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 py-6 mb-10 px-6 sm:px-6 lg:px-4 shadow-lg rounded-lg"
                >
                  <div class="flex flex-col">
                    <!-- Avatar -->
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-sm hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                      />
                    </a>

                    <!-- Details -->
                    <div
                      class="flex flex-col mt-6 items-center w-full font-medium"
                    >
                      <div
                        class="grid gap-1 pl-6 py-6 border-l-2 border-stone-400/20 dark:(border-stone-600/20)"
                      >
                        <!-- Name -->
                        <h2
                          class="text-stone-900 text-3xl font-bold dark:(text-stone-100)"
                        >
                          Philip W.
                        </h2>
                        <!-- Title -->
                        <p class="pl-2 text-gray-700 dark:(text-stone-300)">
                          Owner
                        </p>

                        <hr
                          class="border-t-2 border-red-900/70 w-4/12 h-auto mt-2"
                        />

                        <Anchor
                          href="mailto:philip@dubsquared.com"
                          text="philip@dubsquared.com"
                          title="Email philip@dubsquared.com"
                          aria-label="Email philip@dubsquared.com"
                          class="flex items-center mt-2 text-base no-underline font-medium tracking-wider"
                        >
                          <template #icon>
                            <IconMdi:emailFast class="text-green-700" />
                          </template>
                        </Anchor>
                        <h3
                          class="text-stone-800 mt-8 text-xl dark:(text-stone-300)"
                        >
                          Biography:
                        </h3>
                        <div class="grid gap-2 pl-3 mt-3">
                          <div class="flex items-center">
                            <IconMdi:timelineClock
                              class="text-cyan-600 text-lg"
                            />
                            <span class="pl-2">23 Years Audi/VW</span>
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Certified Volkswagen Technician</span
                            >
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Founder of PWM -
                              <span class="text-sm">
                                Philip Wight Motorsport</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Member #4 -->
                <div
                  class="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 py-6 mb-10 px-6 sm:px-6 lg:px-4 shadow-lg rounded-lg"
                >
                  <div class="flex flex-col">
                    <!-- Avatar -->
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-sm hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                      />
                    </a>

                    <!-- Details -->
                    <div
                      class="flex flex-col mt-6 items-center w-full font-medium"
                    >
                      <div
                        class="grid gap-1 pl-6 py-6 border-l-2 border-stone-400/20 dark:(border-stone-600/20)"
                      >
                        <!-- Name -->
                        <h2
                          class="text-stone-900 text-3xl font-bold dark:(text-stone-100)"
                        >
                          Philip W.
                        </h2>
                        <!-- Title -->
                        <p class="pl-2 text-gray-700 dark:(text-stone-300)">
                          Owner
                        </p>

                        <hr
                          class="border-t-2 border-red-900/70 w-4/12 h-auto mt-2"
                        />

                        <Anchor
                          href="mailto:philip@dubsquared.com"
                          text="philip@dubsquared.com"
                          title="Email philip@dubsquared.com"
                          aria-label="Email philip@dubsquared.com"
                          class="flex items-center mt-2 text-base no-underline font-medium tracking-wider"
                        >
                          <template #icon>
                            <IconMdi:emailFast class="text-green-700" />
                          </template>
                        </Anchor>
                        <h3
                          class="text-stone-800 mt-8 text-xl dark:(text-stone-300)"
                        >
                          Biography:
                        </h3>
                        <div class="grid gap-2 pl-3 mt-3">
                          <div class="flex items-center">
                            <IconMdi:timelineClock
                              class="text-cyan-600 text-lg"
                            />
                            <span class="pl-2">23 Years Audi/VW</span>
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Certified Volkswagen Technician</span
                            >
                          </div>
                          <div class="flex items-center">
                            <IconMaki:racetrack class="text-red-700 text-lg" />
                            <span class="pl-2"
                              >Founder of PWM -
                              <span class="text-sm">
                                Philip Wight Motorsport</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
