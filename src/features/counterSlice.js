import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'user/fetchCount',
  async (amount) => {

  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {
 
      state.user += action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.value;
export default userSlice.reducer;
