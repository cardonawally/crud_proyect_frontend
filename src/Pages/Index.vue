<template>
  <div>
    <div class="relative overflow-hidden mb-8 grid grid-cols-3">
      <div class="p-5">
        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
          <table class="table-auto font-sans">
            <thead>
            <tr>
              <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Codigo</th>
              <th class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Producto</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{ product.id }}</td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{ product.name }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <template>
        <div class="intro-y flex-1 box py-16 mb-5 lg:mb-0 ">
          <div class="text-xl font-medium text-center mt-10">
              Productos
          </div>
          <button type="button" class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8" @click="view('create_product')">
            Crear
          </button>
          <button type="button" class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8" @click="view('update_product')">
            Actualizar
          </button>
        </div>
      </template>

      <template v-if="app_name ==='update_product'">
        <form class="flex w-full max-w-sm mx-auto space-x-3">
          <div class="w-full max-w-lg my-5 mx-auto grid-cols-2">
            <div class="flex items-center border-b border-teal-500 py-2">
              <span class="text-gray-700 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">Seleccionar  producto</span>
              <select class="form-select appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " v-model="form.name">
                <option
                    v-for="prod in products"
                    v-bind:key="prod.id"
                    :value="prod.name">{{prod.name}}
                </option>
              </select>
            </div>

            <div class="mt-5">
              <button class="min-w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"  @click.prevent="updated_product(form)">
                Guardar
              </button>
            </div>


            <div class="mt-2">
              <button class="min-w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="app_name = null">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </template>

      <template v-if="app_name ==='create_product'">
        <form class="flex w-full max-w-sm mx-auto space-x-3">
          <div class="w-full max-w-lg my-5 mx-auto grid-cols-2">
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
        </form>
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
      form: {
        name: null
      },
    }
  },

  methods:{
    view(app_name){
      this.app_name = app_name
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
        this.resetForm();
        this.productData();
      }).catch( err => {
        alert(err.data)
      })
    }
  },

  mounted() {
  this.productData()
  }
}
</script>