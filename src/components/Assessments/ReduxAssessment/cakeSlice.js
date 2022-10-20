import { createSlice } from '@reduxjs/toolkit';
import { fetchCake } from './cakeAPI';

const initialState = {
  value: [{
    "id": 0,
    "title": "",
    "description": "",
    "image": ""
  }]
};

export const cakeSlice = createSlice({
  name: 'cakelist',
  initialState,
  reducers: {
    fetch: (state, action) => {
      // TODO: Set payload as returned JSON object when calling fetch
      state.value = fetchCake()
    }
  }
});

export const { fetch } = cakeSlice.actions;


export default cakeSlice.reducer;
