import { Package, ShoppingBag, ShoppingCart, Users } from "lucide-react";
export const menuItems = [
 
  { name: "Products", path: "/products", icon: <ShoppingBag size={20} /> },
  { name: "Cart", path: "/cart",  icon: <ShoppingCart size={20} /> },
  { name: "My Orders", path: "/orders", icon: <Package size={20} /> },
  { name: "Login", path: "/login", icon: <Users size={20} /> },
];
