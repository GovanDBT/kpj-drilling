import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="mb-auto ">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
