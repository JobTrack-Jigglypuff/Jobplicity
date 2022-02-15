import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signupState } from '../../../interfaces';

const initialState: signupState = {
  isSignup: false,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSignup: (state, action: PayloadAction<boolean>) => {
      state.isSignup = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSignup } = signupSlice.actions;

export default signupSlice.reducer;
