import { UltimateProducts } from '@/interfaces/ultimateProducts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  products: UltimateProducts[];
  cartCounter: number;
}

const initialState: CartState = {
  products: [],
  cartCounter: 0,
};

const cartSlice = createSlice({
  name: 'cart/products',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<UltimateProducts>) => {
      const existingProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );
      if (!existingProduct) {
        state.products.push(action.payload);
        state.cartCounter += 1;
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex((product) => {
        product.productId !== action.payload;
      });
      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
        state.cartCounter -= 1;
      }
    },
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
