import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "services", element: <Services /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
]);

export default router