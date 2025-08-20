import { useState } from "react";
import { menuItems } from "./Menu_Items.jsx";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  return (
    <div className=" min-h-screen  bg-gray-900 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-all duration-200 
                  ${
                    active === item.name
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
