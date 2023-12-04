import { createSlice, current } from '@reduxjs/toolkit';
import { RootState } from './store';

const defaulState: ToursStore = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: defaulState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      state.cartItems.push(product);
      state.numItemsInCart = state.cartItems.length;
      state.cartTotal = state.cartItems.reduce((a, b) => a + b.price, 0);
      console.log(current(state));
      return state;
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaulState));
      return defaulState;
    },
    removeItem: (state, action) => {
      const product = state.cartItems.filter((item) => item.id !== action.payload);
      const numIncart = product.length;
      const total = product.reduce((a, b) => a + b.price, 0);
      return { ...state, cartItems: product, numItemsInCart: numIncart, cartTotal: total };
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export const cartSelector = ({ cart }: RootState) => ({ ...cart });
