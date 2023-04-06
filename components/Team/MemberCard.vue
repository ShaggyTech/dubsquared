<script setup lang="ts">
import type { IImage, IUnpluginIcon } from '~/types'

type Props = {
  image: IImage
  name: string
  title: string
  email: string
  biography?: {
    icon?: IUnpluginIcon
    iconClass?: string
    text?: string
    html?: string
  }[]
  observerKey?: string
}

defineProps<Props>()
</script>

<script lang="ts">
export default { name: 'TeamMemberCard' }
</script>

<template>
  <div
    class="flex mx-auto mb-10 py-6 px-6 bg-stone-100 rounded shadow-lg lg:px-8 dark:(bg-zinc-900)"
  >
    <div class="flex flex-col w-full">
      <!-- Avatar -->
      <CloudinaryImage
        :image="{
          path: image.path,
          cloudinaryId: image.cloudinaryId,
        }"
        :placeholder="{
          path: 'images/placeholders/person-placeholder-375x450.webp',
          cloudinaryId: 'dmwcsw',
        }"
        :height="image.height || 500"
        :width="image.width || 350"
        :alt="image.alt"
        :lazy="true"
        :observer-key="observerKey"
        img-class="rounded-lg"
        class="place-self-center min-w-350px min-h-500px"
      />

      <!-- Details -->
      <div class="flex flex-col gap-1 mt-2 pl-2 py-6 font-medium w-full">
        <!-- Name -->
        <slot name="name">
          <h2 class="text-stone-900 text-3xl font-bold dark:(text-stone-100)">
            {{ name }}
          </h2>
        </slot>
        <!-- Title -->
        <slot name="title">
          <p class="text-gray-700 dark:(text-stone-300)">{{ title }}</p>
        </slot>

        <hr class="border-t-2 border-red-900/70 w-4/12 h-auto mt-2" />
        <slot name="email">
          <Anchor
            :href="`mailto:${email}`"
            :text="email"
            :title="`Email ${email}`"
            :aria-label="`Email ${email}`"
            class="flex items-center mt-2 text-base no-underline font-medium tracking-wider"
          >
            <template #icon>
              <IconMdi:emailFast class="text-green-800" />
            </template>
          </Anchor>
        </slot>
        <h3
          v-if="biography?.length"
          class="text-stone-900 mt-6 text-lg dark:(text-stone-300)"
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
              <component :is="item.icon" :class="item.iconClass" />
            </div>
            <p v-if="item.html" class="pl-2" v-html="item.html"></p>
            <p v-else-if="item.text" class="pl-2">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
