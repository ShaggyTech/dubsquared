<template>
  <svg
    title="volkswagen logo"
    role="img"
    :viewBox="viewbox"
    :height="height"
    :width="width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Volkswagen Icon</title>
    <g
      id="logo-volkswagen"
      transform="matrix(.12481 0 0 .12481 -2.0292 -2.0292)"
      clip-rule="evenodd"
      fill-rule="evenodd"
    >
      <path
        id="background"
        d="m96.411 16.258c44.115 0 80.087 35.974 80.087 80.153 0 44.048-35.973 80.088-80.087 80.088s-80.153-36.04-80.153-80.088c-1e-3 -44.18 36.039-80.153 80.153-80.153z"
        :fill="fillBackground"
        class="fill-blue-900"
      />
      <path
        id="foreground"
        d="m96.411 26.433c38.468 0 69.914 31.444 69.914 69.979 0 38.469-31.445 69.847-69.914 69.847s-69.912-31.379-69.912-69.848c0-38.534 31.443-69.978 69.912-69.978zm-46.806 32.363 25.077 65.055 9.19-23.764h24.092l9.189 23.764 25.34-65.843a60.408 60.408 0 0 0-15.887-13.522l-17.592 48.446h-24.815l-17.657-48.644c-6.499 3.742-12.21 8.666-16.937 14.508zm103 16.346-28.557 74.508c19.17-10.044 32.363-30.131 32.363-53.238 0-7.484-1.312-14.64-3.806-21.27zm-41.03 79.365-0.195-1.51-15.494-40.175-15.492 40.175-0.065 1.248c5.12 1.443 10.503 2.166 16.083 2.166 5.251 0 10.306-0.656 15.163-1.904zm-43.982-5.514-27.833-72.538c-2.232 6.236-3.414 12.932-3.414 19.956 0 22.582 12.604 42.406 31.247 52.582zm28.819-112.65c5.251 0 10.437 0.657 15.361 1.969l-15.164 41.948-15.23-42.013a59.721 59.721 0 0 1 15.033-1.904z"
        :fill="fillForeground"
        class="fill-stone-300"
      />
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'SVGLogoVolkswagen',
}
</script>

<script setup lang="ts">
type ViewBoxString = `${number} ${number} ${number} ${number}`

interface Props {
  height?: string
  width?: string
  fillBackground?: string
  fillForeground?: string
  viewbox?: ViewBoxString
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  height: '20px',
  width: '20px',
  fillBackground: '#295ca7',
  fillForeground: '#ffffff',
  viewbox: '0 0 20 20',
})
</script>
