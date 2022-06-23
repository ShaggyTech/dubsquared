<template>
  <section
    :class="`
      grid justify-center gap-14 py-14 bg-stone-200 text-center shadow-md transition duration-300
      sm:(gap-12 px-4) md:(gap-16 py-18) lg:(gap-20 py-20) dark:(bg-stone-800 text-gray-100)
    `"
  >
    <h2
      v-motion
      :initial="{
        opacity: 0,
        y: 50,
      }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
          delay: 300,
        },
      }"
      class="max-w-6xl px-6 text-lg font-semibold sm:text-2xl lg:px-16"
    >
      We're here to help get you back on the road and dedicated to keeping you
      there.
    </h2>
    <div
      :class="`
        grid place-self-center grid-rows-2 gap-6
        w-full max-w-8/12 transition-colors duration-300
        sm:(max-w-6/12) md:(grid-rows-1 grid-cols-2 gap-14 max-w-8/12)
      `"
    >
      <Button
        v-motion
        :initial="{
          opacity: 0,
          y: 50,
        }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 300,
          },
        }"
        size="none"
        text="Get a Quote"
        :to="{ name: 'contact' }"
        title="Get a Quote"
        class="h-10 sm:h-11 md:h-12 px-4 shadow-sm hover:shadow-md whitespace-pre-wrap leading-4 sm:leading-normal"
      />
      <Button
        v-motion
        :initial="{
          opacity: 0,
          y: 50,
        }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 300,
          },
        }"
        size="none"
        text="Book Appointment"
        variant="secondary"
        :to="{ name: 'contact' }"
        title="Book Appointment"
        class="h-10 sm:h-11 md:h-12 px-4 shadow-sm hover:shadow-md whitespace-pre-wrap leading-4 sm:leading-normal"
      />
    </div>
  </section>
</template>
