import { defineStore } from "pinia";
import type { Product, CartItem } from '../types'; 
import { ref, onMounted } from "vue";
import { usePersistCart } from "./localStorage";


export interface CartState {
    cartItems: CartItem[];
    totalItems: number;
    totalCost: number;
}

export const useCartStore = defineStore('cart', () => {
    // state

    // Reactive values
    const cartItems = ref<CartItem[]>([]);
    const totalItems = ref<number>(0);
    const totalCost = ref<number>(0);
    
    const { loadFromLocalStorage, saveToLocalStorage } = usePersistCart();
    //Actions
   // Method to add an item to the cart
    const addToCart = (item: Product) => {
        const targetItem: CartItem | undefined = cartItems.value.find((cartItem) => cartItem.product.id === item.id);
        
        if (targetItem) {
            targetItem.count += 1;

        } else {
            cartItems.value = [...cartItems.value, { product: item, count: 1 }];
        }

        totalItems.value += 1;
        totalCost.value += item.price;
        
        saveToLocalStorage();
    };

    // Method to remove an item from the cart
    const removeFromCart = (product: Product) => {
        const index = cartItems.value.findIndex((item) => item.product.id === product.id);

        if (index !== -1) {
            const cartItem = cartItems.value[index];

            if (cartItem.count > 1) {
                cartItem.count -= 1;
            } else {
                cartItems.value.splice(index, 1);
            }

            totalItems.value -= 1;
            totalCost.value -= product.price;
        }

        saveToLocalStorage();
    };
    onMounted(() => {
        // const saveToLocalStorage = () => {
        //   localStorage.setItem(CART_STORAGE, JSON.stringify(cartItems.value))
        // }
        // saveToLocalStorage()
        // return cartItems.value.saveToLocalStorage
        loadFromLocalStorage();
    });
    // const saveToLocalStorage = () => {
    //     localStorage.setItem(CART_STORAGE,JSON.stringify(cartItems.value));
    //     localStorage.setItem(CART_STORAGE+'_TOTAL_COST',totalCost.value.toString());
    //     localStorage.setItem(CART_STORAGE+'_TOTAL_ITEMS',totalItems.value.toString());
    // }

    // Expose the state and methods
    return {
        cartItems,
        totalItems,
        totalCost,
        addToCart,
        removeFromCart,
    }; // Use 'as const' for readonly return type
});
