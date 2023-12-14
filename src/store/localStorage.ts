// import { onUnmounted } from 'vue';
// import { useCartStore } from './cart';

// export const CART_STORAGE = 'CART_STORAGE'

// export const usePersistCart = () => {
//    const cartStore = useCartStore()
//    const unsub = cartStore.$subscribe(() => {
//       localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.cartItems));
//       localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.totalCost));
//       localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.totalItems));
//    })
//    onUnmounted(() => {
//       unsub()
//    })
// }

// import { onUnmounted } from 'vue';
// import { useCartStore } from './cart';

// export const CART_STORAGE = 'CART_STORAGE';

// export const usePersistCart = () => {
//   const cartStore = useCartStore();

//   // Load data from localStorage on component mount
//   const storedCartItems = localStorage.getItem(CART_STORAGE);
//   if (storedCartItems) {
//     cartStore.cartItems(JSON.parse(storedCartItems));
//   }

//   const storedTotalCost = localStorage.getItem('TOTAL_COST_STORAGE');
//   if (storedTotalCost) {
//     cartStore.totalCost(parseFloat(storedTotalCost));
//   }

//   const storedTotalItems = localStorage.getItem('TOTAL_ITEMS_STORAGE');
//   if (storedTotalItems) {
//     cartStore.cartItems.count(parseInt(storedTotalItems, 10));
//   }

//   // Subscribe to changes and update localStorage
//   const unsub = cartStore.$subscribe(() => {
//     localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.cartItems));
//     localStorage.setItem('TOTAL_COST_STORAGE', cartStore.totalCost.toString());
//     localStorage.setItem('TOTAL_ITEMS_STORAGE', cartStore.totalItems.toString());
//   });

//   onUnmounted(() => {
//     unsub();
//   });
// };

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