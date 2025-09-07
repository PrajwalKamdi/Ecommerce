import { Package, ShoppingBag, ShoppingCart, Users } from "lucide-react";
const fullname = localStorage.getItem("fullName");
export const menuItems = [
  { name: "Products", path: "/products", icon: <ShoppingBag size={20} /> },
  { name: "Cart", path: "/cart", icon: <ShoppingCart size={20} /> },
  { name: "My Orders", path: "/orders", icon: <Package size={20} /> },
  {
    name: fullname ? fullname : "Login",
    path: fullname ? "/profile" : "/login",
    icon: <Users size={20} />,
  },
];
