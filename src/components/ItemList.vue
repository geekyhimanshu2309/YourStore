<!-- <template>
    <div class="sticky mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="item in items" :key="item.id" class="w-[calc(33%)] h-auto">
            <div class="card w-96 glass">
                <figure>
                  <img :src="item.images[0]" class="w-86 h-40" alt="car!"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title justify-center">{{ item.title }}</h2>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary" @click="addToCart(item)">Add to cart</button>
                        <button class="btn btn-secondary">Buy now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useCartStore } from '../store/cart.ts';
  import ProductStore from '../store/product.ts';

  export default {
    setup() {
      // Use ref to create reactive state
      const items = ref([]);
      
      // Fetch data from OpenAPI endpoint
      onMounted(async () => {
        try {
          const response = await axios.get('https://dummyjson.com/products');
          // Update the reactive state
          items.value = response.data.products;
          console.log(items.value); // Logging the items
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      
      const addToCart = (item) => {
        useCartStore.cart(item);
      };
  
      // Expose the state to the template
      return { items,addToCart };
    },
  };
</script>
  
<style>
  /* Add your component styles here */
</style>
   -->

<template>
  <div class="sticky mt-12">
    <!-- {{ store }} -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in items" :key="item.id" class="w-[calc(33%)] h-auto">
        <div class="card w-96 glass">
          <figure>
            <img :src="item.images[0]" class="w-86 h-40" alt="car!" />
          </figure>
          <!-- <swiper :options="swiperOptions">
            <swiper-slide v-for="(image, index) in item.images" :key="index">
              <img :src="image" class="w-86 h-40" :alt="'Image ' + (index + 1)" />
            </swiper-slide>
          </swiper> -->
          <div class="card-body">
            <h2 class="card-title justify-center">{{ item.title }}</h2>
            <div class="card-actions justify-center">
              <button class="btn btn-primary" @click="cartStore.addToCart(item)">Add to cart</button>
              <button class="btn btn-secondary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useProductStore } from '../store/product.ts';
  import {useCartStore} from '../store/cart.ts';
  import type { Product } from '../types';
  
  const items = ref<Product[]>([]);

  const productStore = useProductStore();
  const cartStore = useCartStore();

  onMounted(async () => {
    await productStore.fetchProducts();
    console.log(productStore.products.value);
    items.value = productStore.products.value;
  });

  // const addToCart = (item: Product) => {
  //   useCartStore().addToCart(item);
  // }
</script>
  
<!-- <style>
/* Add your component styles here */
</style> -->
  