import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // add state to navigate to redirect to last page before you login
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
