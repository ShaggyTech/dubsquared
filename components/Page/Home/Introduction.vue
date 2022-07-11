<script lang="ts">
export default { name: 'PageHomeIntroduction' }
</script>

<template>
  <section
    class="section-introduction grid mx-auto max-w-6xl py-20 lg:py-32 prose sm:prose-lg lg:prose-xl"
  >
    <!-- intro heading -->
    <h1
      class="text-center sm:tracking-wider dark:text-stone-100 font-kanit text-shadow-md"
    >
      Welcome to Dubsquared
    </h1>
    <!-- intro text container -->
    <div class="grid font-nunito-sans">
      <p>
        Dubsquared is an established, full service Volkswagen and Audi repair
        shop located in the heart of the DFW metroplex (Arlington, Texas). We
        strive to provide complete customer satisfaction, service and
        reliability through the highest quality workmanship and through the most
        superior products possible. We offer competitive quotes and carry only
        OEM, OES or custom-built parts.
        <NuxtLink to="about"> Learn more about Dubsquared's history. </NuxtLink>
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
        Volkswagen maintenance, Audi Repair, Audi Maintenance, oil changes, tire
        rotations, timing belt services, timing chain services, brake services,
        chip tuning, ECU tuning, and many more.
      </p>
      <p>
        We possess the skill and experience necessary to serve as your
        full-service auto shop offering Audi and Volkswagen owners the highest
        quality services and customer care in the area.
        <NuxtLink to="services">
          Learn more about the services we offer.
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-introduction {
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
