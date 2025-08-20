import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import Hero from "./pages/Hero.jsx";
import ProductCards from "./pages/ProductCards.jsx";
import Single from "./pages/Single.jsx";
import Orders from "./pages/Orders.jsx";
import { LogIn } from "lucide-react";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import SignUpForm from "./pages/Sign_up.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Hero />} />
      <Route path="product/:_id" element={<Single />} />
      <Route path="products" element={<ProductCards />} />
      <Route path='cart' element={<Cart />} />
      <Route path="orders" element={<Orders />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUpForm/>} />

      <Route path="cart/checkout" element={<Checkout/>} />
    </Route>
  )
);
export default router;
