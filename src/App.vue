
<template>
  <!-- <Header :title="title"/> -->
  <main class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="max-w-xs w-full mx-auto rounded-xl relative overflow-hidden bg-white shadow-xl text-gray-800">
      <Display :savedOperation="savedOperation" :display="display" />
      <div class="w-full bg-gradient-to-b from-emerald-500 to-emerald-600">
        <div class="flex w-full">
          <div class="w-2/4 btn-container">
            <Button label="AC" @click="toClear()"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="DEL" @click="toDelete()"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="÷" @click="toAdd('/')"/>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-1/4 btn-container">
            <Button label="7" @click="toAdd(7)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="8" @click="toAdd(8)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="9" @click="toAdd(9)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="x" @click="toAdd('*')"/>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-1/4 btn-container">
            <Button label="4" @click="toAdd(4)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="5" @click="toAdd(5)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="6" @click="toAdd(6)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="-" @click="toAdd('-')"/>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-1/4 btn-container">
            <Button label="1" @click="toAdd(1)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="2" @click="toAdd(2)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="3" @click="toAdd(3)"/>
          </div>
          <div class="w-1/4 btn-container">
            <Button label="+" @click="toAdd('+')"/>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-1/4 border-r border-emerald-400">
            <Button label="0" @click="toAdd(0)"/>
          </div>
          <div class="w-1/4 border-r border-emerald-400">
            <Button label="." @click="toAdd('.')"/>
          </div>
          <div class="w-2/4 border-r border-emerald-400">
            <Button label="=" @click="toCalculate()"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { storeToRefs } from "pinia";
import { useCalculatorStore } from "./stores/calculator";
import Header from './components/Header.vue'
import Button from './components/Button.vue'
import Display from './components/Display.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Button,
    Display
  },
  setup() {
    const title = 'INNOCV Calculator'
    const store: ReturnType<typeof useCalculatorStore> = useCalculatorStore();
    const { savedOperation, display } = storeToRefs(store);
    const { toCalculate, toAdd, toClear, toDelete } = store;

    return {
      title,
      savedOperation,
      display,
      toClear,
      toDelete,
      toAdd,
      toCalculate
    }
  },
})
</script>


<style scoped lang="postcss">
.btn-container {
  @apply border-r border-b border-emerald-400
}
</style>

