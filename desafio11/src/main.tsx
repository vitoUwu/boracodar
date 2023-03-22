import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { ChangePassword } from "./pages/ChangePassword";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login"),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
