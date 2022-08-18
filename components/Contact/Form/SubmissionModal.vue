<script setup lang="ts">
interface Props {
  show: boolean
}
defineProps<Props>()
</script>

<script lang="ts">
export default {
  name: 'ContactFormSubmissionModal',
}
</script>

<template>
  <Modal :show="show">
    <ContactFormSubmissionMessage />
  </Modal>
</template>
