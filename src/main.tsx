import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="mb-auto">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  </StrictMode>
);
