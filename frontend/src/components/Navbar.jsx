import { Cross, Menu, Search } from "lucide-react";
import { useState } from "react";
import { menuItems } from "./Menu_items";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleMenu = () => setMenu(!menu);

  return (
    <>
      {/* Main Navbar */}
      <nav className="relative bg-black/85 backdrop-blur-xl border-b border-white/10 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          {/* Logo */}
          <div className="cursor-pointer">
            <NavLink to="/" className="flex items-center">
              <h1 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  True
                </span>
                <span className="text-white/80 font-light">MART</span>
              </h1>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 text-base">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="px-5 py-2 text-white/80 hover:text-white font-medium transition-colors FLEX items-center gap-2 rounded-lg hover:bg-white/10"
              >
                <span className="flex items-center gap-2">{item.icon} {item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={handleMenu}
            className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 hover:border-cyan-400/50"
          >
            {menu ? (
              <Cross size={24} className="text-red-400" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleMenu}
        ></div>

        {/* Drawer Panel */}
        <div className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-gradient-to-b from-black via-violet-950 to-black shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button onClick={handleMenu}>
              <Cross size={24} className="text-red-400" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="flex items-center bg-white/10 rounded-xl px-3 py-2 border border-white/20">
              <Search className="text-cyan-400" size={18} />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                className="ml-2 w-full bg-transparent text-white placeholder:text-white/50 text-sm focus:outline-none"
              />
              {searchValue && (
                <button onClick={() => setSearchValue("")} className="text-white/50">
                  <Cross size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-4 space-y-3 items-center">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={handleMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 font-medium text-base transition"
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:from-cyan-400 hover:to-violet-500 transition">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
