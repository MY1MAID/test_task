import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { Navigate } from "react-router-dom";
import { ElementProps } from "./PrivateRouteProps";

const PrivateRoute = ({ children }: ElementProps) => {
  const token = useAppSelector((state) => state.auth.token);

  return token ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;
