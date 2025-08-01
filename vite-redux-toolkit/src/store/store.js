import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice.js';

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
