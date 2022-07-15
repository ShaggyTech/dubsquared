<script lang="ts">
export default { name: 'LayoutPageFooterCardGroup' }
</script>

<template>
  <div
    class="grid gap-y-14 gap-x-6 text-center w-full mt-16 px-4 md:grid-cols-2 xl:(grid-cols-4 mt-20 px-8)"
  >
    <!-- contact -->
    <LayoutPageFooterCard title="Contact">
      <ul class="flex flex-col gap-4 mt-6 tracking-wide">
        <li>
          <NuxtLink
            title="Get Directions"
            href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
            target="_blank"
            aria-label="Get Directions"
          >
            <IconMdi:mapMarkerRadius
              class="!h-[1.6em] !w-[1.6em]"
              aria-hidden="true"
            />
            <address>
              <span
                ref="textRef"
                class="flex flex-col text-left dark:text-stone-200"
              >
                <span>1223 Colorado Ln</span>
                <span>Suite 105</span>
                <span>Arlington, TX 76015</span>
              </span>
            </address>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            href="tel:817-277-5593"
            title="Call Dubsquared"
            aria-label="Call Dubsquared"
          >
            <IconMdi:phoneForward aria-hidden="true" />
            <span>817-277-5593</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            href="mailto:info@dubsquared.com"
            title="Email Dubsquared"
            aria-label="Email Dubsquared"
          >
            <IconMdi:emailFast aria-hidden="true" />
            <span>info@dubsquared.com</span>
          </NuxtLink>
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
          <NuxtLink to="/about">
            <IconMdi:information aria-hidden="true" />
            About Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/meet-the-team">
            <IconRi:teamLine aria-hidden="true" />
            Meet the Team
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">
            <IconMdi:cellphone aria-hidden="true" />
            Contact Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">
            <IconCarbon:vehicleServices aria-hidden="true" />
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/oil-changes">
            <IconMdi:oilLevel aria-hidden="true" />
            Oil Changes
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/factory-maintenance">
            <IconMdi:carClock aria-hidden="true" />
            Factory Maintenance
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/diagnostics">
            <IconMdi:engineOffOutline aria-hidden="true" />
            Diagnostics
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/performance-upgrades">
            <IconMdi:carTurbocharger aria-hidden="true" />
            Performance Upgrades
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pre-purchase-inspections">
            <IconMdi:carInfo aria-hidden="true" />
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
</template>

<style lang="scss" scoped>
a,
.link {
  @apply flex items-center gap-4;
}

svg {
  @apply h-1.4em w-1.4em;
}
</style>
