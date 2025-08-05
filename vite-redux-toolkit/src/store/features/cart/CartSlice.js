import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../cartItems.js';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const calcTotalAmount = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.amount, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      console.log('Full state:', JSON.stringify(state, null, 2));
      state.amount = 0;
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      console.log('Full state:', JSON.stringify(state, null, 2));
      console.log({ action });

      const itemId = action.payload;
      // console.log(itemId);
      state.cartItems = state.cartItems.filter((item) => {
        // console.log(item.id, itemId);
        return item.id !== itemId;
      });

      state.amount = calcTotalAmount(state.cartItems);
    },

    increaseAmount: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      // console.log(JSON.stringify(cartItem));
      if (cartItem) {
        cartItem.amount += 1;
        state.amount = calcTotalAmount(state.cartItems);
      }
      // console.log(JSON.stringify(state));
    },

    decreaseAmount: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      // console.log(JSON.stringify(cartItem));
      if (cartItem && cartItem.amount >= 0) {
        cartItem.amount -= 1;
        state.amount = calcTotalAmount(state.cartItems);
      }
      if (cartItems.amount <= 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        state.amount = calcTotalAmount(state.cartItems);
      }
    },

    getAmount: (state) => {
      state.amount = calcTotalAmount(state.cartItems);
    },
  },
});

console.log({ cartSlice });
// console.log(cartSlice.reducer);
export const {
  clearCart,
  removeItem,
  increaseAmount,
  getAmount,
  decreaseAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
