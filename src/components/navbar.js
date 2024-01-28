import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../libs/constants";
import React from "react";
function Navbar() {
  return (
    <div className="relative w-[100%] ">
      <header className="bg-[#2b2b2b]  text-white flex flex-wrap gap-1 py-3 w-[100%] ">
        {navbarLinks.map((item, index) => {
          console.log(item, index);
          return (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "lg:mx-2 ms-2 lg:text-2xl text-[16px] sm:text-[19px] text-[#f1e941fb]"
                  : "lg:mx-2 text-[16px] ms-2 lg:text-2xl sm:text-[19px]"
              }
            >
              <React.Fragment>{item.title}</React.Fragment>
            </NavLink>
          );
        })}
      </header>
    </div>
  );
}

export default Navbar;
