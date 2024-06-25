import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useAppSelector } from "../../../store/hooks";
import { Navigate } from "react-router-dom";
var PrivateRoute = function (_b) {
    var children = _b.children;
    var token = useAppSelector(function (state) { return state.auth.token; });
    return token ? _jsx(_Fragment, { children: children }) : _jsx(Navigate, { to: "/signin" });
};
export default PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map