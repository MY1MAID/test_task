import { __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/Input/Input";
import { schema } from "./SignUpValidation";
import style from "../../ui/authStyle/index.module.scss";
import Button from "../../ui/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { registerUser } from "../../../store/features/auth/authSlice";
var SignUp = function () {
    var _b, _j, _k, _q;
    var _z = useForm({
        resolver: yupResolver(schema),
    }), register = _z.register, handleSubmit = _z.handleSubmit, errors = _z.formState.errors;
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var loading = useAppSelector(function (state) { return state.auth.loading; });
    var error = useAppSelector(function (state) { return state.auth.error; });
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var resultAction;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, dispatch(registerUser(data))];
                case 1:
                    resultAction = _b.sent();
                    if (registerUser.fulfilled.match(resultAction)) {
                        navigate("/main");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", { className: style.container, children: _jsxs("form", { className: style.form_container, onSubmit: handleSubmit(onSubmit), children: [_jsx("h2", { children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }), _jsx(Input, { type: "text", label: "\u0418\u043C\u044F", placeholder: "\u0410\u0440\u0442\u0443\u0440", register: register("name"), error: (_b = errors.name) === null || _b === void 0 ? void 0 : _b.message }), _jsx(Input, { type: "text", label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", placeholder: "example@mail.ru", register: register("email"), error: (_j = errors.email) === null || _j === void 0 ? void 0 : _j.message }), _jsx(Input, { type: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", placeholder: "******", register: register("password"), error: (_k = errors.password) === null || _k === void 0 ? void 0 : _k.message }), _jsx(Input, { type: "password", label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", placeholder: "******", register: register("confirmPassword"), error: (_q = errors.confirmPassword) === null || _q === void 0 ? void 0 : _q.message }), _jsx(Button, { type: "submit", disabled: loading, children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" }), _jsxs("div", { className: style.error_auth, children: [_jsx(Link, { to: "/signin", children: " \u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }), error && _jsx("p", { className: style.errorMessage, children: error })] })] }) }));
};
export default SignUp;
//# sourceMappingURL=SignUp.js.map