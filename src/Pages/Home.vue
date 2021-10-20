<template>
  <div>
    <div class="intro y box grid grid-cols-3 gap-4">
      <div class="p-5">
        <div class="mt-2">
          <table class="table-auto">
            <thead>
            <tr>
              <th>Codigo</th>
              <th>Producto</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {

  data(){
  return{
    products: [],
  }
  },

  methods: {
    productData(){
      axios.get('http://localhost/crud_proyect/public/api/products').then(resp => {
        this.products = resp.data
      }).catch(err => {
        alert(err.data)
      })
    }


  },

  mounted() {
    this.productData()
  }
}
</script>