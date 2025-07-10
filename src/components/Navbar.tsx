/**
 * Navigation menu component
 */
import { Link, NavLink } from "react-router-dom";
// modules
import SideMenu from "./SideMenu";
import links from "../routes/routeLinks";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-5 lg:py-0 z-2 border-b-1 border-white/20">
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
          <ul className="list-none grid grid-cols-5 text-center gap-0.5">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-secondary py-6 px-2"
                    : "font-normal py-6 px-2 hover:bg-secondary"
                }
                to={link.url}
              >
                <li key={link.url} className="text-nowrap text-[16px]">
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
