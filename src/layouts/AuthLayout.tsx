import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
