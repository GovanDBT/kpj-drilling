import { Link, NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Products", url: "/products" },
    { name: "Services", url: "/services" },
    { name: "Contacts", url: "/contacts" },
    { name: "Get a Quote", url: "/quote" },
  ];
  return (
    <nav className="bg-primary text-white py-5 lg:py-0">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-bold m-0">
          <Link to="/">
            KPJ Drilling{" "}
            <span className="text-[13px] font-medium">(Pty)Ltd</span>
          </Link>
        </h2>
        <div className="hidden lg:inline-flex">
          <ul className="list-none grid grid-cols-6 text-center gap-6">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-secondary py-6"
                    : "font-normal py-6 hover:text-[#90aed0]"
                }
                to={link.url}
              >
                <li key={link.url} className="text-nowrap">
                  {link.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <SideMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
