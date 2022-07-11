<script lang="ts">
export default { name: 'TestimonialCardGroup' }
</script>

<template>
  <div class="flex flex-wrap gap-x-8 gap-y-20 place-content-around mt-28">
    <TestimonialCard
      by="Reid D."
      date="July 2022"
      :num-stars="5"
      :paragraph="`
            The best place in the Metroplex for all your VW and Audi
            needs. Honest, friendly, helpful staff, excellent mechanics.
            You can trust them completely! They send status updates with
            photos to show the progress of their work. I guarantee that
            not many places do that.
          `"
    />
    <TestimonialCard
      by="Pamela C."
      date="June 2022"
      :num-stars="5"
      :paragraph="`
            Wow, great service. Very honest repair shop and reasonably
            priced. They did an inspection on a vehicle for me.
          `"
    />
    <TestimonialCard
      by="Mitchel B."
      date="June 2022"
      :num-stars="5"
      :paragraph="`
            I would recommend this place to anyone, but especially
            Vw/Audi/ European car owners. Every time I've been called or
            emailed, they respond quickly. I have even called or brought
            my car in, and they have always been honest in giving me
            advice on what could be wrong, and tips on things that I want
            to do myself. They want the best for their customers, and it
            really shows. If there is work I need done on a vehicle, this
            is the first place I call.
          `"
    />
    <TestimonialCard
      by="Darrion S."
      date="May 2022"
      :num-stars="5"
      :paragraph="`
            I have been taking my daughter's car to Dub for several years
            and and Tyler has been awesome. Very transparent and
            reasonable. Thanks felllas
          `"
    />
    <TestimonialCard
      by="Austin H."
      date="April 2022"
      :num-stars="5"
      :paragraph="`
            Bryan has been putting up with all of my dumb questions with
            honesty and professionalism. It's like having a personal
            mechanic who knows your exact car and has owned similar cars
            in the past. They've transformed my vehicle to something
            special and opened my eyes to vehicle modifications. Guys
            around town I've met also say great things about them so they
            have a positive presence in the area.
          `"
    />
    <TestimonialCard
      by="Minh N."
      date="February 2022"
      :num-stars="5"
      :paragraph="`
            Good people, I know they are busy but they are car guys, they
            understand that their customers are passionate about their
            cars. They will spend time answering addressing your concerns.
            Business building is more than just knowledge, it is also
            about listening to your customers. Seems like Dubsquared has a
            dedicated customer service department empowered with knowledge
            and empathy.
          `"
    />
  </div>
</template>
