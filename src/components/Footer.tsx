import { ChevronLeft } from "lucide-react";
import SocialBadge from "./SocialBadge";

const footerLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/About" },
  { title: "Products", link: "/Products" },
  { title: "Services", link: "/Services" },
  { title: "Contact Us", link: "/Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A142F] text-white py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Quick links */}
        <div>
          <h3>Quick Links</h3>
          <ul className="space-y-3">
            {footerLinks.map((item) => (
              <li key={item.title} className="list-none">
                <a href={item.title} className="flex items-center gap-3">
                  <ChevronLeft size={16} />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact information */}
        <div>
          <h3>Contact Info</h3>
          <ul className="list-none space-y-7">
            <li className="hover:underline">
              <a
                href="https://maps.app.goo.gl/LQUDXTuXSkfPvbqa7"
                target="_blank"
              >
                Plot 22055, Unit G1, Gaborone West Industrial, Gaborone
              </a>
            </li>
            <li>
              (+267){" "}
              <a href="tel:+2673190837" className="hover:underline">
                3190837
              </a>{" "}
              /{" "}
              <a href="tel:+26774294929" className="hover:underline">
                74294929
              </a>
            </li>
            <li>
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
            <p className="text-sm text-[#D4D4D4]">
              &copy; 2025 KPJ Drilling Pty Ltd. All Rights Reserved.
            </p>
            <p className="text-sm text-[#D4D4D4]">
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
