<script setup></script>

<template>
  <main class="flex h-screen justify-center pt-8">
    <!-- search bar check a tuto-->

    <form action="">
      <input
        type="text"
        placeholder="Nom d'ingrédiant"
        name=""
        id=""
        class="h-[60px] w-[321px] rounded-[20px] border-4 border-black bg-zinc-300 text-2xl"
      />
    </form>
  </main>
</template>

<style></style>

<!-- 
Api call 
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
  params: {i: 'Gin'},
  headers: {
    'X-RapidAPI-Key': '5d8736a878mshc87d50db9f74807p10f351jsn92deba2aae08',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

 -->
