<!-- src/views/CartView.vue -->
<template>
  <div class="top-0 justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in CartItems.cartItems" :key="item.product.id" class="w-[calc(33%)] h-auto">
        <div class="card w-96 glass">
          <figure>
            <img :src="item.product.images[0]" class="w-86 h-40" alt="car!" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center">{{ item.product.title }}</h2>
            <div class="card-actions justify-center">
              <button class="btn btn-primary" @click="CartItems.removeFromCart(item.product)">Remove from Cart</button>
              <button class="btn btn-secondary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { useCartStore } from '../store/cart.ts';
  // import type { Product } from '../types';
  
  const CartItems = useCartStore();
  // const removeFromCart = useCartStore().removeFromCart; 
</script>
