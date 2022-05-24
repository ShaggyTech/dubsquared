<template>
  <PageWrapper>
    <!-- intro container-->
    <section
      id="introduction"
      :class="`
          flex flex-col items-center max-w-8xl py-16 lg:py-20 mobile-safe-area
          prose prose-light dark:prose-invert prose-lg md:prose-xl lg:prose-xl prose-a:text-red-700
          text-zinc-900 dark:text-warm-gray-100
        `"
    >
      <!-- intro heading -->
      <h1 class="text-center sm:tracking-wider dark:text-warm-gray-100">
        Welcome to Dubsquared
      </h1>
      <!-- intro text container -->
      <div class="grid gap-y-8 lg:gap-y-12">
        <div>
          Dubsquared is an established, full service Volkswagen and Audi repair
          shop located in the heart of the DFW metroplex (Arlington, Texas). We
          strive to provide complete customer satisfaction, service and
          reliability through the highest quality workmanship and through the
          most superior products possible. We offer competitive quotes and carry
          only OEM, OES or custom-built parts.
          <NuxtLink to="about" class="intro-link">
            Learn more about Dubsquared's history.
          </NuxtLink>
        </div>
        <div>
          Our dedicated technicians are factory trained and have a combined 50+
          years of experience in VW/Audi maintenance and repair. They have the
          knowledge, expertise, and enthusiasm to provide the highest quality
          repair and maintenance services available in the area.
          <NuxtLink to="meet-the-team" class="intro-link"
            >Meet the Team</NuxtLink
          >
          who'll be responsible for your vehicle.
        </div>
        <div>
          We provide a variety of services, including Volkswagen repair,
          Volkswagen maintenance, Audi Repair, Audi Maintenance, oil changes,
          tire rotations, timing belt services, timing chain services, brake
          services, chip tuning, ECU tuning, and many more.
        </div>
        <div>
          We have the skill and experience necessary to serve as your
          full-service auto shop offering Audi and Volkswagen owners the highest
          quality services and customer care in the area.
          <NuxtLink to="services" class="intro-link">
            Learn more about the services we offer.
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- section business hours and location -->
    <section
      id="shop-hours-and-location"
      class="grid max-w-8xl mt-10 h-full w-full text-center"
    >
      <!-- container business hours and location -->
      <div
        class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-full w-full text-white text-xl lg:text-2xl tracking-wide"
      >
        <!-- business hours -->
        <div
          class="grid gap-[1em] place-items-center h-full w-full py-[2em] bg-zinc-900"
        >
          <IconIon:clock
            :class="[
              'h-[3em] w-[3em] animate-spin animate-duration-60s',
              isBusinessOpen ? 'text-green-500' : 'text-red-500',
            ]"
          />
          <h3 class="text-3xl">Shop Hours</h3>
          <hr class="hr w-[40%] mx-auto" />
          <div class="grid gap-[0.5em]">
            <span class="italic">Monday - Friday</span>
            <span class="font-semibold text-green-500"> 9am - 6pm </span>
          </div>
          <hr class="hr w-[25%] mx-auto" />
          <div class="grid gap-[0.5em]">
            <span class="italic">Saturday & Sunday</span>
            <span class="font-semibold text-red-500/90">CLOSED</span>
          </div>
        </div>
        <!-- business address -->
        <div
          class="grid content-center w-full h-full bg-map-dark bg-no-repeat bg-cover"
        >
          <a
            href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
            title="Google Maps"
            target="_blank"
            class="w-full h-full py-[8em] bg-zinc-900/50 hover:bg-zinc-900/80 hover:backdrop-blur-xl transition-colors duration-500"
          >
            <address
              class="flex flex-col items-center h-full w-full tracking-wider lg:tracking-widest font-bold"
            >
              <IconMdi:mapMarkerRadius
                class="h-[3em] w-[3em] mb-[1em] text-yellow-500 animate-bounce animate-duration-1500"
              />
              <span>1223 Colorado Ln</span>
              <span>Suite 105</span>
              <span>Arlington, TX 76015</span>
            </address>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA container-->
    <section
      id="get-in-touch"
      :class="`
        flex flex-col items-center max-w-8xl mobile-safe-area py-24
        bg-warm-gray-400 dark:bg-warm-gray-800 transition-colors duration-300
      `"
    >
      <!-- CTA: get a quote or schedule appointment -->
      <div
        :class="`
          grid justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16
          w-auto h-full px-[1.5em] sm:px-[3em] py-[4em]
          bg-warm-gray-700 text-gray-100 text-center
          rounded-md shadow-lg border-3 border-yellow-500/90
        `"
      >
        <h2
          :class="`
            text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide
             px-4 lg:px-6 py-[1em] shadow-xl rounded-md border-2 border-yellow-500/80
          `"
        >
          Get a Quote
          <span class="text-yellow-500/80 mx-1 md:mx-2">or</span> Schedule an
          Appointment
        </h2>
        <h3 class="px-6 text-lg sm:text-xl md:text-2xl">
          We're here to help get you back on the road and dedicated to keeping
          you there.
        </h3>
        <div
          :class="`
            grid place-self-center grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 sm:gap-12
            w-full max-w-10/12 sm:max-w-max md:max-w-3/4 transition-colors duration-300
          `"
        >
          <Button
            size="none"
            text="Get a Quote"
            :to="{ name: 'contact' }"
            title="Get a Quote"
            class="h-10 sm:h-11 md:h-12 px-4 shadow-sm hover:shadow-md whitespace-pre-wrap leading-4 sm:leading-normal"
          />
          <Button
            size="none"
            text="Book Appointment"
            variant="secondary"
            :to="{ name: 'contact' }"
            title="Book Appointment"
            class="h-10 sm:h-11 md:h-12 px-4 shadow-sm hover:shadow-md whitespace-pre-wrap leading-4 sm:leading-normal"
          />
        </div>
      </div>
    </section>

    <!-- brands we use -->
    <section
      id="brands-we-use"
      class="flex flex-col justify-center gap-8 lg:gap-12 w-full h-full pt-36 pb-48 bg-warm-gray-100 dark:bg-zinc-900"
    >
      <div class="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
        Brands We Use
        <span class="mx-1 md:mx-2 text-yellow-500/80">&</span> Endorse
      </div>
      <Marquee :duration="40" gradient />
    </section>

    <!-- Services-->
    <section id="services">
      <LazyPageServiceCardGroup :observer-key="cardObserverName" />
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

const cardObserverName = 'service-card.observer'

const observerCallback: IntersectionObserverCallback = (cards, observer) => {
  cards.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }
    target.classList.add('seen')
    observer.unobserve(target)
  })
}

const { observer: cardObserver, observerRef: cardObserverRef } =
  useIntersectionObserver({
    callback: observerCallback,
    options: { rootMargin: '250px' },
    useStateKey: cardObserverName,
  })

const isBusinessOpen = ref<boolean>(true)

onMounted(() => {
  cardObserverRef.value = cardObserver

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

onBeforeUnmount(() => cardObserverRef.value.disconnect())
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
.intro-link {
  @apply pl-1 text-red-900 dark:text-yellow-400;
}
</style>
