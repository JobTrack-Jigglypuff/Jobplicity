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
  fullName: '',
  popup: false,
  editApp: false,
  itemData: {
    app_id: NaN,
    company_name: '',
    contact: '',
    deadline: '',
    description: '',
    job_title: '',
    location: '',
    salary: '',
    stage: '',
    url: '',
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
    setPopUp: (state, action: PayloadAction<any>) => {
      state.popup = action.payload;
    },
    setEditApp: (state, action: PayloadAction<any>) => {
      state.editApp = action.payload;
    },
    setItemData: (state, action: PayloadAction<any>) => {
      state.itemData = action.payload;
    },
    setFullName: (state, action: PayloadAction<any>) => {
      state.fullName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setData, setPopUp, setItemData, setEditApp, setFullName } =
  dashBoardSlice.actions;

export default dashBoardSlice.reducer;
