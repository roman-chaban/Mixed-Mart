import { combineReducers } from 'redux';
import sliderSlice from '../slices/sliderSlice';
import wishlistSlice from '../slices/wishlistSlice';
import cartSlice from '../slices/cartSlice';

const rootReducer = combineReducers({
  slider: sliderSlice,
  wishlist: wishlistSlice,
  cart: cartSlice,
});

export default rootReducer;
