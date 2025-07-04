/**
 * Navigation menu component
 */
import { Link, NavLink } from "react-router-dom";
// modules
import SideMenu from "./SideMenu";
import links from "../routes/routeLinks";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-5 lg:py-0">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-3xl m-0">
          <Link to="/">
            KPJ Drilling{" "}
            <span className="text-[13px] font-medium">(Pty)Ltd</span>
          </Link>
        </h2>
        {/* Desktop menu list */}
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
        {/* Mobile menu list + hamburger */}
        <div className="lg:hidden">
          <SideMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
