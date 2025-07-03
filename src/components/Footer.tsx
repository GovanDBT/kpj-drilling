import { ChevronLeft } from "lucide-react";

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
            <li>Plot 22055, Unit G1, Gaborone West Industrial, Gaborone</li>
            <li>(+267) 3190837 / 74294929</li>
            <li>admin@kpjdrilling.co.bw</li>
          </ul>
        </div>
        <div className="text-center space-y-2 place-content-center">
          <p className="text-sm text-[#D4D4D4]">
            &copy; 2025 KPJ Drilling Pty Ltd. All Rights Reserved.
          </p>
          <p className="text-sm text-[#D4D4D4]">
            Designed & Developed by{" "}
            <a href="" className="font-bold underline">
              Webmart
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
