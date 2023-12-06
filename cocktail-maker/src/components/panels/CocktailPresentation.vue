<template>
  <div class="text-2xl">
    <p>{{ cocktailName }}</p>
    <p>{{ cocktailCathegory }}</p>
    <p>{{ cocktailDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cocktailName: String,
    cocktailCathegory: String,
    cocktailDescription: String
  }
}
</script>
