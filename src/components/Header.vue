<template>
    <header>
      <h3 class="text-center my-10 text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
        {{ title }}
      </h3>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String as PropType<string>,
      default: 'Calculator',
      required: true
    }
  }
})

</script>