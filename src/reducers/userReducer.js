import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    username: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state, action) {
      state.loading = true;
      state.error = null;
    },

    loginSucces(state, action) {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.username = null;
      state.token = null;
      state.error = null;
    },
    setUser(state, action) {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

export const { loginStart, loginSucces, loginFailure, logout, setUser } =
  userSlice.actions;
export default userSlice.reducer;
