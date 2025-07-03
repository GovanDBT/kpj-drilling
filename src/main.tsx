import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
