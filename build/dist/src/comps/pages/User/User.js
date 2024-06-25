import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LogoutButton from "../../ui/LogoutButton/LogoutButton";
import style from "../../ui/userStyles/index.module.scss";
import BackButton from "../../ui/BackButton/BackButton";
import UserInfo from "../../ui/UserInfo/UserInfo";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchUserById } from "../../../store/features/user/userSlice";
var User = function () {
    var dispatch = useAppDispatch();
    var user = useAppSelector(function (state) { return state.user.user; });
    var loading = useAppSelector(function (state) { return state.user.loading; });
    var error = useAppSelector(function (state) { return state.user.error; });
    var userId = useParams().userId;
    useEffect(function () {
        if (!user && userId) {
            var numericUserId = parseInt(userId, 10);
            if (!isNaN(numericUserId)) {
                dispatch(fetchUserById(numericUserId));
            }
        }
    }, [dispatch, user, userId]);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsx("p", { children: error });
    return (_jsx(_Fragment, { children: user && (_jsxs(_Fragment, { children: [_jsxs("header", { children: [_jsx(LogoutButton, {}), _jsx(BackButton, {}), _jsxs("div", { className: style.profile_header, children: [_jsx("img", { className: style.user_icon, src: user.avatar, alt: "".concat(user.first_name, " ").concat(user.last_name) }), _jsxs("div", { children: [_jsxs("h1", { children: [user.first_name, " ", user.last_name] }), _jsx("p", { children: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440" })] })] })] }), _jsx(UserInfo, {})] })) }));
};
export default User;
//# sourceMappingURL=User.js.map