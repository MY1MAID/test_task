import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import PrivateRoute from "../comps/lib/PrivateRoute/PrivateRoute";
import SignUp from "../comps/pages/SignUp/SignUp";
import Home from "../comps/pages/Home/Home";
import User from "../comps/pages/User/User";
import SignIn from "../comps/pages/SignIn/SignIn";
var App = function () {
    return (_jsx(_Fragment, { children: _jsx(Router, { basename: "/test_task", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/signin" }) }), _jsx(Route, { path: "signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "signin", element: _jsx(SignIn, {}) }), _jsx(Route, { path: "main", element: _jsx(PrivateRoute, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: "main/:userId", element: _jsx(PrivateRoute, { children: _jsx(User, {}) }) })] }) }) }));
};
export default App;
//# sourceMappingURL=App.js.map