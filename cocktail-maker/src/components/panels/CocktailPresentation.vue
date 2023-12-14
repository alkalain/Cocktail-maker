<template>
  <div class="flew  text-2xl">
    <p>{{ cocktailName }}</p>
    <p>{{ cocktailCathegory }}</p>
    <img :src="cocktailImage" :alt="cocktailName" class=" w-[10%]">
    <p>{{ cocktailDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cocktailName: String,
    cocktailCathegory: String,
    cocktailDescription: String,
    cocktailImage: String,
  }
}
</script>
