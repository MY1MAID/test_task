import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pagination, User, UserState } from "./userSliceTypes";
import {
  fetchUserById,
  fetchUsers,
  updateUserAvatar,
} from "../../../shared/api/userApi/userApi";

const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
  pagination: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (
          state,
          action: PayloadAction<{ users: User[]; pagination: Pagination }>,
        ) => {
          state.users = action.payload.users;
          state.pagination = action.payload.pagination;
          state.loading = false;
        },
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserById.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateUserAvatar.fulfilled,
        (state, action: PayloadAction<User>) => {
          if (state.user && state.user.id === action.payload.id) {
            state.user.avatar = action.payload.avatar;
          }
          state.loading = false;
        },
      )
      .addCase(updateUserAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default userSlice.reducer;
