import { Home, ShoppingBag, Users, Settings, BarChart, Plus, PlusCircleIcon, PlusCircle } from "lucide-react";

export const menuItems = [
  { name: "Dashboard", path: "/", icon: <Home size={20} /> },
  { name: "Products", path: "/products", icon: <ShoppingBag size={20} /> },
  { name: "Add Product", path: "/add-product", icon: <PlusCircle size={20} /> },
  { name: "Orders", path: "/orders", icon: <BarChart size={20} /> },
  { name: "Users", path: "/users", icon: <Users size={20} /> },
  { name: "Settings", path: "/setting", icon: <Settings size={20} /> },
];
