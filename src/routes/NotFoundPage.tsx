import { Unplug } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-4 h-screen items-center place-content-center">
      <div className="bg-primary p-5 rounded-full place-self-center">
        <Unplug color="#fff" size={35} />
      </div>
      <h1 className="text-5xl text-primary font-black">Error 404</h1>
      <p className="text-lg text-[#555555]">
        The requested URL or page could not be found on this server.{" "}
        <Link to="/" className="text-primary underline">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
