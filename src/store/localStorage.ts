import { onUnmounted } from 'vue';
import { useCartStore } from './cart';

export const CART_STORAGE = 'CART_STORAGE';

export const usePersistCart = () => {
   const cartStore = useCartStore();

   // Load cart data from localStorage when the component is mounted
   const loadFromLocalStorage = () => {
      const storedCartItems = localStorage.getItem(CART_STORAGE);
      console.log('Stored Cart Items:', storedCartItems);
      // console.log('local storage', storedCartItems);
      if (storedCartItems) {
         const parsedCartItems = JSON.parse(storedCartItems);
         console.log('Parsed Cart Items:', parsedCartItems);
         cartStore.cartItems = parsedCartItems;
      }

      const storedTotalCost = localStorage.getItem(CART_STORAGE + '_TOTAL_COST');
      if (storedTotalCost) {
         cartStore.totalCost = parseFloat(storedTotalCost);
      }

      const storedTotalItems = localStorage.getItem(CART_STORAGE + '_TOTAL_ITEMS');
      if (storedTotalItems) {
         cartStore.totalItems = parseInt(storedTotalItems, 10);
      }
   };

   // Save cart data to localStorage on every update
   const saveToLocalStorage = () => {
      console.log('Saving to localStorage...');
      localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.cartItems));
      localStorage.setItem(CART_STORAGE + '_TOTAL_COST', cartStore.totalCost.toString());
      localStorage.setItem(CART_STORAGE + '_TOTAL_ITEMS', cartStore.totalItems.toString());
   };

   // Call loadFromLocalStorage when the component is mounted
   loadFromLocalStorage();

   // Subscribe to cartStore changes and save to localStorage
   const unsub = cartStore.$subscribe(() => {
      saveToLocalStorage();
   });

   // Unsubscribe from changes when the component is unmounted
   onUnmounted(() => {
      unsub();
   });
   
   return { loadFromLocalStorage, saveToLocalStorage };
};
// export const 