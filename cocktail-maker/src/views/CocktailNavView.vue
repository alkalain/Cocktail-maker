<template>
  <div class="">
    <nav class="flex justify-center space-x-3">
      <RouterLink
        class="flex h-12 w-32 items-center justify-center rounded-[20px] border-4 border-zinc-300 text-zinc-100 shadow-2xl"
        to="/"
        >By Ingredient</RouterLink
      >
      <RouterLink
        class="flex h-12 w-32 items-center justify-center rounded-[20px] border-4 border-zinc-300 text-zinc-100 shadow-2xl"
        to="/name"
        >By Name</RouterLink
      >
      <RouterLink
        class="flex h-12 w-32 items-center justify-center rounded-[20px] border-4 border-zinc-300 text-zinc-100 shadow-2xl"
        to="/about"
        >About</RouterLink
      >
    </nav>
  </div>
</template>
