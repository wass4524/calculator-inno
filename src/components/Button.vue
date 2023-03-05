<template>
  <button class="btn-calculator">
    {{ label }}
  </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: [String, Number] as PropType<string | number>,
      required: true
    }
  }
})

</script>

<style scoped lang="postcss">
  .btn-calculator {
    @apply w-full h-16 hover:bg-emerald-700 hover:bg-opacity-10 text-white text-opacity-80 text-xl font-bold
  }

</style>