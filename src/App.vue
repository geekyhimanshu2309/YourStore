<!-- <template>
  <div>
    <NavView />
    <HomeView/>
  </div>
</template>
<script setup>
 import NavView from './components/NavView.vue';
 import HomeView from './components/HelloWorld.vue';
</script> -->

<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="">
    <RouterView/>
  </div>
</template>