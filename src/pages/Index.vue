<template>
    <div>
        <NavView :isDefaultView="true"/>
        <ItemList/>
    </div>
</template>

<script setup lang="ts">
    import NavView from '../components/NavView.vue';
    import ItemList from '../components/ItemList.vue';
</script>