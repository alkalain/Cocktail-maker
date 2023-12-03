<script setup>
import { ref } from 'vue'
import axios from 'axios'

const searchQuery = ref('') //variable des stockage des sentré --> ne renvoie pas la bonne valeur dans le get
const queryTO = ref(null) //Timeout entre les entré et les recherches
const mapBoxResults = ref(null) //var de recuperation des reponses
var resTest = ref([]) // liste de recuperation des resulat
var rscActivated = false
const getCocktailByIngredient = () => {
  rscActivated = !rscActivated
  resTest.value = []
  const ingrdientRequest = {
    method: 'GET',

    url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
    params: { i: searchQuery.value }
  }
  clearTimeout(queryTO.value)
  queryTO.value = setTimeout(async () => {
    try {
      if (searchQuery.value !== '') {
        const response = await axios.request(ingrdientRequest)
        mapBoxResults.value = response.data
        resTest.value = mapBoxResults.value.drinks
        console.log(resTest.value)
        return
      }
      mapBoxResults.value = null
    } catch (error) {
      console.error(error)
    }
  }, 1000)
}
</script>

<template>
  <main class="h-screen pt-8">
    <div class="">
      <input
        type="text"
        placeholder="Nom d'ingrédiant"
        v-model="searchQuery"
        @input="getCocktailByIngredient"
        class="h-[60px] w-[321px] rounded-[20px] border-4 border-black bg-zinc-300 text-2xl focus:rounded-b-[0px] focus:rounded-t-[20px] focus:border-b-0 focus:border-[#1471C2] focus:shadow-[0px_1px_0_0_#004E71] focus:outline-none"
      />
    </div>
    <div class="h-[10%] list-none rounded-[20px]">
      <ul class="grid w-[321px] list-none grid-rows-6 rounded-b-[10px]">
        <li
          v-for="(drink, index) in resTest"
          :key="(index = drink.idDrink) < 10"
          class="grid grid-cols-6 border-x-4 border-y-[1px] border-black text-lg hover:border-[#1471C2]"
        >
          <div
            class="col-span-5 flex items-center border-r-2 border-r-black pl-1 hover:border-r-[#1471C2]"
          >
            {{ drink.strDrink }}
          </div>
          <div class="col-span-1">
            <img :src="drink.strDrinkThumb" :alt="drink.strDrinkThumb" class="h-14 w-14" />
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style></style>
