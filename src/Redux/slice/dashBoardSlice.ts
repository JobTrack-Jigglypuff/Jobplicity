import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashBoardState, Application } from '../../../interfaces';

const initialState = {
  data: {
    applied: [],
    interview: [],
    offer: [],
    phone: [],
    rejected: [],
    user_id: NaN,
  },
} as DashBoardState;

export const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
