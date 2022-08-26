<script setup lang="ts">
interface Props {
  show: boolean
  showError: boolean
}
const props = defineProps<Props>()

const messageVariant = computed(() => (props.showError ? 'error' : 'success'))
</script>

<script lang="ts">
export default {
  name: 'ContactFormSubmissionModal',
}
</script>

<template>
  <Modal :show="show || showError">
    <ContactFormSubmissionMessage :variant="messageVariant" />
  </Modal>
</template>
