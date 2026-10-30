import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import RootLayout from "./RootLayout";
import AdminLayout from "./AdminLayout";
import Users from "./Users";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import ErrorGlobal from "./ErrorGlobal";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorGlobal />,
    children: [
      { path: "/", element: <Home /> },
      { path: "services", element: <Services />, errorElement: <ErrorPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product-details", element: <ProductDetails />,errorElement: <ErrorPage /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Users /> },
          { path: "products", element: <Products /> },
        ],
      },
    ],
  },
]);

export default router;
