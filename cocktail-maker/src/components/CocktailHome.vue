<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import CocktailPresentation from './panels/CocktailPresentation.vue'

const selectedCocktail = ref('')
const apiData = ref([])

const searchQuery = ref('') //variable des stockage des sentré --> ne renvoie pas la bonne valeur dans le get
const queryTO = ref(null) //Timeout entre les entré et les recherches
const mapBoxResults = ref(null) //var de recuperation des reponses
var resTest = ref([]) // liste de recuperation des resulat

//display the cocktail
const cocktailRecepieResult = ref(null)
var selectedCocktailCategory = ref('')
var selectedCocktailInstructions = ref('')
var selectedCocktailImage = ref('')
//props var
var sCC = ''
var sCI = ''
var sCImg=''
var getCBNDef = false

var rscActivated = ref(false)
const toggleRscActivated = (boolean) => {
  rscActivated.value = boolean
}

const getCocktailByIngredient = () => {
  //rscActivated = !rscActivated
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
        console.log(response)
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
  //display the cocktail
  const getCocktailByName = () => {
    const cocktailRequest = {
      method: 'GET',
      url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      params: { s: selectedCocktail.value }
    }
    clearTimeout(queryTO.value)
    queryTO.value = setTimeout(async () => {
      try {
        if (selectedCocktail.value !== '') {
          const response = await axios.request(cocktailRequest)
          cocktailRecepieResult.value = response.data

          apiData.value = cocktailRecepieResult.value.drinks
          const firstDrink = apiData.value[0]
          selectedCocktailCategory.value = firstDrink.strCategory
          selectedCocktailInstructions.value = firstDrink.strInstructions
          selectedCocktailImage.value = firstDrink.strDrinkThumb	
          sCC = selectedCocktailCategory.value
          sCI = selectedCocktailInstructions.value
          sCImg = selectedCocktailImage.value
          return
        }
      } catch (error) {
        console.error(error)
      }
    }, 100)
  }

  watch(selectedCocktail, (newVal) => {
    getCBNDef = !getCBNDef
    getCocktailByName(newVal)
  })
}
</script>

<template>
  <main class=" h-screen pt-8 flex flex-wrap space-x-0 justify-center">
    <div
      @mouseover="toggleRscActivated(true)"
      @mouseleave="toggleRscActivated(false)"
      class="flex h-[70px] w-full justify-center focus:h-auto focus:w-auto"
    >
      <input
        type="text"
        placeholder="Nom d'ingrédiant"
        v-model="searchQuery"
        @input="getCocktailByIngredient"
        class="h-[60px] w-[321px] rounded-[20px] border-4 border-black bg-zinc-300 text-2xl hover:rounded-b-[0px] hover:rounded-t-[20px] focus:rounded-b-[0px] focus:rounded-t-[20px] focus:border-b-0 focus:border-[#1471C2] focus:shadow-[0px_1px_0_0_#004E71] focus:outline-none"
      />
      <!-- class="flex max-h-80 w-[321px] list-none grid-rows-6 flex-wrap overflow-y-scroll rounded-b-[10px]" -->
      <ul
        class="absolute top-[189px] max-h-80 w-[313px] overflow-y-scroll rounded-b-[10px] border-x-2 border-black bg-zinc-300 text-lg"
        v-show="rscActivated"
      >
        <li
          v-for="(drink, index) in resTest"
          :key="(index = drink.idDrink)"
          class="grid grid-cols-6 border-x-2 border-y-[1px] border-black text-lg hover:border-[#1471C2]"
        >
          <button
            class="col-span-5 flex items-center border-r-2 border-r-black pl-1 hover:border-r-[#1471C2]"
            @click="selectedCocktail = drink.strDrink"
          >
            {{ drink.strDrink }}
          </button>
          <div class="col-span-1">
            <img :src="drink.strDrinkThumb" :alt="drink.strDrinkThumb" class="h-14 w-14" />
          </div>
        </li>
      </ul>
    </div>
    <div class="flex h-[70%] w-[70%] justify-center border-4  border-red-700 text-lg ">
      <CocktailPresentation
        :cocktailName="selectedCocktail"
        :cocktailCathegory="sCC"
        :cocktailDescription="sCI"
        :cocktailImage="sCImg"
      />
    </div>
  </main>
</template>

<style>
.scrollbarr {
  scrollbar-width: 1px;
}
</style>
