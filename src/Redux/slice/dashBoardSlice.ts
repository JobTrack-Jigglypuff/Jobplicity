import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dashBoardState } from '../../../interfaces';

const initialState: dashBoardState = {
  isPopUp: false,
};

export const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setPopUp: (state, action: PayloadAction<boolean>) => {
      state.isPopUp = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPopUp } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
