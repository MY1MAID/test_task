import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./authSliceTypes";
import { loginUser, registerUser } from "../../../shared/api/authApi/authApi";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state: AuthState, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.loading = false;
        localStorage.setItem("token", action.payload);
      },
    );
    builder.addCase(registerUser.rejected, (state: AuthState, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(loginUser.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: AuthState, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.loading = false;
        localStorage.setItem("token", action.payload);
      },
    );
    builder.addCase(loginUser.rejected, (state: AuthState, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
