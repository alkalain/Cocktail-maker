<template>
  <div class="flex justify-between">
    <div class="rounded-2xl border-4 border-yellow-700 bg-zinc-100 text-2xl md:flex md:flex-col">
      <div class="flex w-full flex-col md:h-[70%] md:flex-row">
        <div class="flex justify-start border-yellow-700 md:w-[30%] md:border-r-[1px]">
          <img
            :src="cocktailImage"
            :alt="cocktailName"
            class="flex items-center justify-center rounded-t-xl object-cover md:rounded-se-none md:rounded-ss-xl"
          />
        </div>
        <div
          class="flex flex-col border-b-[1px] border-yellow-700 pl-1 md:w-[40%] md:border-x-[1px]"
        >
          <p class="pb-2"><b>le nom :</b> {{ cocktailName }}</p>
          <p class="pb-2"><b>categorie :</b> {{ cocktailCathegory }}</p>
        </div>
        <div
          class="scrollbar-hidden w-[40%] scroll-m-0 overflow-y-scroll border-l-[1px] border-yellow-700 pl-1 outline-none"
        >
          <p><b>ingrédiants: </b></p>
          <div class="flex flex-row">
            <ul class="">
              <li
                v-for="(ingredient, index) in cocktailIngredient"
                :key="(index = cocktailIngredient.index)"
              >
                {{ ingredient }}
              </li>
            </ul>
            <ul>
              <li v-for="(mesure, index) in cocktailMesures" :key="index">
                {{ mesure }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="scrollbar-hidden h-full overflow-y-scroll outline-none md:h-[30%]">
        <p class="border-t-2 border-yellow-700"><b>procedure :</b> {{ cocktailDescription }}</p>
      </div>
    </div>
    <!-- <div class="w-[312px] h-[317px] relative">
      <div class="w-[312px] h-[0px] left-0 top-[1px] absolute border-4 border-neutral-600"></div>
      <div
        class="w-[200px] h-[0px] left-[54px] top-[317px] absolute border-4 border-neutral-600"
      ></div>
      <div
        class="w-[325px] h-[0px] left-[7.75px] top-[3px] absolute origin-top-left rotate-[80.25deg] border-4 border-neutral-600"
      ></div>
      <div
        class="w-[321.26px] h-[0px] left-[246px] top-[323px] absolute origin-top-left rotate-[-79.65deg] border-4 border-neutral-600"
      ></div>
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  cocktailName: String,
  cocktailCathegory: String,
  cocktailDescription: String,
  cocktailImage: String,
  cocktailIngredient: Array,
  cocktailMesures: Array
})

/* const test = () => {
  console.log(cocktailIngredient)
} */
</script>
<style></style>
