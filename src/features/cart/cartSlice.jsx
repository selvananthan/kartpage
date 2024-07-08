// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Item 1', price: 10, quantity: 0 },
    { id: 2, name: 'Item 2', price: 15, quantity: 0 },
    { id: 3, name: 'Item 3', price: 20, quantity: 0 },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;
