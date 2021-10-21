<template>
  <div>
      <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10 grid grid-cols-3">
          <table class="table-auto font-sans">
            <thead>
            <tr>
              <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Codigo</th>
              <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Producto</th>
              <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                <button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" @click="view('create_product')">
                  <font-awesome-icon icon="plus"/>
                </button>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{ product.id }}</td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{ product.name }}</td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" @click="view('update_product',product)">
                  <span> Actualizar </span>
                </button>
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" @click="delete_product(product.id)">
                  <font-awesome-icon icon="trash-alt"/>
                </button>
              </td>
            </tr>
            </tbody>
          </table>


        <template v-if="app_name ==='update_product'">
          <div class="ml-5 w-full max-w-lg my-5 mx-auto grid-cols-1">
            <div class="mt-2">
              <table class="table-auto font-sans" >
                <thead>
                <tr>
                  <th  class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">ID</th>
                  <th  class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                    <div class="flex flex-col">
                      NOMBRE DEL PRODUCTO
                    </div>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{ product.id}}</td>
                  <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                    <input  class="form-control"  v-model="product.name">
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-5">
              <button class="min-w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"  @click.prevent="updated_product(product)">
                Guardar
              </button>
            </div>


            <div class="mt-2">
              <button class="min-w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="app_name = null">
                Cancelar
              </button>
            </div>
          </div>
        </template>

        <template v-if="app_name ==='create_product'">
          <div class="ml-5 w-full max-w-lg my-5 mx-auto grid-cols-1">
            <div class="flex items-center border-b border-teal-500 py-2">
              <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nombre Producto"  v-model="form.name">
            </div>

            <div class="mt-5">
              <button class="min-w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"  @click.prevent="save(form)">
                Guardar
              </button>
            </div>
            <div class="mt-2">
              <button class="min-w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="app_name = null">
                Cancelar
              </button>
            </div>
          </div>
        </template>

      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Index",

  components:{

  },

  data(){
    return{
      products: [],
      app_name: null,
      product: null,
      form: {
        name: null
      },
    }
  },

  methods:{
    view(app_name, product){
      this.app_name = app_name
          this.product = product
    },

    productData(){
      axios.get('http://localhost/crud_proyect/public/api/products').then(resp => {
        this.products = resp.data
      }).catch(err => {
        alert(err.data)
      })
    },


    resetForm(){
      this.form = {
        name: null
      }
    },

    resetForm2(){
      this.product = {
        name: null
      }
    },


    save(form){
      axios.post('http://localhost/crud_proyect/public/api/products', form).then(resp => {
        this.$swal({
          title: '¡Exito!',
          text: "Su solicitud a sido creada con exito!",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        console.log(resp.data);
        this.resetForm();
        this.productData();
      }).catch( err => {
            alert(err.data)
      })
    },


    updated_product(form){
      axios.put('http://localhost/crud_proyect/public/api/products/{id}', form).then(resp => {
        this.$swal({
          title: '¡Exito!',
          text: "Su solicitud a sido actualizada con exito!",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        console.log(resp.data);
        this.resetForm2();
        this.productData();
      }).catch( err => {
        this.$swal({
          position: 'bottom-start',
          icon: 'error',
          title: 'Oops.. Verifica que toda la información sea correcta',
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 6000,
          toast: true
        });
        console.log(err.data)
      })
    },

    delete_product(id){
      axios.delete(`http://localhost/crud_proyect/public/api/products/${id}`).then(resp => {
        this.$swal({
          title: '¡Exito!',
          text: "El registro se ha eliminado con exito!",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        console.log(resp.data);
        this.productData();
      }).catch( err => {
        this.$swal({
          position: 'bottom-start',
          icon: 'error',
          title: 'Oops.. Hubo un error',
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 6000,
          toast: true
        });
        console.log(err.data)
      })

      }
  },

  mounted() {
  this.productData()
  }
}
</script>