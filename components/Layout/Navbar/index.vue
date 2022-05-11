<template>
  <AppNavbarBuilder>
    <!-- <template #banner>
      <AppContactBar
        type="detached"
        :items="contactBarItems"
        :class="`
            bg-red-700 dark:bg-red-900 py-2
            border-y-2 border-yellow-400/80 dark:border-yellow-400/90
            font-alatsi text-base sm:text-lg lg:text-2xl text-gray-200 dark:text-gray-200 hover:text-white
            tracking-wide sm:tracking-wider lg:tracking-widest
            flex flex-row items-center justify-center gap-x-4
            w-full h-auto max-h-[46px] lg:max-h-[54px]
            px-6 lg:py-6
          `"
        :anchor-style="`
            text-gray-100 font-semibold tracking-wide sm:tracking-wider lg:tracking-widest
            hover:text-white hover:bg-red-500/40 rounded
            py-1 border-x-2 border-transparent hover:border-red-700/50
            shadow-none hover:shadow-inner hover:shadow-red-500 dark:hover:shadow-red-400
          `"
        icon-style="hidden sm:block mr-4 lg:mr-6 "
      />
    </template> -->

    <!-- Desktop Menu -->
    <template #menu>
      <AppNavbarMenu :menu="menuItems" />
    </template>

    <!-- Mobile Menu -->
    <template #options="{ toggleOptions }">
      <!-- We want this:
        <AppNavbarMenuMobile :menu="menuItems" />

        TODO: Make a new ActionSheet for sidebar
      -->
      <AppNavbarMenuMobile :menu="menuItems" @onClose="toggleOptions(false)" />
      <!-- <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menuItems"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="mt-2">
            <ThemeToggle type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          type="secondary"
          title="Github"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        >
          <IconMdi:github-face />
          <span class="ml-1">Github</span>
        </Button>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet> -->
    </template>
  </AppNavbarBuilder>
</template>

<script lang="ts" setup>
// import { IApp } from '~/utils/app'
// import type { IContactBarItem } from '@/types'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
// const app = useState<IApp>('app')

const menuItems = computed((): IMenuItem[] => [
  { type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
  { type: 'link', text: t('pages.services.nav'), route: { name: 'services' } },
  { type: 'link', text: t('pages.gallery.nav'), route: { name: 'gallery' } },
  { type: 'link', text: t('pages.contact.nav'), route: { name: 'contact' } },
  // { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
  // { type: 'link', text: t('pages.test.nav'), route: { name: 'test' } },
  // { type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
  {
    type: 'button',
    text: t('pages.get_a_quote.nav'),
    route: { name: 'get-a-quote' },
  },
])

// const contactBarItems: IContactBarItem[] = [
//   {
//     text: '817-277-5593',
//     href: 'tel:817-277-5593',
//     icon: 'phone',
//     ariaLabel: 'Call Dubsquared',
//   },
//   {
//     text: 'info@dubsquared.com',
//     href: 'mailto:info@dubsquared.com',
//     icon: 'email',
//     ariaLabel: 'Email Dubsquared',
//   },
// ]
</script>
