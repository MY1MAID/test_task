import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
