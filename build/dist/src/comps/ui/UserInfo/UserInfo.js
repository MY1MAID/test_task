import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import style from "./UserInfo.module.scss";
import { useAppSelector } from "../../../store/hooks";
var UserInfo = function () {
    var user = useAppSelector(function (state) { return state.user.user; });
    return (_jsx(_Fragment, { children: user && (_jsxs("div", { className: style.text_layout, children: [_jsxs("div", { className: style.mail, children: [_jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM18.35 2L11 7.085L3.65 2H18.35ZM2 14V2.6825L10.5725 8.615C10.698 8.7021 10.8472 8.74877 11 8.74877C11.1528 8.74877 11.302 8.7021 11.4275 8.615L20 2.6825V14H2Z", fill: "#512689" }) }), _jsx("p", { children: user.email })] }), _jsx("p", { children: user.description })] })) }));
};
export default UserInfo;
//# sourceMappingURL=UserInfo.js.map