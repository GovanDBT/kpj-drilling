import Hamburger from "hamburger-react";
import { useState } from "react";
import links from "../routes/routeLinks";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Hamburger size={25} toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <ul className="list-none grid absolute bg-primary gap-1 left-0 top-20 w-screen text-center pb-2 font-bold">
          {links.map((item) => (
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                isActive
                  ? "bg-secondary py-6"
                  : "font-normal py-6 hover:bg-secondary"
              }
            >
              <li key={item.url} className="text-nowrap text-lg/8">
                {item.name}
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideMenu;
