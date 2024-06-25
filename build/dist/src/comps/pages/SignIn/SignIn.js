import { __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/Input/Input";
import { schema } from "./SignInValidatin";
import Button from "../../ui/Button/Button";
import style from "../../ui/authStyle/index.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginUser } from "../../../store/features/auth/authSlice";
var SignUp = function () {
    var _b, _j;
    var _k = useForm({
        resolver: yupResolver(schema),
    }), register = _k.register, handleSubmit = _k.handleSubmit, errors = _k.formState.errors;
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var loading = useAppSelector(function (state) { return state.auth.loading; });
    var error = useAppSelector(function (state) { return state.auth.error; });
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var resultAction;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, dispatch(loginUser(data))];
                case 1:
                    resultAction = _b.sent();
                    if (loginUser.fulfilled.match(resultAction)) {
                        navigate("/main");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", { className: style.container, children: _jsxs("form", { className: style.form_container, onSubmit: handleSubmit(onSubmit), children: [_jsx("h2", { children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F" }), _jsx(Input, { type: "text", label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", placeholder: "example@mail.ru", register: register("email"), error: (_b = errors.email) === null || _b === void 0 ? void 0 : _b.message }), _jsx(Input, { type: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", placeholder: "******", register: register("password"), error: (_j = errors.password) === null || _j === void 0 ? void 0 : _j.message }), _jsx(Button, { type: "submit", disabled: loading, children: "\u0412\u043E\u0439\u0442\u0438" }), _jsxs("div", { className: style.error_auth, children: [_jsx(Link, { to: "/signup", children: " \u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }), error && _jsx("p", { className: style.errorMessage, children: error })] })] }) }));
};
export default SignUp;
//# sourceMappingURL=SignIn.js.map