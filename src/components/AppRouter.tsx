import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/app/Home";
import Protected from "../pages/app/Protected";
import Admin from "../pages/app/Admin";
import LoginPage from "../pages/auth/LoginPage";
import Profile from "../pages/app/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="/protected" element={<Protected />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
