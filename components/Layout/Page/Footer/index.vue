<script lang="ts" setup>
import { IApp } from '~/utils/app'

const app = useState<IApp>('app')

const footerObjectData =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107441.24127096374!2d-97.19730196382534!3d32.6983079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d2df9e608cb%3A0x7cd9aab902cff64b!2sDubsquared!5e0!3m2!1sen!2sus!4v1645761293912!5m2!1sen!2sus'
</script>

<script lang="ts">
export default { name: 'LayoutPageFooter' }
</script>

<template>
  <footer
    ref="container"
    class="relative w-full h-fit bg-true-gray-100 border-t border-zinc-900/20 dark:(bg-zinc-900 border-gray-50/20)"
  >
    <section
      class="flex flex-col h-fit w-full max-w-8xl mx-auto apple-safe-area"
    >
      <SVGDubsquaredTextLogo class="max-w-lg mx-auto mt-14" />
      <div
        class="grid gap-y-14 gap-x-6 text-center w-full mt-16 px-4 md:grid-cols-2 xl:(grid-cols-4 mt-20 px-8)"
      >
        <!-- contact -->
        <LayoutPageFooterCard title="Contact">
          <ul class="flex flex-col gap-6 mt-6 tracking-wide">
            <li>
              <a
                href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
                target="_blank"
                title="Get Directions"
              >
                <address class="flex place-items-center gap-6">
                  <IconMdi:mapMarkerRadius
                    class="h-[1.8em] w-[1.8em]"
                    aria-hidden="true"
                  />
                  <span
                    ref="textRef"
                    class="flex flex-col text-left dark:text-stone-200"
                  >
                    <span>1223 Colorado Ln</span>
                    <span>Suite 105</span>
                    <span>Arlington, TX 76015</span>
                  </span>
                </address>
              </a>
            </li>
            <li>
              <a
                href="tel:817-277-5593"
                aria-label="Call Dubsquared"
                title="Call Dubsquared"
                class="flex items-center gap-6"
              >
                <IconMdi:phoneForward class="h-[1.5em] w-[1.5em]" />
                <span>817-277-5593</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@dubsquared.com"
                aria-label="Email Dubsquared"
                title="Email Dubsquared"
                class="flex items-center gap-6"
              >
                <IconMdi:emailFast class="h-[1.5em] w-[1.5em]" />
                <span>info@dubsquared.com</span>
              </a>
            </li>
          </ul>
        </LayoutPageFooterCard>
        <!-- Business Hours -->
        <LayoutPageFooterCard title="Shop Hours">
          <table class="mt-6">
            <tbody class="flex flex-col gap-1 text-left">
              <tr class="flex gap-4">
                <th class="w-4ch">Mon:</th>
                <td>
                  <span>9:00 AM – 6:00 PM</span>
                </td>
              </tr>
              <tr class="flex gap-4">
                <th class="w-4ch">Tue:</th>
                <td>
                  <span>9:00 AM – 6:00 PM</span>
                </td>
              </tr>
              <tr class="flex gap-4">
                <th class="w-4ch">Wed:</th>
                <td>
                  <span>9:00 AM – 6:00 PM</span>
                </td>
              </tr>
              <tr class="flex gap-4">
                <th class="w-4ch">Thu:</th>
                <td>
                  <span>9:00 AM – 6:00 PM</span>
                </td>
              </tr>
              <tr class="flex gap-4">
                <th class="w-4ch">Fri:</th>
                <td>
                  <span>9:00 AM – 6:00 PM</span>
                </td>
              </tr>
              <tr class="flex gap-4">
                <th class="w-4ch">Sat:</th>
                <td>
                  <span>Closed</span>
                </td>
              </tr>
              <tr class="flex gap-4">
                <th class="w-4ch">Sun:</th>
                <td>
                  <span>Closed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </LayoutPageFooterCard>

        <!-- links -->
        <LayoutPageFooterCard title="Links">
          <ul class="flex flex-col gap-2 mt-8">
            <li>
              <NuxtLink to="/about" class="flex items-center gap-6">
                <IconMdi:information
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/meet-the-team" class="flex items-center gap-6">
                <IconRi:teamLine
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Meet the Team
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="flex items-center gap-6">
                <IconMdi:cellphone
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="flex items-center gap-6">
                <IconCarbon:vehicleServices
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/oil-changes" class="flex items-center gap-6">
                <IconMdi:oilLevel
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Oil Changes
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/factory-maintenance"
                class="flex items-center gap-6"
              >
                <IconMdi:carClock
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Factory Maintenance
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/diagnostics" class="flex items-center gap-6">
                <IconMdi:engineOffOutline
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Diagnostics
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/performance-upgrades"
                class="flex items-center gap-6"
              >
                <IconMdi:carTurbocharger
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Performance Upgrades
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pre-purchase-inspections"
                class="flex items-center gap-6"
              >
                <IconMdi:carInfo
                  aria-hidden="true"
                  class="h-[1.5em] w-[1.5em]"
                />
                Pre-purchase Inspections
              </NuxtLink>
            </li>
          </ul>
        </LayoutPageFooterCard>

        <!-- social -->
        <LayoutPageFooterCard title="Social">
          <ContactSocialMedia class="w-full mt-10 px-4 max-w-lg text-3xl" />
        </LayoutPageFooterCard>
      </div>
      <LazyObject
        :data="footerObjectData"
        height="800"
        width="800"
        name="Google Maps Dubsquared"
        type="text/html"
        :lazy="true"
        observer-key="page-layout-footer-object"
        class="h-64 w-full mt-12 mx-auto px-4 border-none lg:(mt-20 px-8)"
      />
      <div class="w-full mt-10 py-4 px-4 text-center lg:(mt-20 px-8)">
        <div class="mb-1">Dubsquared - Volkswagen and Audi Specialists</div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2022 <a :href="app.author.link">{{ app.author.name }}</a
          >. All rights reserved. Original template design by
          <a href="https://github.com/viandwi24">viandwi24</a>
        </div>
      </div>
    </section>
  </footer>
</template>
