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
          <router-link to="/products" class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
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