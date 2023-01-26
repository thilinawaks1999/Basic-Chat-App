import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatArray: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatArray = [...state.chatArray, action.payload];
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
