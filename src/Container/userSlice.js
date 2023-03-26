import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  name1: "user2",
  initialState1: {},
  reducers: {
    personalDetails: (state, action) => {
      state.user = action.payload;
    },
    personalDetails2: (state, action) => {
      state.user2 = action.payload;
    },
  },
});

export const { personalDetails, personalDetails2 } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
