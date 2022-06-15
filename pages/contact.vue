<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="'Get in Touch'" class="capitalize text-center" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageContactCardAddress />
        <PageContactCardHours />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>
