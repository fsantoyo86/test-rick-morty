import React from "react";
import { NavLink} from "react-router-dom";

/**
 * Navbar with Navlink and react-router-dom
 */

function Navbar({ toggle }) {
  return (
    <nav
      className="flex justify-between items-center h-14 bg-amber-300 text-emerald-500 font-Indie font-bold text-lg relative shadow-lg"
      role="navigation"
    >
      <NavLink to="/" className="flex items-center pl-8">
        <img
          className="w-10 mr-3 font-morty"
          src={process.env.PUBLIC_URL + "./favicon.ico"}
          alt="Rick and Morty"
        />
        Rick and Morty
      </NavLink>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <NavLink
          to="/"
          exact
          className="p-4 hover:text-emerald-600"
          activeClassName="py-3 rounded-lg bg-emerald-400 text-amber-300 p-4"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/singleChar"
          className="p-4 hover:text-emerald-600"
          activeClassName="py-3 rounded-lg bg-emerald-400 text-amber-300 p-4"
        >
          Bios
        </NavLink>
        <NavLink
          exact
          to="/characters"
          className="p-4 hover:text-emerald-600"
          activeClassName="py-3 rounded-lg bg-emerald-400 text-amber-300 p-4"
        >
          List Characters
        </NavLink>
        <NavLink
          to="/episodes"
          exact
          className="p-4 hover:text-emerald-600"
          activeClassName="py-3 rounded-lg bg-emerald-400 text-amber-300 p-4"
        >
          Episodes
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
