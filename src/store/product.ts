import axios from 'axios';
import type { Product } from '../types';
import { ref } from 'vue';

export const useProductStore = () => {

    const products : {value: Product[]} = ref([]);


    const fetchProducts = async ()=> {
        try {
        const response = await axios.get('https://dummyjson.com/products');
        products.value = response.data.products;
        console.log(products.value); // Logging the items
        } 
        catch (error) {
        console.error('Error fetching products:', error);
        }
    }  
    
    return {
        products,
        fetchProducts,
    }
};
