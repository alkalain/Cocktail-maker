<template>
  <div class="flex justify-between">
    <div class="flex flex-col rounded-2xl border-4 border-yellow-700 text-2xl bg-zinc-100">
      <div class="flex h-[70%] w-full flex-row">
        <div class="flex w-[30%] justify-start border-r-[1px] border-yellow-700">
          <img :src="cocktailImage" :alt="cocktailName" class="flex  items-center justify-center object-cover rounded-ss-xl" />
        </div>
        <div class="flex w-[40%] flex-col border-x-[1px] border-yellow-700 pl-1">
          <p class="pb-2"><b>le nom :</b> {{ cocktailName }}</p>
          <p class="pb-2"><b>categorie :</b> {{ cocktailCathegory }}</p>
        </div>
        <div
          class="scrollbar-hidden w-[40%] scroll-m-0 overflow-y-scroll border-l-[1px] border-yellow-700 pl-1 outline-none"
        >
          <p><b>ingrédiants: </b></p>
          <ul class="">
            <li
              v-for="(ingredient, index) in cocktailIngredient"
              :key="(index = cocktailMesures.value)"
            >
              {{ ingredient }} {{ index }}
            </li>
          </ul>
        </div>
      </div>

      <div class="h-[30%] overflow-y-scroll outline-none scrollbar-hidden">
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
<style>
.scrollbar-hidden {
  scrollbar-width: none;
}
</style>
