import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pagination, User, UserState } from "./userSliceTypes";

const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
  pagination: null,
};

export const fetchUsers = createAsyncThunk<
  { users: User[]; pagination: Pagination },
  number,
  { rejectValue: string }
>("user/fetchUsers", async (page, thunkAPI) => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`,
    );
    const pagination = {
      page: response.data.page,
      per_page: response.data.per_page,
      total: response.data.total,
      total_pages: response.data.total_pages,
    };
    return { users: response.data.data, pagination };
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка при загрузке пользователей");
  }
});

export const fetchUserById = createAsyncThunk<
  User,
  number,
  { rejectValue: string }
>("user/fetchUserById", async (userId, thunkAPI) => {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    const user: User = response.data.data;
    user.description =
      "Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты." +
      ' В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".' +
      " Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.";
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка загрузки пользователя");
  }
});

export const updateUserAvatar = createAsyncThunk<
  User,
  { userId: number; avatar: string },
  { rejectValue: string }
>("user/updateUserAvatar", async ({ userId, avatar }, thunkAPI) => {
  try {
    const response = await axios.patch(
      `https://reqres.in/api/users/${userId}`,
      {
        avatar,
      },
    );
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка обновления фото пользователя");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearUser(state: UserState) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: UserState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (
          state: UserState,
          action: PayloadAction<{ users: User[]; pagination: Pagination }>,
        ) => {
          state.users = action.payload.users;
          state.pagination = action.payload.pagination;
          state.loading = false;
        },
      )
      .addCase(fetchUsers.rejected, (state: UserState, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserById.pending, (state: UserState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserById.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.user = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchUserById.rejected, (state: UserState, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserAvatar.pending, (state: UserState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateUserAvatar.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          if (state.user && state.user.id === action.payload.id) {
            state.user.avatar = action.payload.avatar;
          }
          state.loading = false;
        },
      )
      .addCase(updateUserAvatar.rejected, (state: UserState, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice;
