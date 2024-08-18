import { Outlet } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Sidebar from "./Components/Layouts/Sidebar";

const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar className="w-64" />
      <main className="w-full">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
