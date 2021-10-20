<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div>
          <a class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
             href="#">
            Productos
          </a>
        </div>
      </div>
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:mx-6">
          <router-link to="/" class="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
            Inicio
          </router-link>

          <router-link to="/products" class="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
            Ingresar Productos
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar"
}
</script>
<style scoped>
</style>