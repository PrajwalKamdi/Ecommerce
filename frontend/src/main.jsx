import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./route.jsx";
import Context from "./store/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </StrictMode>
);
