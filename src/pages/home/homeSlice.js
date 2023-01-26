import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    username: null,
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = true;
    },
    logout: (state) => {
      state.username = null;
      state.isLogged = false;
    },
  },
});

export const { login, logout } = homeSlice.actions;

export default homeSlice.reducer;
