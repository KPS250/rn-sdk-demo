import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AppState {
  config: any;
}

// Define the initial state using that type
const initialState: AppState = {
  config: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setConfig(state, action: PayloadAction<any>) {
      state.config = action.payload;
    },
    resetConfig(state) {
      state.config = {};
    },
  },
});

export const { setConfig, resetConfig } = appSlice.actions;
export default appSlice.reducer;
