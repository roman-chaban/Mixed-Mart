import { combineReducers } from 'redux';
import sliderSlice from '../slices/sliderSlice';
import wishlistSlice from '../slices/wishlistSlice';

const rootReducer = combineReducers({
  slider: sliderSlice,
  wishlist: wishlistSlice,
});

export default rootReducer;
