import { ClosedCaption, Cross, Eye, EyeClosed, Menu, Scissors, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./Menu_items";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    console.log("Menu clicked");
    setMenu(!menu);
  };
  return (
    <>
      <nav className="flex justify-between items-center space-x-2">
        <div className="text-xl md:text-3xl font-semibold">
          <NavLink to="/">
            True
            <span className="text-gray-600 font-light font-serif">MART</span>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center w-full max-w-md mx-auto text-black rounded-2xl shadow-lg overflow-hidden border">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-3 text-black focus:outline-none font-semibold"
          />
          <button className="flex items-center gap-2 bg-transparent text-black px-6 py-3 font-semibold hover:bg-gray-100 transition duration-300">
            <Search size={20} />
          </button>
        </div>

        <div
          className="md:hidden flex items-center justify-end w-full max-w-md mx-auto"
          onClick={handleMenu}
        >
          {menu ? (
            <Scissors size={30} className="text-gray-700" />
          ) : (
            <Menu size={30} className="text-gray-700" />
          )}
        </div>

        <ul className="hidden md:flex justify-between gap-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                to={item.path}
              >
                {item.name}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`md:hidden min-h-screen gap-4 w-full  ${
          menu ? "flex" : "hidden"
        } flex-col items-center justify-center bg-white shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                to={item.path}
                onClick={handleMenu}
              >
                {item.name}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
