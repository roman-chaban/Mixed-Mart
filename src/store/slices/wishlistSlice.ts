import { mensFashionItem } from '@/interfaces/mens-fashion';
import {
  TypeUltimateProducts,
  UltimateProducts,
} from '@/interfaces/ultimateProducts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface WishlistState {
  wishlist: TypeUltimateProducts;
  wishlistCounter: number;
}

const initialState: WishlistState = {
  wishlist: [],
  wishlistCounter: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist/products',
  initialState,
  reducers: {
    addProductsToWishlist: (state, action: PayloadAction<UltimateProducts>) => {
      const existingProduct = state.wishlist.find((item) => {
        item.productId === action.payload.productId;
      });
      if (!existingProduct) {
        state.wishlist.push(action.payload);
        state.wishlistCounter += 1;
      }
    },
    deleteProductWishlist: (state, action: PayloadAction<number>) => {
      const productIndex = state.wishlist.findIndex((item) => {
        item.productId === action.payload;
      });
      if (productIndex !== 1) {
        state.wishlist.splice(productIndex, 1);
        state.wishlistCounter -= 1;
      }
    },
  },
});


export const {addProductsToWishlist, deleteProductWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;