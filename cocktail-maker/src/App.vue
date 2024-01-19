<script setup>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import CocktailNavView from './views/CocktailNavView.vue'
import { ref } from 'vue'

const navDisplay = ref(true)
const toggleNavDisplay = () => {
  navDisplay.value = !navDisplay.value
  console.log(navDisplay.value)
}
</script>

<template>
  <header class="flex items-center">
    <div
      class="flex flex-col max-[767]:grid-rows-2 md:grid w-screen items-center bg-yellow-700 md:grid-cols-2"
    >
      <div class="flex justify-start">
        <h1 class="font-['Italianno'] text-6xl text-white md:text-7xl">Cocktail Maker</h1>
      </div>
      <div class="block md:hidden">
        <button @click="toggleNavDisplay()" class="border-2 rounded-xl p-[4px] text-zinc-100">
          menu
        </button>
      </div>
      <div
        :class="{ hidden: navDisplay, block: hasError }"
        class="overscroll-auto absolute top-[95px] w-full bg-yellow-700 bg-opacity-90 px-2 md:static md:w-auto md:bg-transparent md:px-0 md:block"
      >
        <CocktailNavView />
      </div>
      <div class="smallBlk bigColl">
        <i class="fa-solid fa-bars fa-sm" style="color: #ffffff"></i>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
