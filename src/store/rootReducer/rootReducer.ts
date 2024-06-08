import { combineReducers } from 'redux';
import sliderSlice from '../slices/sliderSlice';

const rootReducer = combineReducers({
  slider: sliderSlice,
});

export default rootReducer;
