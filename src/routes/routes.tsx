import { createBrowserRouter } from "react-router-dom";
// pages
import Root from "./Root";
import Home from "./HomePage";
import About from "./AboutPage";
import Service from "./ServicesPage";
import NotFoundPage from "./NotFoundPage"; // error page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Service /> },
    ],
  },
]);

export default router;
