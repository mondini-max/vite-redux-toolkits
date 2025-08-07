import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice.js';

import modalReducer from './features/modal/ModalSlice.js';

const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});

export default store;
