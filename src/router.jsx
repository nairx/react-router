import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import RootLayout from "./RootLayout";
import AdminLayout from "./AdminLayout";
import Users from "./Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [{ index: true, element: <Users /> }],
      },
    ],
  },
]);

export default router;
