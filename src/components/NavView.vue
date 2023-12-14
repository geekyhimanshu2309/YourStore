<template>
  <div v-if="isDefaultView" class="fixed z-10 w-full left-0 top-0">
    <div class="navbar bg-base-200">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/Home">
          <img src="../assets/store_icon.svg" alt="" class="w-6"/>
          Your Store
        </a>
      </div>
      <div class="form-control sm:mr-5">
        <input type="text" placeholder="Search Items" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="flex-none mr-3">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <!-- dynamic count for number of items in cart -->
              <span class="badge badge-sm indicator-item">{{ cartItemCount.totalItems }}</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">Number of Items: {{ cartItemCount.totalItems }}</span>
              <span class="text-info">Subtotal: ${{ cartItemCount.totalCost }}</span>
              <div class="card-actions">
                <!-- Link to the CartView -->
                <router-link to="/Cart" class="btn btn-primary btn-block">View cart</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <router-link to="/Login" class="btn btn-block">Login</router-link>
        </div>
      </div>
    </div>  
  </div>
  <div v-else-if="isLoginView" class="fixed z-10 w-full left-0 top-0">
    <div class="navbar bg-base-200">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/Home">
          <img src="../assets/store_icon.svg" alt="" class="w-6"/>
          Your Store
        </a>
      </div>
      <div class="form-control sm:mr-5">
        <input type="text" placeholder="Search Items" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="flex-none mr-3">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <!-- dynamic count for number of items in cart -->
              <span class="badge badge-sm indicator-item">{{ cartItemCount.totalItems }}</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">Number of Items: {{ cartItemCount.totalItems }}</span>
              <span class="text-info">Subtotal: ${{ cartItemCount.totalCost }}</span>
              <div class="card-actions">
                <!-- Link to the CartView -->
                <router-link to="/Cart" class="btn btn-primary btn-block">View cart</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div v-else class="fixed z-10 w-full left-0 top-0">
    <div class="navbar bg-base-200">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/Home">
          <img src="../assets/store_icon.svg" alt="" class="w-6"/>
          Your Store
        </a>
      </div>
      <div class="form-control sm:mr-5">
        <input type="text" placeholder="Search Items" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="flex-none mr-3">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <!-- dynamic count for number of items in cart -->
              <span class="badge badge-sm indicator-item">{{ cartItemCount.totalItems }}</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">Number of Items: {{ cartItemCount.totalItems }}</span>
              <span class="text-info">Subtotal: ${{ cartItemCount.totalCost }}</span>
              <div class="card-actions">
                <!-- Link to the CartView -->
                <router-link to="/Cart" class="btn btn-primary btn-block">View cart</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="rounded-full">
              <i class="fa fa-user-circle fa-2xl mt-3" style="color:black;" aria-hidden="true"></i>
            </div>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a @click="logOut">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts">
// Import FontAwesome styles
    import '@fortawesome/fontawesome-free/css/all.css';
    import { useCartStore } from '../store/cart.ts';
    import router from '../router';
    import { defineProps } from 'vue';
    import {getAuth,signOut} from 'firebase/auth';

    const props = defineProps(['isDefaultView','isLoginView']);
    const cartItemCount = useCartStore();
    const auth = getAuth();
    const logOut = async() => {
      try {
        await signOut(auth);
        console.log('sign out successful');
        router.push('/login');
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    };
</script>

