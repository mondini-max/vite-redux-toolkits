import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../cartItems.js';

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
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
    },

    increaseAmount: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      console.log(JSON.stringify(cartItem));
      state.amount = cartItem.amount + 1;
    },
  },
});

console.log({ cartSlice });
// console.log(cartSlice.reducer);
export const { clearCart, removeItem, increaseAmount } = cartSlice.actions;

export default cartSlice.reducer;
