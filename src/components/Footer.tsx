import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
// modules
import SocialBadge from "./SocialBadge";
import links from "../routes/routeLinks";

const Footer = () => {
  return (
    <footer className="bg-[#0A142F] text-white py-10">
      <div className="container grid lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Quick links */}
        <div className="border-b-1 border-[#ffffff3d] lg:border-0 pb-6">
          <h3>Quick Links</h3>
          <ul className="list-none flex flex-col space-y-4 items-center lg:items-start">
            {links.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                className="hover:underline py-2 lg:py-0 w-full lg:w-fit"
              >
                <li className="flex items-center gap-3 text-xl lg:text-lg justify-center">
                  <ChevronLeft size={16} className="hidden lg:inline-block" />
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Contact information */}
        <div className="border-b-1 border-[#ffffff3d] lg:border-0 pb-6">
          <h3>Contact Info</h3>
          <ul className="list-none space-y-7">
            <li className="hover:underline text-xl lg:text-lg">
              <a
                href="https://maps.app.goo.gl/LQUDXTuXSkfPvbqa7"
                target="_blank"
              >
                Plot 22055, Unit G1, Gaborone West Industrial, Gaborone
              </a>
            </li>
            <li className="text-xl lg:text-lg">
              (+267){" "}
              <a href="tel:+2673190837" className="hover:underline">
                3190837
              </a>{" "}
              /{" "}
              <a href="tel:+26774294929" className="hover:underline">
                74294929
              </a>
            </li>
            <li className="text-xl lg:text-lg">
              {" "}
              <a
                href="mailto:admin@kpjdrilling.co.bw"
                className="hover:underline "
              >
                admin@kpjdrilling.co.bw
              </a>
            </li>
          </ul>
        </div>
        {/* copyright */}
        <div className="text-center space-y-8 place-content-center">
          <SocialBadge />
          <div className="space-y-2">
            <p className="text-[16px] lg:text-[14px] text-[#D4D4D4]">
              &copy; 2025 KPJ Drilling Pty Ltd. All Rights Reserved.
            </p>
            <p className="text-[16px] lg:text-[14px] text-[#D4D4D4]">
              Designed & Developed by{" "}
              <a
                href="https://www.webmart.co.bw/"
                target="_blank"
                className="font-bold border-b-1 hover:text-[#50c3c0] transition ease-in"
              >
                Webmart
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
