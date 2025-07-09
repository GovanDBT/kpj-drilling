import { createBrowserRouter } from "react-router-dom";
// pages
import Root from "./Root";
import Home from "./HomePage";
import About from "./AboutPage";
import Service from "./ServicesPage";
import Contact from "./ContactPage";
import Products from "./ProductsPage";
import NotFoundPage from "./NotFoundPage"; // error page
import ProductDetails from "./ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Service /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);

export default router;
