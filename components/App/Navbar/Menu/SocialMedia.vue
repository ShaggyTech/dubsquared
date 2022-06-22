<script lang="ts">
export default { name: 'AppNavbarMenuSocialMedia' }
</script>

<template>
  <div class="grid grid-flow-col place-items-center">
    <Anchor href="https://www.instagram.com/dubsquared.llc" title="Instagram">
      <IconCib:instagram style="color: #bb20c9" />
    </Anchor>
    <Anchor href="https://www.facebook.com/vwaudirepair/" title="Facebook">
      <IconLogos:facebook />
    </Anchor>
    <Anchor href="https://goo.gl/maps/PGKJBqnGrKajR7En7" title="Google">
      <IconLogos:googleIcon />
    </Anchor>
  </div>
</template>
