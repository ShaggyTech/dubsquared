<script setup lang="ts">
import type { IImageProps } from '~/types'

definePageMeta({
  layout: 'page',
  title: 'About Us',
  description:
    'Dubsquared is one of the oldest independent Volkswagen and Audi shops in the DFW area, circa 2007.  Read our origin story to see where it all began.',
})

const heroObserverName = ref('page-about-hero-section-observer')
const heroBackgroundImage: IImageProps = {
  alt: 'Volkswagen R32 parked between two school buses',
  src: '/images/r32-bus-yard-1920x1280.webp',
  cloudinaryId: 'xboxyw',
}
</script>

<script lang="ts">
export default { name: 'PagesAbout' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageHero
        title="About Us"
        :observer-key="heroObserverName"
        :background-image="heroBackgroundImage"
      />
    </PageHeader>
    <PageBody>
      <PageSection
        :class="`
          section-about grid place-items-center max-w-8xl mx-auto py-20
          prose prose-lg bg-zinc-300 lg:(py-24 prose-xl) dark:bg-zinc-900
        `"
      >
        <p class="w-full max-w-4xl">
          Dubsquared is one of the oldest independent Volkswagen and Audi shops
          in the DFW area.
        </p>
        <p class="max-w-4xl">
          Dubsquared offers full repair, performance, and maintenance services
          on all 2004 and newer Volkswagen and Audi vehicles. We employ factory
          trained technicians with decades of combined experience ready to take
          on any job. We work exclusively on Volkswagen and Audi vehicles and
          that has allowed us to build extensive knowledge over the years
          specific to these models.
        </p>
        <div class="flex flex-col items-center text-center mt-10 font-bold">
          <Anchor to="/meet-the-team" class="!font-bold">Meet the Team</Anchor>
          to learn more about our current crew!
        </div>
      </PageSection>
      <LazyPageSection
        id="our-story"
        :class="`
          section-about grid place-items-center max-w-6xl mx-auto py-20
          prose prose-lg bg-zinc-200/20 lg:(py-32 prose-xl) dark:bg-zinc-800
        `"
      >
        <h2
          class="font-lora !text-2.2em tracking-wide underline underline-red-800 underline-offset-14"
        >
          Our Story
        </h2>
        <p class="w-full !mt-14">
          To learn more about our humble beginnings let's go all the way back to
          the mid-2000s...
        </p>
        <p>
          Around 2005, two friends and fellow Volkswagen enthusiasts, Billy
          Tylaska and Jeff Key, pooled their resources in order to aquire a
          space to work on their individual project cars. The first shop space
          was a respectable single bay unit that allowed the guys to do what
          they did best. They made cool VWs go fast, making more power than many
          thought possible at the time. Neither man was a stranger when it came
          to tinkering and experimentation with fast Volkswagens and having a
          dedicated shop to work out of meant endless possibilities existed.
        </p>
        <p>
          Billy was constantly chasing the horsepower dragon, pushing into the
          unknown and uncharted. Known as '1.BillyT' in early online forums such
          as VWVortex and VdubAddiction, fellow enthusiasts followed his journey
          to an eventual 420whp and 10 second quarter mile.
        </p>
        <p>
          Billy's canvas of choice was a MKIV VW Golf 1.8T weighing in at 4
          doors and 4 cylinders, all on a 5-Speed Manual FWD platform. It was
          one of the quickest water cooled cars of it's time, known for breaking
          record after record in it's class.
        </p>
        <CloudinaryImage
          :image="{
            path: '/images/BillyT-vr6-gti.webp',
            id: 'cnze4u',
          }"
          height="720"
          width="1280"
          alt="BillyT VR6 GTI"
          observer-key="about-page-image-BillyT-vr6-gti"
          lazy="true"
          class="w-full h-auto max-w-3xl"
        />
        <p>
          Jeff was more than familar with Volkswagens, already having been a
          Master Certified Volkswagen technician with Autobahn Volkswagen for
          many years prior. This factory training and dealership experience
          meant he could bring his tools, contacts, and mechanical skills to the
          partnernship.
        </p>
        <p class="w-full">
          In April 2005, disaster struck for Billy's Golf. He stated online:
        </p>
        <blockquote
          :class="`
            relative max-w-3xl py-10 !px-10 text-xl italic !text-neutral-700
            bg-stone-100 border-l-4 !border-yellow-500/40
            dark:(bg-zinc-900/50 !text-stone-300)
          `"
        >
          <p class="mb-4 font-nunito-sans">
            Happened at 35psi, second gear, just as peak boost hit. Either the
            rod let go, or the rod bolts let go. I had been driving the car all
            week at 23-24 psi, even seeing 30 a couple of times, and it was
            fine, pulled hard... but as soon as she saw 35psi again... boom!
          </p>
          <cite class="flex place-content-end">
            <div class="flex flex-col items-start">
              <span class="mb-1 italic text-base">- 1.BillyT </span>
              <a
                href="https://www.vwvortex.com/threads/motor-is-done.1929307/#post-20148769"
                target="_blank"
                name="VWVortex.com forum thread"
                class="text-base"
              >
                via VWVortex forums
              </a>
            </div>
          </cite>
        </blockquote>
        <p>
          Billy parted out the 1.8T and soon found a new project in a MKII GTI
          body he aquired. It just so happened that Jeff had in his possession a
          built VR6 engine coupled with a massive turbo, that looked like it
          'might' fit in the MK2. They each had a compliment of components to
          make some serious power, one a drivetrain in good condition, the other
          a useable body and bones. Skills were combined, ideas were
          brainstormed, limits were pushed, naysayers were ignored, and thus was
          born the Dubsquared MK2. A turbocharged VR6 was shoehorned into an
          early 90s GTI making 700hp+ at the wheels. This combo was effective
          enough for a respectable 10.39s 1/4 mile at Texas Motorplex.
        </p>
        <LazyIframe
          src="https://www.youtube.com/embed/TutHds80xu0"
          height="400"
          width="600"
          name="Youtube - Billy T. Turbo VR6 1/4 Mile Drag Race"
          title="Youtube - Billy T. Turbo VR6 1/4 Mile Drag Race"
          :lazy="true"
          observer-key="page-about-video-Billy_T_Turbo_VR6_Drag_Race"
          class="w-full max-w-3xl max-h-lg my-10 p-2"
        />
        <p>
          As the MK2 continued to generate buzz and interest at the track,
          friends and other enthusiasts begain asking the guys for help with
          their own VW and Audi projects. Jeff and Billy quickly realized their
          hobby was becoming a full fledged business and no longer just a place
          for tinkering with their own toys. Recognizing that there was a gap in
          the DFW market for an honest and reliable independent VW/Audi shop,
          the guys slowly began to take on more customer work. Originally the
          shop was only open on weekends and advertising was done soley via word
          of mouth.
        </p>
        <p>
          Life circumstances forced Jeff and Billy to part ways around 2008 and
          this brought some big changes to Dubsquared. Philip Wight, a co-worker
          to Jeff and fellow technician at Autobahn Volkswagen, saw something
          special in what the guys had already established with Dubsquared and
          decided to buy the shop. With Philip as the new full time owner, more
          time could be dedicated to growing the shop beyond just hobbies and
          friends. The shop was opened for regular business weekday hours and
          eventually more technicians were hired as the shop's growth exploded.
        </p>
        <p>
          In 2009 Dubsquared was involved in the building of a VR6 MK3 GTI owned
          by Jeremy that would work it's way into the record books. They still
          planned on going in a straight line, however, the goal of this build
          was very different from previous projects that came through the shop.
          Jeremy was going to the Texas Mile and he really wanted to break some
          speed records. Dubsquared provided fabrication for the GTI and also
          installed a Motec engine management system for the VR6, with tuning
          performed by Tony Palo at T1 Racing. This combination was good for an
          eventual 205mph in the standing mile, a record breaking run that still
          stands to this day.
        </p>
        <LazyIframe
          src="https://www.youtube.com/embed/oYEiEL-keZg"
          height="400"
          width="600"
          name="Youtube - Jeremy's MK3 GTI Texas Mile 205mph"
          title="Youtube - Jeremy's MK3 GTI Texas Mile 205mph"
          :lazy="true"
          observer-key="page-about-video-Jeremys_MK3_GTI_Texas_Mile_205mph"
          class="w-full max-w-3xl max-h-lg my-10 p-2"
        />
        <p>
          By the year 2010 the shop was running out of space in it's small
          facility on Colorado Lane. An opportunity for growth was siezed upon
          when a bigger space opened up just across the street. With 7 bays and
          a small dedicated fabrication area, the shop pushed into new areas and
          quickly became the go to performance shop in the DFW area. It was
          around this time that Tyler Stookesberry joined the team. Tyler's
          previous experience as an Automotive Electrical Specialist helped
          bring new talent to the team. He quickly became an important core team
          member with his contributions and dedication shaping the direction of
          the shop for the next decade. Over the years he has become a skilled
          fabricator adept at solving any problem that comes his way.
        </p>
        <p>
          Another important addition was made to the team in 2016 when Brandon
          Eichler was hired on. What he brought with him was 13 years of
          dealership experience, first as a Volkswagen Master Technician and
          then an Audi Technician.
        </p>
        <div class="flex flex-col items-center text-center py-4 font-bold">
          <Anchor to="/contact" class="!font-bold">Contact Us</Anchor>
          <span>to schedule service, get a quote, or just ask a question!</span>
        </div>
      </LazyPageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
.section-about {
  @supports (padding: max(0px)) {
    padding-left: max(1.5rem, env(safe-area-inset-left));
    padding-right: max(1.5rem, env(safe-area-inset-right));
  }
  @screen md {
    @supports (padding: max(0px)) {
      padding-left: max(2.5rem, env(safe-area-inset-left));
      padding-right: max(2.5rem, env(safe-area-inset-right));
    }
  }
  @screen lg {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}
</style>
