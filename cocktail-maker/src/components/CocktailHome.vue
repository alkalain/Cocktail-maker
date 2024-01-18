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
//ingridents
var ingredient1 = ref('')
var ingredient2 = ref('')
var ingredient3 = ref('')
var ingredient4 = ref('')
var ingredient5 = ref('')
var ingredient6 = ref('')
var ingredient7 = ref('')
var ingredient8 = ref('')
var ingredient9 = ref('')
var ingredient10 = ref('')
var ingredient11 = ref('')
var ingredient12 = ref('')
var ingredient13 = ref('')
var ingredient14 = ref('')
var ingredient15 = ref('')
//mesures
var mesures1 = ref('')
var mesures2 = ref('')
var mesures3 = ref('')
var mesures4 = ref('')
var mesures5 = ref('')
var mesures6 = ref('')
var mesures7 = ref('')
var mesures8 = ref('')
var mesures9 = ref('')
var mesures10 = ref('')
var mesures11 = ref('')
var mesures12 = ref('')
var mesures13 = ref('')
var mesures14 = ref('')
var mesures15 = ref('')

//var selectedCocktailIngridients = ref([15])
//props var
var sCC = ''
var sCI = ''
var sCImg = ''
var getCBNDef = false
var sCIs = []
var sCMs = []

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
        //console.log(response)
        mapBoxResults.value = response.data
        resTest.value = mapBoxResults.value.drinks
        //console.log(resTest.value)
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
          /* i don't now how to make the atribution of ingridients by a loop that change the number of ingridient
          so this is a temporarry solution

           */
          /* ingridient attribution */
          //
          ingredient1.value = firstDrink.strIngredient1
          ingredient2.value = firstDrink.strIngredient2
          ingredient3.value = firstDrink.strIngredient3
          ingredient4.value = firstDrink.strIngredient4
          ingredient5.value = firstDrink.strIngredient5
          ingredient6.value = firstDrink.strIngredient6
          ingredient7.value = firstDrink.strIngredient7
          ingredient8.value = firstDrink.strIngredient8
          ingredient9.value = firstDrink.strIngredient9
          ingredient10.value = firstDrink.strIngredient10
          ingredient11.value = firstDrink.strIngredient11
          ingredient12.value = firstDrink.strIngredient12
          ingredient13.value = firstDrink.strIngredient13
          ingredient14.value = firstDrink.strIngredient14
          ingredient15.value = firstDrink.strIngredient15

          mesures1.value = firstDrink.strMeasure1
          mesures2.value = firstDrink.strMeasure2
          mesures3.value = firstDrink.strMeasure3
          mesures4.value = firstDrink.strMeasure4
          mesures5.value = firstDrink.strMeasure5
          mesures6.value = firstDrink.strMeasure6
          mesures7.value = firstDrink.strMeasure7
          mesures8.value = firstDrink.strMeasure8
          mesures9.value = firstDrink.strMeasure9
          mesures10.value = firstDrink.strMaesure10
          mesures11.value = firstDrink.strMeasure11
          mesures12.value = firstDrink.strMeasure12
          mesures13.value = firstDrink.strMeasure13
          mesures14.value = firstDrink.strMeasure14
          mesures15.value = firstDrink.strMeasure15

          sCIs = []
          sCIs.push(ingredient1.value)
          sCIs.push(ingredient2.value)
          sCIs.push(ingredient3.value)
          sCIs.push(ingredient4.value)
          sCIs.push(ingredient5.value)
          sCIs.push(ingredient6.value)
          sCIs.push(ingredient7.value)
          sCIs.push(ingredient8.value)
          sCIs.push(ingredient9.value)
          sCIs.push(ingredient10.value)
          sCIs.push(ingredient11.value)
          sCIs.push(ingredient12.value)
          sCIs.push(ingredient13.value)
          sCIs.push(ingredient14.value)
          sCIs.push(ingredient15.value)

          sCMs = []
          sCMs.push(mesures1.value)
          sCMs.push(mesures2.value)
          sCMs.push(mesures3.value)
          sCMs.push(mesures4.value)
          sCMs.push(mesures5.value)
          sCMs.push(mesures6.value)
          sCMs.push(mesures7.value)
          sCMs.push(mesures8.value)
          sCMs.push(mesures9.value)
          sCMs.push(mesures10.value)
          sCMs.push(mesures11.value)
          sCMs.push(mesures12.value)
          sCMs.push(mesures13.value)
          sCMs.push(mesures14.value)
          sCMs.push(mesures15.value)

          var transfer = []
          sCIs.forEach((element) => {
            if (element !== null) {
              transfer.push(element)
            }
          })
          sCIs = transfer

          var transfer2 = []
          sCMs.forEach((element) => {
            if (element === null) {
              element = 0
              transfer2.push(element)
            }
          })
          sCMs = transfer2
          //
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
  <main class="flex flex-wrap justify-center space-x-0 pt-8 md:h-screen">
    <div
      @mouseover="toggleRscActivated(true)"
      @mouseleave="toggleRscActivated(false)"
      class="flex h-[70px] w-full justify-center focus:h-auto focus:w-auto md:flex-auto"
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
        class=" absolute top-40 max-h-80 w-[313px] overflow-y-scroll rounded-b-[10px] border-x-2 border-black bg-zinc-300 text-lg md:top-[160px]"
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
    <div class="flex h-full w-[90%] justify-center align-top text-lg md:h-[70%] md:w-[70%]">
      <CocktailPresentation
        :cocktailName="selectedCocktail"
        :cocktailCathegory="sCC"
        :cocktailDescription="sCI"
        :cocktailImage="sCImg"
        :cocktailIngredient="sCIs"
        :cocktailMesures="sCMs"
      />
    </div>
  </main>
</template>

<style></style>
