<script setup>
import { ref } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const queryTO = ref(null)
const mapBoxResults = ref(null)
var resTest = []
const ingrdientRequest = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
  params: { i: searchQuery.value },
  headers: {
    'X-RapidAPI-Key': '5d8736a878mshc87d50db9f74807p10f351jsn92deba2aae08',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
}

const getCocktailByIngredient = () => {
  console.log(searchQuery.value)
  clearTimeout(queryTO.value)
  queryTO.value = setTimeout(async () => {
    try {
      if (searchQuery.value !== '') {
        const response = await axios.request(ingrdientRequest)
        /* const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php/${searchQuery.value}.json') */
        mapBoxResults.value = response.data
        resTest.push(mapBoxResults.value)
        console.log(resTest)
        return
      }
      mapBoxResults.value = null
    } catch (error) {
      console.error(error)
    }
  }, 3000)
}
</script>

<template>
  <main class="flex h-screen justify-center pt-8">
    <div class="">
      <input
        type="text"
        placeholder="Nom d'ingrédiant"
        v-model="searchQuery"
        @input="getCocktailByIngredient"
        class="h-[60px] w-[321px] rounded-[20px] border-4 border-black bg-zinc-300 text-2xl focus:border-[#1471C2] focus:shadow-[0px_1px_0_0_#004E71] focus:outline-none"
      />
    </div>
  </main>
</template>

<style></style>
