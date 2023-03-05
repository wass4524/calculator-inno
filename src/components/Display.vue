<template>
  <div class=" h-52 bg-gray-700 flex items-end text-right flex-wrap">
    <div class="w-full p-5 text-lg text-white font-bold">{{ savedOperation }}</div>
    <div class="blink-cursor w-full p-5 text-4xl text-white font-bold flex items-center justify-end gap-1"><!-- {{ lastOperation != '0' ? '&#x3D;' : '' }} -->{{ display }}</div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Display',
  props: {
    savedOperation: String as PropType<string>,
    expression: String as PropType<string>,
    display: String as PropType<string>
  }
})

</script>

<style scoped>
.blink-cursor:after {
  content: "";
  width: 2px;
  height: 30px;
  background: #34d399;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
}

</style>