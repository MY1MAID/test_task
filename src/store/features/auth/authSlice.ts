import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./authSliceTypes";
import axios from "axios";

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>("auth/register", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось выполнить регистрацию");
  }
});

export const loginUser = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка входа");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state: AuthState, action: PayloadAction<string>) => {
          state.token = action.payload;
          state.loading = false;
        },
      )
      .addCase(loginUser.rejected, (state: AuthState, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state: AuthState, action: PayloadAction<string>) => {
          state.token = action.payload;
          state.loading = false;
        },
      )
      .addCase(registerUser.rejected, (state: AuthState, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
