import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
