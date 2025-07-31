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
});
// console.log({ cartSlice });
// console.log(cartSlice.reducer);

export default cartSlice.reducer;
