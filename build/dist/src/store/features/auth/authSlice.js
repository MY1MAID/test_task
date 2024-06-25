import { __awaiter, __generator } from "tslib";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
var initialState = {
    token: null,
    loading: false,
    error: null,
};
export var registerUser = createAsyncThunk("auth/register", function (_b, thunkAPI_1) { return __awaiter(void 0, [_b, thunkAPI_1], void 0, function (_j, thunkAPI) {
    var response, error_1;
    var email = _j.email, password = _j.password;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _k.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.post("https://reqres.in/api/register", {
                        email: email,
                        password: password,
                    })];
            case 1:
                response = _k.sent();
                return [2 /*return*/, response.data.token];
            case 2:
                error_1 = _k.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue("Не удалось выполнить регистрацию")];
            case 3: return [2 /*return*/];
        }
    });
}); });
export var loginUser = createAsyncThunk("auth/login", function (_b, thunkAPI_1) { return __awaiter(void 0, [_b, thunkAPI_1], void 0, function (_j, thunkAPI) {
    var response, error_2;
    var email = _j.email, password = _j.password;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _k.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.post("https://reqres.in/api/login", {
                        email: email,
                        password: password,
                    })];
            case 1:
                response = _k.sent();
                return [2 /*return*/, response.data.token];
            case 2:
                error_2 = _k.sent();
                return [2 /*return*/, thunkAPI.rejectWithValue("Ошибка входа")];
            case 3: return [2 /*return*/];
        }
    });
}); });
var authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: function (state) {
            state.token = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(loginUser.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(loginUser.fulfilled, function (state, action) {
            state.token = action.payload;
            state.loading = false;
        })
            .addCase(loginUser.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(registerUser.pending, function (state) {
            state.loading = true;
            state.error = null;
        })
            .addCase(registerUser.fulfilled, function (state, action) {
            state.token = action.payload;
            state.loading = false;
        })
            .addCase(registerUser.rejected, function (state, action) {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export var logout = authSlice.actions.logout;
export default authSlice;
//# sourceMappingURL=authSlice.js.map