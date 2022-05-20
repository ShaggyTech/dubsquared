<template>
  <PageWrapper>
    <div
      class="flex flex-col place-items-center place-content-center w-full min-h-100vh"
    >
      <!-- intro container-->
      <section
        :class="`
          flex flex-col items-center max-w-8xl py-16 lg:py-20
          prose prose-zinc dark:prose-light prose-lg sm:prose-xl lg:prose-2xl prose-a:text-red-700
          dark:text-warm-gray-100
        `"
      >
        <!-- intro heading -->
        <h1
          class="px-6 sm:mx-[2em] font-playfair text-center tracking-wider dark:text-warm-gray-100"
        >
          Welcome to Dubsquared
        </h1>
        <!-- intro title -->
        <div
          class="flex flex-col mx-6 sm:mx-[2em] lg:mx-[4em] space-y-8 lg:space-y-12"
        >
          <div>
            Dubsquared is an established, full service Volkswagen and Audi
            repair shop located in the heart of the DFW metroplex (Arlington,
            Texas). We strive to provide complete customer satisfaction, service
            and reliability through the highest quality workmanship and through
            the most superior products possible. We offer competitive quotes and
            carry only OEM, OES or custom-built parts.
            <NuxtLink to="about" class="px-1">
              Learn more about Dubsquared's history.
            </NuxtLink>
          </div>
          <div>
            Our dedicated technicians are factory trained and have a combined
            50+ years of experience in VW/Audi maintenance and repair. They have
            the knowledge, expertise, and enthusiasm to provide the highest
            quality repair and maintenance services available in the area.
            <NuxtLink to="meet-the-team" class="px-1">Meet the Team</NuxtLink>
            who'll be responsible for your vehicle.
          </div>
          <div>
            We provide a variety of services, including Volkswagen repair,
            Volkswagen maintenance, Audi Repair, Audi Maintenance, oil changes,
            tire rotations, timing belt services, timing chain services, brake
            services, chip tuning, ECU tuning, and many more. We have the skill
            and experience necessary to serve as your full-service auto shop
            offering Audi and Volkswagen owners the highest quality services and
            customer care in the area.
            <NuxtLink to="services" class="px-1">
              Learn more about the services we offer.
            </NuxtLink>
          </div>
        </div>
      </section>
      <!-- business info container -->
      <section
        :class="`
          grid gap-y-10 lg:gap-y-16 h-full w-full max-w-8xl dark:bg-zinc-700
          px-4 sm:px-0 md:px-10 lg:px-[15vw] xl:px-[5vw] py-16 lg:py-20 text-center`"
      >
        <!-- business phone & email-->
        <!-- <AppContactBar
          :items="contactBarItems"
          :class="`
            flex flex-col sm:flex-row justify-around gap-x-10 lg:gap-x-16 gap-y-10
            h-full w-full px-8 lg:px-0 transition-colors
          `"
          :anchor-style="`
            flex-col gap-y-2 md:gap-y-4 px-6 py-4 md:py-6 lg:py-8
            text-xl lg:text-2xl tracking-wide
            shadow-sm hover:shadow-md shadow-neutral-200/90 dark:shadow-zinc-800/90
            border-2 border-neutral-100 hover:border-neutral-300/30 dark:hover:border-zinc-700/50
            dark:border-zinc-900/50 dark:hover:border-zinc-700/30
            bg-gradient-to-br from-neutral-100/30 via-neutral-200/40 to-neutral-100/90
            dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-900
            transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] duration-300 rounded
          `"
          :icon-style="
            [
              'text-2xl lg:text-3xl',
              isBusinessOpen ? 'text-green-500' : 'text-red-500',
            ].join(' ')
          "
        /> -->
        <!-- business hours and address -->
        <div
          :class="`flex flex-col xl:flex-row gap-x-10 lg:gap-x-16 gap-y-10 lg:gap-y-16 h-full w-full px-8 lg:px-0`"
        >
          <!-- business hours -->
          <div
            :class="`
              flex flex-col gap-y-[1em] items-center
              h-full w-full py-[1.6em] tracking-wide md:tracking-wider
              text-xl lg:text-3xl shadow-md shadow-neutral-200/90 rounded dark:shadow-zinc-800/90
              bg-gradient-to-br from-neutral-100/30 via-neutral-200/40 to-neutral-100/90
              dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-900
            `"
          >
            <IconIon:clock
              :class="[isBusinessOpen ? 'text-green-500' : 'text-red-500']"
              height="2.2em"
              width="2.2em"
            />
            <span class="[font-size:1.3em]">Hours</span>
            <hr class="hr w-[40%] mx-auto" />
            <div class="flex flex-col gap-y-[0.5em]">
              <span class="italic">Monday - Friday</span>
              <span class="font-teko font-semibold text-green-600">
                9am - 6pm
              </span>
            </div>
            <hr class="hr w-[40%] mx-auto" />
            <div class="flex flex-col gap-y-[0.5em]">
              <span class="italic">Saturday & Sunday</span>
              <span class="font-alatsi font-semibold text-red-500/90"
                >CLOSED</span
              >
            </div>
            <hr class="hr w-[40%] mx-auto" />
          </div>
          <!-- business address -->
          <a
            href="https://www.google.com/maps/dir//Dubsquared,+1223+Colorado+Ln,+Arlington,+TX+76015/@32.7024485,-97.1279981,17z"
            target="_blank"
            :class="`
              w-full h-full rounded no-underline not-prose
              bg-map-dark bg-no-repeat bg-cover
            `"
          >
            <address
              :class="`
                flex flex-col items-center gap-y md:gap-y-2 h-full w-full px-8 py-[max(calc(1.5em_+_5vh),_2em)]
                font-teko font-semibold text-white text-xl sm:text-2xl lg:text-4xl tracking-wider lg:tracking-widest
              bg-zinc-900/30 hover:bg-zinc-900/60 hover:backdrop-blur-[2px]
                rounded transition-colors duration-500 shadow-md shadow-gray-500 dark:shadow-zinc-800/90
              `"
            >
              <IconMdi:mapMarkerRadius
                class="text-yellow-500 mb-[1em] animate-[bounce_3s_ease-in-out_infinite]"
                height="2em"
                width="2em"
              />
              <span>1223 Colorado Ln</span>
              <span>Suite 105</span>
              <span>Arlington, TX 76015</span>
            </address>
          </a>
        </div>
      </section>

      <!-- intro container-->
      <section
        :class="`
          flex flex-col items-center max-w-8xl py-16 lg:py-20
          bg-zinc-300/20 dark:bg-zinc-800
        `"
      >
        <!-- get a quote or schedule appointment -->
        <div
          :class="`
            flex flex-col justify-center gap-6
            w-auto h-full mt-[4em] mx-8 sm:mx-[2em] px-8 sm:px-20 lg:px-32 py-[3em]
            bg-zinc-700 text-gray-100 border-4 border-yellow-500/90 shadow-lg
            not-prose rounded-md text-center
          `"
        >
          <h2
            :class="`
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              font-cabin font-semibold tracking-wide sm:tracking-wider
              border-2 px-4 py-[1em] rounded-md border-yellow-500/80
            `"
          >
            Get a Quote
            <span class="text-yellow-500/80 mx-1 md:mx-2">or</span> Schedule an
            Appointment
          </h2>
          <h3 class="px-6 md:mt-4 text-lg sm:text-xl md:text-2xl">
            We're here to help get you back on the road and dedicated to keeping
            you there.
          </h3>
          <div
            :class="`
              flex flex-col md:flex-row justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-20
              w-full h-full max-w-[100%] sm:max-w-[66%] md:max-w-[100%] xl:max-w-[80%] mx-auto mt-6 md:mt-8
              rounded-md
            `"
          >
            <Button
              size="lg"
              text="Get a Quote"
              :to="{ name: 'contact' }"
              class=""
            />
            <Button
              size="lg"
              text="Book Appointment"
              variant="secondary"
              :to="{ name: 'contact' }"
            />
          </div>
        </div>
      </section>

      <!-- brands we use -->
      <section
        :class="`
          flex flex-col justify-center gap-8 lg:gap-12 mt-[2em]
          w-full h-full py-8 not-prose dark:bg-zinc-900
        `"
      >
        <h3
          class="font-playfair font-bold text-center text-2xl md:text-3xl lg:text-4xl"
        >
          Brands We Use
          <span class="mx-1 md:mx-2 text-yellow-500/80">&</span> Endorse
        </h3>
        <Marquee :duration="40" gradient />
      </section>

      <!-- Services-->
      <section class="mt-[4em]">
        <LazyPageServiceCardGroup />
      </section>

      <!-- Authorized Dealer for -->
      <div
        class="authorized-dealer-for w-full h-full flex space-around items-center my-16"
      >
        <div
          class="authorized-logos flex flex-col lg:flex-row items-center flex-around rounded-md px-5 py-5 mb-4 gap-4 bg-gray-300 dark:bg-zinc-800 mx-auto max-h-[clamp(10em,50vh,400px)] w-[80%]"
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
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
// import MdiCellphone from '~icons/mdi/cellphone'
// import MdiEmailFast from '~icons/mdi/email-fast'
// import type { IContactBarItem } from '@/types'

definePageMeta({
  layout: 'page',
})

// const contactBarItems: IContactBarItem[] = [
//   {
//     text: '817-277-5593',
//     href: 'tel:817-277-5593',
//     ariaLabel: 'Call Dubsquared',
//     title: 'Call Dubsquared',
//     icon: MdiCellphone,
//   },
//   {
//     text: 'info@dubsquared.com',
//     href: 'mailto:info@dubsquared.com',
//     ariaLabel: 'Email Dubsquared',
//     title: 'Email Dubsquared',
//     icon: MdiEmailFast,
//   },
// ]

const isBusinessOpen = ref<boolean>(true)

onMounted(() => {
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
</script>
