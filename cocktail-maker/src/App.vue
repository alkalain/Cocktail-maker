<script setup>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import CocktailNavView from './views/CocktailNavView.vue'
</script>

<template>
  <header class="flex items-center">
    <div class="max-[767]:grid-rows-2 grid w-screen items-center bg-yellow-700 md:grid-cols-2">
      <div class="flex justify-start">
        <h1 class="font-['Italianno'] text-7xl text-white md:text-7xl">Cocktail Maker</h1>
      </div>

      <div class="hidden md:block">
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
