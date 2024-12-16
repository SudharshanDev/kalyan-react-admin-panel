import { Outlet } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Sidebar from "./Components/Layouts/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [drawer, setDrawer] = useState(false);

  const ToggleDrawer = () => {
    setDrawer(!drawer);
  };
  
  return (
    <div className="flex h-screen ">
      <Sidebar drawer={drawer}  />
      <main   className={`flex flex-col flex-1 transition-all duration-700  ${
          drawer ? "ml-64" : "ml-0"
        }`}>
        <Header drawer={drawer} ToggleDrawer={ToggleDrawer}/>
        <div className="flex-1 px-4 py-6 overflow-y-auto bg-gray-200">
          <Outlet />
        </div>
 
        <Footer className="py-4 mt-4 bg-none " /> {/* Adjust margin and padding as needed */}
  
      </main>
    </div>
  );
};

export default Layout;
