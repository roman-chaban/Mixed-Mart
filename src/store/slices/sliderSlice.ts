import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SliderState {
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

const initialState: SliderState = {
  isNextDisabled: false,
  isPrevDisabled: true,
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setNextDisabled: (state, action: PayloadAction<boolean>) => {
      state.isNextDisabled = action.payload;
    },
    setPrevDisabled: (state, action: PayloadAction<boolean>) => {
      state.isPrevDisabled = action.payload;
    },
  },
});

export const { setNextDisabled, setPrevDisabled } = sliderSlice.actions;
