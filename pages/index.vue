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
      <section
        class="flex flex-col items-center justify-center mt-[4em] bg-gray-100 dark:bg-zinc-900"
      >
        <!-- Oil Changes -->
        <LazyPageServiceCard
          class="bg-service-card-oil-changes"
          heading-style="bg-zinc-900/80 border-8 border-red-700/60"
          paragraph-style="bg-red-900"
          button-to="services"
        >
          <template #heading-icon><IconMdi:oilLevel /></template>
          <template #heading-text>Oil Changes</template>
          <template #paragraph>
            <div>
              Keeping the engine in your car well-lubricated with clean oil is
              vital to its performance and longevity. Dubsquared offers quick
              and easy oil changes using only the highest quality oil from
              <a
                href="https://www.motul.com/us/en-us"
                text="MOTUL"
                target="_blank"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
                >MOTUL</a
              >.
            </div>
            <div>
              At each oil change we top-off all regular fluids and take a quick
              glance under the hood to check for any additional preventative
              maintenance services you might need. Our goal is to keep your car
              at optimal performance for years to come.
            </div>
          </template>
        </LazyPageServiceCard>
        <!-- Maintenance / Tune-ups -->
        <LazyPageServiceCard
          class="bg-service-card-maintenance text-zinc-900"
          heading-style="bg-zinc-900/80 text-neutral-100 border-8 border-neutral-200/90"
          paragraph-style="bg-neutral-200"
          button-to="services"
        >
          <template #heading-icon><IconMdi:carClock /></template>
          <template #heading-text>Factory Maintenance</template>
          <template #paragraph>
            <div>
              Dubsquared provides comprehensive automotive maintenance and
              tune-ups to keep your Volkswagen or Audi running smoothly and
              efficiently and increase longevity. Typical maintenance items
              include engine air filter, cabin/pollen filter, spark plugs, fuel
              filter, DSG service, differential service, brake fluid flush, and
              more.
            </div>
            <div>
              Each vehicle has specific maintenance needs according to
              manufacturer guidelines. We're here to help keep your vehicle up
              to date with these factory recommended maintenance intervals. Not
              sure what the intervals are for your vehicle?
              <NuxtLink
                to="contact"
                class="px-1 font-bold text-red-700 dark:text-red-700 tracking-wider underline underline-offset-2"
              >
                Get in touch
              </NuxtLink>
              and we'll happily assist.
            </div>
          </template>
        </LazyPageServiceCard>
        <!-- Diagnostics -->
        <LazyPageServiceCard
          class="bg-service-card-diagnostic"
          heading-style="bg-zinc-900/80 border-8 border-slate-600/90"
          paragraph-style="bg-slate-900"
          button-to="services"
        >
          <template #heading-icon><IconMdi:engineOffOutline /></template>
          <template #heading-text>Diagnostics</template>
          <template #paragraph>
            <div>
              Dubsquared offers state-of-the-art diagnostics services to get to
              the root of the problem so we can perform your VW or Audi repair
              quickly, efficiently, and right the first time. With over 50 years
              of combined experience, our management and professional
              technicians are well qualified to diagnose and solve any problem
              you might have. If you're looking to dive in on your own, we use
              and can recommend the
              <a
                href="https://www.ross-tech.com/vag-com/"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
              >
                VCDS Scan Tool and Software
              </a>
              by Ross-Tech for all Volkswagen and Audi diagnostic needs.
            </div>
            <div>
              Our current diagnostic fee is
              <span class="font-teko font-bold text-green-400">$130/hr</span>
              with a minimum of
              <span class="font-teko font-bold">1</span> hour required. If
              repairs based on the diagnosis are authorized and performed within
              30 days, then the diagnostic fee will be credited towards the
              price of recommended repairs.
              <NuxtLink
                to="meet-the-team"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
              >
                Meet the team
              </NuxtLink>
              to learn more about our credentials.
            </div>
          </template>
        </LazyPageServiceCard>
        <!-- Performance Upgrades -->
        <LazyPageServiceCard
          class="bg-service-card-performance-upgrades"
          heading-style="bg-neutral-200/80 text-zinc-800 border-8 border-zinc-900/90 mx-8"
          paragraph-style="bg-zinc-900"
          button-to="services"
        >
          <template #heading-icon
            ><IconMdi:carTurbocharger class="text-red-500"
          /></template>
          <template #heading-text>Performance Upgrades</template>
          <template #paragraph>
            <div>
              Dubsquared carries a wide variety of VW and Audi performance parts
              from industry-leading brands. We have the skill and experience
              necessary to assist you in finding the right part you need at the
              right price. We're an authorized dealer for
              <a
                href="https://www.goapr.com/"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
              >
                APR
              </a>
              and
              <a
                href="https://store.034motorsport.com/"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
              >
                034 Motorsport
              </a>
              . We offer their hardware and ECU / TCU flashes to unlock hidden
              performance in your vehicle. We also offer installation of
              lowering springs, coilovers, upgraded turbos, and many other
              performance hardware.
            </div>
            <div>
              We're staffed by lifelong VW and Audi enthusiasts who are
              passionate about performance, quality parts, and attention to
              detail. Customer satisfaction is our top priority and we will work
              hard to get you exactly what you want.
              <NuxtLink
                to="contact"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
              >
                Get in touch
              </NuxtLink>
              and we'll help you unlock some hidden fun in your vehicle.
            </div>
          </template>
        </LazyPageServiceCard>
        <!-- Pre-purchase Inspections-->
        <LazyPageServiceCard
          class="bg-service-card-diagnostic"
          heading-style="bg-zinc-900/80 border-8 border-red-700/60"
          paragraph-style="bg-red-900"
          button-to="services"
        >
          <template #heading-icon><IconMdi:carInfo /></template>
          <template #heading-text>Pre-purchase Inspections</template>
          <template #paragraph>
            <div>
              Considering purchasing a used Volkswagen or Audi? We recommend a
              full inspection be performed by a party independent of the seller
              before any used vehicle purchase. We offer pre-purchase
              inspections that provide you with a full and unbiased overview of
              the vehicle's condition + any needed repairs. Dubsquared offers
              this service for a flat fee of
              <span class="font-teko font-bold text-green-400">$130</span>.
            </div>
            <div>
              You'll receive a full report with pictures, notes on what was
              found, and a full vehicle fault scan. Clients typically use this
              report as leverage in purchase negotiations or to plan for future
              repairs. You'll need to bring the vehicle to our shop but most
              reputable used car dealers and individual sellers will allow third
              party inspections before purchase.
              <NuxtLink
                to="contact"
                class="px-1 font-bold text-gray-200 hover:text-white tracking-wider underline underline-offset-2"
              >
                Schedule a pre-purchase inspection
              </NuxtLink>
              with Dubsquared so you don't get stuck with a 🍋.
            </div>
          </template>
        </LazyPageServiceCard>
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
