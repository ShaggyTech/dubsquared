<script setup lang="ts">
interface Props {
  title?: string
  paragraph?: string
  anchorText: string
  anchorTo?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  title: '',
  paragraph: '',
  anchorText: '',
  anchorTo: undefined,
})
</script>

<script lang="ts">
export default { name: 'PageSectionHeader' }
</script>

<template>
  <div class="grid place-items-center">
    <div
      class="flex flex-col items-center text-center prose lg:prose-lg xl:prose-xl"
    >
      <slot name="icon" />
      <h1 class="!mt-8 font-nunito-sans font-bold tracking-wider">
        {{ title }}
      </h1>
      <hr
        class="w-10/12 md:w-full !mt-0 !mb-12 !border-t-2 !border-t-red-900 dark:!border-t-red-900"
      />
      <p class="text-2xl font-semibold">
        {{ paragraph }}
      </p>
      <Anchor v-if="anchorTo" :to="anchorTo" class="!mt-8 !text-2xl !font-bold">
        {{ anchorText }}
      </Anchor>
    </div>
  </div>
</template>
