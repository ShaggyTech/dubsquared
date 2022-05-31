<script lang="ts">
export default { name: 'PageSectionIntroduction' }
</script>

<template>
  <section
    class="section-introduction grid mx-auto max-w-6xl py-20 lg:py-32 prose sm:prose-lg lg:prose-xl"
  >
    <!-- intro heading -->
    <h1
      class="text-center sm:tracking-wider dark:text-warm-gray-100 font-kanit text-shadow-md"
    >
      <slot name="heading" />
    </h1>
    <!-- intro text container -->
    <div class="grid font-nunito-sans">
      <slot name="content" />
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
