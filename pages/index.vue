<template>
  <PageWrapper class="pt-0">
    <!-- Hero Banner -->
    <PageHomeHero
      :adjectives="heroAdjectives"
      :observer-key="heroObserverName"
    />
    <!-- CTA container-->
    <PageSectionCallToAction id="get-in-touch" class="mobile-safe-area" />
    <!-- intro container-->
    <PageSectionIntroduction id="introduction">
      <template #heading>Welcome to Dubsquared</template>
      <template #content>
        <p>
          Dubsquared is an established, full service Volkswagen and Audi repair
          shop located in the heart of the DFW metroplex (Arlington, Texas). We
          strive to provide complete customer satisfaction, service and
          reliability through the highest quality workmanship and through the
          most superior products possible. We offer competitive quotes and carry
          only OEM, OES or custom-built parts.
          <NuxtLink to="about">
            Learn more about Dubsquared's history.
          </NuxtLink>
        </p>
        <p>
          Our dedicated technicians are factory trained and have a combined 50+
          years of experience in VW & Audi repair, maintenance, and performance.
          They have the knowledge, expertise, and enthusiasm to provide the
          highest quality repair and maintenance services available in the area.
          <NuxtLink to="meet-the-team">Meet the Team</NuxtLink>
          who'll be responsible for your vehicle.
        </p>
        <p>
          We provide a variety of services, including Volkswagen repair,
          Volkswagen maintenance, Audi Repair, Audi Maintenance, oil changes,
          tire rotations, timing belt services, timing chain services, brake
          services, chip tuning, ECU tuning, and many more.
        </p>
        <p>
          We possess the skill and experience necessary to serve as your
          full-service auto shop offering Audi and Volkswagen owners the highest
          quality services and customer care in the area.
          <NuxtLink to="services">
            Learn more about the services we offer.
          </NuxtLink>
        </p>
      </template>
    </PageSectionIntroduction>
    <!-- section business hours and location -->
    <section
      id="shop-hours-and-location"
      class="grid max-w-8xl mt-10 h-full w-full text-center"
    >
      <!-- container business hours and location -->
      <div
        class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-full w-full text-white text-xl lg:text-2xl tracking-wide"
      >
        <!-- business address -->
        <div
          v-motion
          :initial="{
            opacity: 0,
          }"
          :visible="{
            opacity: 1,
            backgroundImage: `url('/images/shop-frontage-SQ5.webp')`,
            transition: {
              duration: 500,
              delay: 200,
            },
          }"
          class="grid content-center bg-no-repeat bg-cover bg-center"
        >
          <a
            v-motion
            :initial="{
              y: 20,
              opacity: 0,
            }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 500,
              },
            }"
            href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
            title="Google Maps"
            target="_blank"
            class="p-8 mx-auto bg-zinc-900/90 backdrop-filter backdrop-blur-sm rounded-3xl"
          >
            <address class="flex flex-col place-items-center">
              <IconMdi:mapMarkerRadius
                class="h-[3em] w-[3em] mb-[1em] text-yellow-500 animate-bounce animate-duration-1500"
              />
              <span
                v-motion
                :initial="{
                  y: 20,
                  opacity: 0,
                }"
                :visible="{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 500,
                    delay: 600,
                  },
                }"
                class="flex flex-col items-center tracking-wider lg:tracking-widest font-bold text-white text-shadow-xl"
              >
                <span
                  v-motion
                  :initial="{
                    x: -50,
                    opacity: 0,
                  }"
                  :visible="{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 500,
                      delay: 600,
                    },
                  }"
                  >1223 Colorado Ln</span
                >
                <span
                  v-motion
                  :initial="{
                    x: -50,
                    opacity: 0,
                  }"
                  :visible="{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 500,
                      delay: 600,
                    },
                  }"
                  >Suite 105</span
                >
                <span
                  v-motion
                  :initial="{
                    x: -50,
                    opacity: 0,
                  }"
                  :visible="{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 600,
                      delay: 600,
                    },
                  }"
                  >Arlington, TX 76015</span
                >
              </span>
            </address>
          </a>
        </div>
        <!-- business hours -->
        <div
          v-motion
          :initial="{
            y: 50,
            opacity: 0,
          }"
          :visible="{
            y: 0,
            opacity: 1,
            transition: {
              duration: 500,
              delay: 500,
            },
          }"
          class="grid gap-[1em] place-items-center h-full w-full py-[2em] bg-zinc-900"
        >
          <IconIon:clock
            :class="[
              'h-[3em] w-[3em] animate-spin animate-duration-60s',
              isBusinessOpen ? 'text-green-500' : 'text-red-500',
            ]"
          />
          <h3
            v-motion
            :initial="{
              x: 50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 500,
              },
            }"
            class="text-3xl"
          >
            Shop Hours
          </h3>
          <hr
            v-motion
            :initial="{
              x: 50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 500,
              },
            }"
            class="hr w-[40%] mx-auto"
          />
          <div
            v-motion
            :initial="{
              x: 50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 500,
              },
            }"
            class="grid gap-[0.5em]"
          >
            <span class="italic">Monday - Friday</span>
            <span class="font-semibold text-green-500"> 9am - 6pm </span>
          </div>
          <hr class="hr w-[25%] mx-auto" />
          <div
            v-motion
            :initial="{
              x: 50,
              opacity: 0,
            }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                delay: 500,
              },
            }"
            class="grid gap-[0.5em]"
          >
            <span class="italic">Saturday & Sunday</span>
            <span class="font-semibold text-red-500/90">CLOSED</span>
          </div>
        </div>
      </div>
    </section>

    <!-- brands we use -->
    <section
      id="brands-we-use"
      class="flex flex-col justify-center gap-8 lg:gap-12 w-full h-full pt-36 pb-48 bg-stone-100 dark:bg-zinc-900"
    >
      <div class="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
        Brands We Use
        <span class="mx-1 md:mx-2 text-yellow-500/80">&</span> Endorse
      </div>
      <Marquee :duration="40" gradient />
    </section>

    <!-- Services-->
    <section id="services">
      <LazyPageServiceCardGroup />
    </section>

    <!-- Authorized Dealer for -->
    <div class="w-full h-full flex space-around items-center my-16">
      <div
        :class="`
          flex flex-col lg:flex-row gap-8 items-center flex-around
           max-h-[clamp(10em,50vh,400px)] w-[80%] rounded-md px-5 py-5 mb-4 mx-auto
          bg-gray-300 dark:bg-zinc-800 rounded-md
        `"
      >
        <SVGAuthorizedAPR
          alt="Authorized APR Dealer"
          class="authorized-logs__apr w-full h-full"
          height="100px"
          width="100px"
        />
        <SVGAuthorized034
          alt="Authorized 034-Motorsport Dealer"
          class="authorized-logs__034 w-full h-full"
          height="100px"
          width="100px"
        />
        <SVGAuthorizedMotul
          alt="Authorized Motul Distributor"
          class="authorized-logs__motul w-full h-full"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

definePageMeta({
  layout: 'page',
  // required to keep intersection observer active after page navigation
  keepalive: true,
})

const heroAdjectives = ref([
  'Garage',
  'Specialists',
  'Experts',
  'Shop',
  'Connoisseurs',
  'Proffessionals',
  'Gurus',
  'Fanatics',
])

// hero section obvserver
const heroObserverName = 'hero-section.observer'
const heroObserverCallback: IntersectionObserverCallback = (
  element,
  observer
) => {
  element.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }
    setTimeout(() => {
      target.classList.add('seen')
      observer.unobserve(target)
    }, 500)
  })
}
const { observer: heroObserver, observerRef: heroObserverRef } =
  useIntersectionObserver({
    callback: heroObserverCallback,
    useStateKey: heroObserverName,
  })

const isBusinessOpen = ref<boolean>(true)

onMounted(() => {
  heroObserverRef.value = heroObserver

  const date = new Date()
  // Set business timezone
  const timezone = -6
  const timezoneOffset = (date.getTimezoneOffset() + timezone * 60) * 60 * 1000
  // set date to account for actual business timezone
  date.setTime(date.getTime() + timezoneOffset)
  const day = date.getDay()
  const hour = date.getHours()

  // open M-F 9am-6pm, closed saturday and sunday
  if (day < 1 || day > 5 || hour < 9 || hour > 18) isBusinessOpen.value = false
  else isBusinessOpen.value = true
})

onBeforeUnmount(() => {
  heroObserverRef.value.disconnect()
})
</script>

<style lang="scss" scoped>
.mobile-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(1.5rem, env(safe-area-inset-left));
    padding-right: max(1.5rem, env(safe-area-inset-right));
  }
  @screen md {
    @supports (padding: max(0px)) {
      padding-left: max(2rem, env(safe-area-inset-left));
      padding-right: max(2rem, env(safe-area-inset-right));
    }
  }
  @screen lg {
    padding-left: 5em;
    padding-right: 5em;
  }
}
</style>
