import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./AppContextProvider";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>,
);
