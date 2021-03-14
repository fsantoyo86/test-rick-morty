import React from "react";
import {NavLink} from 'react-router-dom';

/**
 * Landing page component.
 */

function Landing({primary,text,txtButton,img,link}) {
  
  return (
    <>
      <div
        className={
          (primary === "1"
            ? "bg-emerald-500 lg:flex-row md:flex-row "
            : "bg-amber-300 lg-flex-row-reverse md:flex-row-reverse ") +
          "h-screen flex sm:flex-col flex-col justify-center items-center"
        }
      >
        <div
          className={
            (primary === "1" ? "bg-amber-300 " : "bg-emerald-500 ml-1 ") +
            "rounded-full lg:w-96 md:w-72 sm:w-56 w-56 m-10 mb-20 shadow-2xl"
          }
        >
          <img src={img} alt="Rick and Morty" className="rounded-full p-2" />
        </div>
        <h1
          className={
            (primary === "1" ? "text-amber-300 " : "text-emerald-500 ml-10 ") +
            "flex grid grid-rows-2 justify-items-center lg:text-8xl md:text-6xl sm:text-5xl text-5xl font-Indie font-black mb-14"
          }
        >
          {text}
          <NavLink to={link}>
          <button className={(primary === "1" ? "bg-amber-300 text-emerald-500 hover:bg-amber-400 " :"bg-emerald-500 text-amber-300 hover:bg-emerald-700 ") + "text-3xl shadow-xl rounded-full w-56 h-16 lg:mt-20 md:mt-20 sm:mt-5 mt-0 focus:outline-none"}>{txtButton}</button>
          </NavLink>
        </h1>
      </div>
    </>
  );
}

export default Landing;
