<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CocktailNavView from './views/CocktailNavView.vue'
</script>

<template>
  <header class="flex items-center">
    <div class="grid h w-screen items-center bg-yellow-700 max-[767]:grid-rows-2 md:grid-cols-2">
      <div class="flex justify-start">
        <h1 class="font-['Italianno'] text-8xl text-white md:text-8xl">Cocktail Maker</h1>
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

<style>
.bigColl{
    visibility: collapse;
  }

@media (min-width: 798px) {
  
  .bigBlk {
    display: block;
  }
}
@media (min-width: none) {
  .smallBlk {
    display: block;
  }
}
</style>
