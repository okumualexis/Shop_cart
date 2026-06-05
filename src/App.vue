<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { db } from "./composables/firebase";
import { addItem, allItems } from "./composables/utils";
import Swal from "sweetalert2";
import { editOrDelete } from "./composables/alert"


import {
 addDoc,
 onSnapshot,
 deleteDoc,
 collection,
 doc,
 getDocs	
} from "firebase/firestore";


let item = ref("")

 const cartItems = ref([])

 const insertToCart = async() => {
 	await addItem(item.value)
 	item.value = ""
 }

 onMounted(() => {
    allItems(cartItems)
 	
 })


 
</script>

<template>
 <main class="p-4 bg-gray-300 min-h-screen">
 <div class="text-center">
    <h1>
      <span class="text-3xl font-semibold"> Cart it</span>
      <span class="text-2xl text-red-500">. </span>
      <span class="text-2xl text-yellow-500 italic">Snap it</span>
      
    </h1>
    <p class="italic font-semibold">Make shopping easy. Snap your planned purchases.</p>

 </div>
 <div class="rounded">
   <img
     src="./assets/images.jpeg"
     alt="shopping image"
     class="w-full h-48 rounded object-fit object-center"
   />
 </div>
  <div class="flex gap-4 max-w-md mt-4 p-4 shadow rounded-lg bg-slate-200">
     <input class="input" type="text" v-model="item" placeholder="Bread"/>
     <button @click="insertToCart()" class="btn btn-primary">Add Item </button>
  </div>
  <div class="mt-4 p-4 gap-4 overflow-y-auto max-h-76 grid grid-cols-2 md:grid-cols-3">
    <div 
       class="shadow rounded-lg  p-4"
       v-for="product in cartItems" :key="product.id"
       :class="product.status ? 'bg-success': 'bg-slate-200'"
       @click="editOrDelete(product.id)"
    > {{ product.cartItem }} <span v-show="product.quantity > 1">( {{ product.quantity }} )</span> </div>
  </div>
 </main>
</template>

<style scoped>

</style>
