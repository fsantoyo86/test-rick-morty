import React from "react";
import {Link } from "react-router-dom";

/**
 * Responsive menu.
 */

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 pb-3 rounded-b-lg text-center items-center font-bold text-emerald-500 bg-amber-300"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        to="/"
        exact
        className="p-4 hover:text-amber-300 hover:bg-emerald-500"
      >
        Home
      </Link>
      <Link
        exact
        to="/singleChar"
        className="p-4 hover:text-emerald-600"
      >
        Bios
      </Link>
      <Link
        to="/characters"
        className="p-4 hover:text-amber-300 hover:bg-emerald-500"
      >
        List Characters
      </Link>
      <Link
        to="/episodes"
        className="p-4 hover:text-amber-300 hover:bg-emerald-500"
      >
        Episodes
      </Link>
    </div>
  );
}

export default Dropdown;
