import { __awaiter, __generator } from "tslib";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
var initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
    pagination: null,
};
export var fetchUsers = createAsyncThunk("user/fetchUsers", function (page, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var response, pagination, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.get("https://reqres.in/api/users?page=".concat(page))];
            case 1:
                response = _b.sent();
                pagination = {
                    page: response.data.page,
                    per_page: response.data.per_page,
                    total: response.data.total,
                    total_pages: response.data.total_pages,
                };
                return [2 /*return*/, { users: response.data.data, pagination: pagination }];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue("Ошибка при загрузке пользователей")];
            case 3: return [2 /*return*/];
        }
    });
}); });
export var fetchUserById = createAsyncThunk("user/fetchUserById", function (userId, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var response, user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.get("https://reqres.in/api/users/".concat(userId))];
            case 1:
                response = _b.sent();
                user = response.data.data;
                user.description =
                    "Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты." +
                        ' В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".' +
                        " Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.";
                return [2 /*return*/, user];
            case 2:
                error_2 = _b.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue("Ошибка загрузки пользователя")];
            case 3: return [2 /*return*/];
        }
    });
}); });
export var updateUserAvatar = createAsyncThunk("user/updateUserAvatar", function (_b, thunkAPI_1) { return __awaiter(void 0, [_b, thunkAPI_1], void 0, function (_j, thunkAPI) {
    var response, error_3;
    var userId = _j.userId, avatar = _j.avatar;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _k.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.patch("https://reqres.in/api/users/".concat(userId), {
                        avatar: avatar,
                    })];
            case 1:
                response = _k.sent();
                return [2 /*return*/, response.data.data];
            case 2:
                error_3 = _k.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue("Ошибка обновления фото пользователя")];
            case 3: return [2 /*return*/];
        }
    });
}); });
var userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: function (state, action) {
            state.user = action.payload;
        },
        clearUser: function (state) {
            state.user = null;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchUsers.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchUsers.fulfilled, function (state, action) {
            state.users = action.payload.users;
            state.pagination = action.payload.pagination;
            state.loading = false;
        })
            .addCase(fetchUsers.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(fetchUserById.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchUserById.fulfilled, function (state, action) {
            state.user = action.payload;
            state.loading = false;
        })
            .addCase(fetchUserById.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(updateUserAvatar.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(updateUserAvatar.fulfilled, function (state, action) {
            if (state.user && state.user.id === action.payload.id) {
                state.user.avatar = action.payload.avatar;
            }
            state.loading = false;
        })
            .addCase(updateUserAvatar.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export default userSlice;
//# sourceMappingURL=userSlice.js.map