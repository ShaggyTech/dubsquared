<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentVariant === 'dropdown-right-top'"
      v-model="themeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel for="theme-dropdown-btn" class="sr-only"
        >Theme</ListboxLabel
      >
      <ListboxButton id="theme-dropdown-btn" type="button" title="Change theme">
        <span class="flex justify-center items-center dark:hidden">
          <IconUil:sun class="text-1.2em" />
        </span>
        <span class="justify-center items-center hidden dark:flex">
          <IconUil:moon class="text-1.2em" />
        </span>
      </ListboxButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-80 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-80 opacity-0"
      >
        <ListboxOptions
          :class="`
          absolute top-full right-0 outline-none overflow-hidden z-50
          w-36 p-1 py-1 rounded-lg shadow-lg
          text-sm font-semibold text-gray-700 dark:text-gray-300 dark:highlight-white/5
          bg-stone-100 dark:bg-stone-800
          ring-1 ring-gray-900/10 dark:ring-0
        `"
        >
          <ListboxOption
            v-for="theme in availableThemes"
            :key="theme.key"
            :value="theme.key"
            :class="{
              'py-2 px-2 flex items-center cursor-pointer': true,
              'text-stone-400 bg-stone-100 dark:bg-stone-600/30':
                themeSetting === theme.key,
              'hover:bg-gray-50 dark:hover:bg-stone-700/30':
                themeSetting !== theme.key,
            }"
          >
            <span class="text-sm mr-2">
              <IconUil:moon v-if="theme.key === 'dark'" />
              <IconUil:laptop v-else-if="theme.key === 'system'" />
              <IconUil:clock v-else-if="theme.key === 'realtime'" />
              <!-- default to 'light' -->
              <IconUil:sun v-else />
            </span>
            {{ theme.text }}
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
    <select
      v-if="currentVariant === 'select-box'"
      v-model="themeSetting"
      class="select-box w-full px-2 pr-3 py-1 rounded dark:bg-zinc-700"
    >
      <option
        v-for="theme in availableThemes"
        :key="theme.key"
        :value="theme.key"
      >
        {{ theme.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { IThemeSettingOptions, availableThemes } from '~/utils/theme'

type Variants = 'dropdown-right-top' | 'select-box'

interface Props {
  variant?: Variants
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'dropdown-right-top',
})

// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting')
const currentVariant = toRef(props, 'variant')
</script>
