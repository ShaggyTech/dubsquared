<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="themeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        {{ $t('components.theme_switcher.theme') }}
      </ListboxLabel>
      <ListboxButton
        type="button"
        :title="$t('components.theme_switcher.change_theme')"
      >
        <span class="flex justify-center items-center dark:hidden">
          <IconUil:sun style="font-size: 1.2em" />
        </span>
        <span class="justify-center items-center hidden dark:flex">
          <IconUil:moon style="font-size: 1.2em" />
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
          bg-warm-gray-100 dark:bg-warm-gray-800
          ring-1 ring-gray-900/10 dark:ring-0
        `"
        >
          <ListboxOption
            v-for="theme in availableThemes"
            :key="theme.key"
            :value="theme.key"
            :class="{
              'py-2 px-2 flex items-center cursor-pointer': true,
              'text-warm-gray-400 bg-warm-gray-100 dark:bg-warm-gray-600/30':
                themeSetting === theme.key,
              'hover:bg-gray-50 dark:hover:bg-warm-gray-700/30':
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
      v-if="currentStyle === 'select-box'"
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

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting')
const currentStyle = toRef(props, 'type')
</script>
