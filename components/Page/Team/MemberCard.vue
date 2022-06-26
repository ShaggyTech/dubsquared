<script setup lang="ts">
import type { IImageProps, UnpluginIcon } from '~/types'

type Props = {
  image: IImageProps
  observerKey: string
  name: string
  title: string
  biography?: [
    {
      icon?: UnpluginIcon
      text?: string
      html?: string
    }
  ]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  image: () => ({
    alt: '',
    height: '',
    width: '',
    src: '',
    srcSets: [],
    placeholder: '',
  }),
  observerKey: undefined,
  name: '',
  title: '',
  biography: undefined,
})
</script>

<script lang="ts">
export default { name: 'PageTeamMemberCard' }
</script>

<template>
  <div
    class="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 py-6 mb-10 px-6 sm:px-6 lg:px-4 shadow-lg rounded-lg"
  >
    <div class="flex flex-col">
      <!-- Avatar -->
      <LazyPicture :image="image" :lazy="true" :observer-key="observerKey" />

      <!-- Details -->
      <div class="flex flex-col mt-6 items-center w-full font-medium">
        <div
          class="grid gap-1 pl-6 py-6 border-l-2 border-stone-400/20 dark:(border-stone-600/20)"
        >
          <!-- Name -->
          <slot name="name">
            <h2 class="text-stone-900 text-3xl font-bold dark:(text-stone-100)">
              {{ name }}
            </h2>
          </slot>
          <!-- Title -->
          <slot name="title">
            <p class="pl-2 text-gray-700 dark:(text-stone-300)">{{ title }}</p>
          </slot>

          <hr class="border-t-2 border-red-900/70 w-4/12 h-auto mt-2" />
          <slot name="email">
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
          </slot>
          <h3
            v-if="biography"
            class="text-stone-800 mt-8 text-xl dark:(text-stone-300)"
          >
            Biography:
          </h3>

          <div
            v-for="(item, index) in biography"
            :key="index"
            class="grid gap-2 pl-3 mt-3"
          >
            <div class="flex items-center">
              <div v-if="item.icon">
                <component :is="item.icon" />
              </div>
              <span v-if="item.text" class="pl-2">{{ item.text }}</span>
              <span v-else-if="item.html"></span>
            </div>
            <div class="flex items-center">
              <IconMaki:racetrack class="text-red-700 text-lg" />
              <span class="pl-2">Certified Volkswagen Technician</span>
            </div>
            <div class="flex items-center">
              <IconMaki:racetrack class="text-red-700 text-lg" />
              <span class="pl-2"
                >Founder of PWM -
                <span class="text-sm"> Philip Wight Motorsport</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
