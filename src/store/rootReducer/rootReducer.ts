import { combineReducers } from 'redux';
import { sliderSlice } from '../slices/sliderSlice';

export const rootReducer = combineReducers({
  sliderSlider: sliderSlice,
});
