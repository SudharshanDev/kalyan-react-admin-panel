import React, { useState } from "react";
import Logo from "../../Assets/Images/Logo/logo-icon-1.png";
import { Icon } from "@iconify/react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ drawer }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Toggle dropdown open state
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  const isDropdownActive = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));


  const dropdownPaths = ["/register", "/another-path"]; // Add more paths if needed


  const isDropdownParentActive = () => isDropdownActive(dropdownPaths);

  return (
    <div
      className={`fixed top-0 left-0 h-full transition-transform duration-700 transform ${
        drawer ? "translate-x-0 w-64" : "-translate-x-full w-64"
      }`}
    >
      <div className="py-[14px] w-full">
        <div className="flex items-center h-10 w-10 gap-4 font-bold text-[22px] pl-2">
          <img className="w-full h-full" src={Logo} alt="Logo" /> Kalyan
        </div>
      </div>
      <div className="p-2 mt-4">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative flex items-center justify-between gap-3 px-2 py-2 text-black text-[16px] rounded-[4px] font-medium ${
                  isActive || location.pathname === "/"
                    ? "bg-primary text-white"
                    : ""
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon icon="material-symbols:dashboard" />
                <div>Dasboard</div>
              </div>
            </NavLink>
          </li>
          <li>
            <div
              onClick={toggleDropdown}
              className={`cursor-pointer relative flex items-center justify-between gap-3 px-2 py-2 text-black text-[16px] rounded-[4px] font-medium ${
                isDropdownParentActive() || isDropdownOpen ? "bg-primary text-white" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon icon="material-symbols:dashboard" />
                <div>Master</div>
              </div>
              <Icon
                icon={`weui:arrow-filled`}
                className={`transform transition-transform ${
                  isDropdownOpen ? "rotate-90" : ""
                }`}
              />
            </div>

            <div
              className={`menu-stepper overflow-hidden transition-all duration-500 ${
                isDropdownOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="pt-[1rem] pl-5 space-y-2">
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `relative flex items-center justify-between gap-3 px-2 text-[14px] rounded-[4px] ${
                        isActive
                          ? "before:bg-primary before:w-[4px] before:h-full before:absolute before:left-[-10px] before:top-0 font-medium text-primary"
                          : "text-gray-800"
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/another-path"
                    className={({ isActive }) =>
                      `relative flex items-center justify-between gap-3 px-2 text-[14px] rounded-[4px] ${
                        isActive
                          ? "before:bg-primary before:w-[4px] before:h-full before:absolute before:left-[-10px] before:top-0 font-medium text-primary"
                          : "text-gray-800"
                      }`
                    }
                  >
                    Another Page
                  </NavLink>
                </li>
                {/* Add more items if needed */}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
