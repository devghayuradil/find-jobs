import { NavData } from "@/lib/constant";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="lg:px-4">
      <ul className="flex-col lg:flex lg:flex-row items-center gap-[25px] flex-wrap max-lg:space-y-2">
        {NavData.map((item) => (
          <li key={item.id}>
            <NavLink
              className={({ isActive }) =>
                `capitalize body-medium hover:text-accent-100 inline-block max-lg:w-full max-lg:py-2 ${
                  isActive ? "text-accent-100" : "text-dark-200"
                }`
              }
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
