import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Setting from "../pages/Setting";
import Users from "../pages/Users";
import Product from "../pages/Product";
import Update from "../pages/Update";
// import { Users } from 'lucide-react'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-product" element={<Product />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/users" element={<Users />} />
      <Route
        path="/products/update/:_id"
        element={<Update />}
      />
    </Route>
  )
);
export default router;
