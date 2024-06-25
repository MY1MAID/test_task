import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "../comps/lib/PrivateRoute/PrivateRoute";
import SignUp from "../comps/pages/SignUp/SignUp";
import Home from "../comps/pages/Home/Home";
import User from "../comps/pages/User/User";
import SignIn from "../comps/pages/SignIn/SignIn";
const App = () => {
  return (
    <>
      <Router basename="/test_task">
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route
            path="main"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="main/:userId"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
