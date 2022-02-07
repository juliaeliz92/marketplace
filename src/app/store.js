import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/counter/cartSlice';

//setting up store
export const store = configureStore({
  reducer: {
    shoppingCart: cartReducer,
  },
});
