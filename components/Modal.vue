<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue'

type Props = {
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
})

const isOpen = ref(false)
const showRef = toRef(props, 'show')

watch(showRef, (show) => {
  isOpen.value = show
})

const closeModal = () => {
  isOpen.value = false
}
</script>

<script lang="ts">
export default { name: 'Modal', inheritAttrs: false }
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 w-screen h-screen bg-stone-800/30 dark:bg-zinc-900/80 backdrop-blur transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              v-bind="$attrs"
              class="w-full max-w-lg p-8 text-left rounded-2xl overflow-hidden bg-zinc-900 border-3 shadow-xl transform transition-all"
            >
              <slot />
              <div class="grid place-items-center mt-4">
                <Button type="button" @click="closeModal"
                  ><IconUil:times class="mr-2" /> Close
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
